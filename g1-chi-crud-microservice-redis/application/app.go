package application

import (
	"context"
	"fmt"
	"net/http"
	_"reflect"
	_"runtime"
	"time"

	"github.com/redis/go-redis/v9"
)

type App struct {
	router  http.Handler
	redisDB *redis.Client
}

func New() *App {

	app := &App{
		router:  setupRoutes(),
		redisDB: redis.NewClient(&redis.Options{}),
	}
	return app
}

func (app *App) Start(ctx context.Context) error {

	server := &http.Server{
		Addr:    ":10086",
		Handler: app.router,
	}

	fmt.Println("Pinging the Redis database")
	err := app.redisDB.Ping(ctx).Err()
	if err != nil {
		return fmt.Errorf(
			"err/pinging redis: %w",
			err,
		)
	}

	defer func() {
		if err := app.redisDB.Close(); err != nil {
			fmt.Println("err/closing redis", err)
		}
	}()

	fmt.Println("Starting server")
	fmt.Println(" /app", app)
	fmt.Println(" /ctx", ctx)
	fmt.Println(" /server/Addr", server.Addr)
	fmt.Println(" /server/Hand", server.Handler)

	ch := make(chan error, 1)

	go func() {
		err = server.ListenAndServe()
		if err != nil {
			ch <- fmt.Errorf( // publish this val to chan ie. anyone whos listening
				"err/starting server: %w",
				err,
			)
		}
		close(ch)
	}()

	select {
	case err = <-ch:
		return err
	case <-ctx.Done():
		timeout, cancel := context.WithTimeout(context.Background(), time.Second*10)
		defer cancel()
		return server.Shutdown(timeout)
	}

	// unreached
	return nil
}
