package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"reflect"
	"runtime"

	"github.com/nuoxoxo/agogo/tree/main/chi-crud-microservice-redis/application"
)

func main() {
	app := application.New()
	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cancel()
	err := app.Start(ctx)
	if err != nil {
		fmt.Println("/failed to start app:\n", err)
	}

	// error logger DIY
	fmt.Println("\n", whoAmI(app.Start))
}

func whoAmI(i interface{}) string {
	return "/func " + runtime.FuncForPC(reflect.ValueOf(i).Pointer()).Name()
}
