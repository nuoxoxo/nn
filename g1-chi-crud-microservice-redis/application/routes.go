package application

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/nuoxoxo/agogo/tree/main/chi-crud-microservice-redis/handlers"
)

func setupRoutes() *chi.Mux {

	router := chi.NewRouter()
	router.Use(middleware.Logger)

	router.Get(
		"/",
		func(writer http.ResponseWriter, r *http.Request) {
			writer.WriteHeader(http.StatusOK)
		},
	)
	router.Route("/commands", setupCommandsRoutes)
	router.Route("/foo", setupFooRoutes)
	router.Route("/bar", setupBarRoutes)
	return router
}

func setupCommandsRoutes(router chi.Router) {

	cmdHandlers := &handlers.CommandHandlers{}
	router.Get("/", cmdHandlers.List)
	router.Post("/", cmdHandlers.Create)
	router.Get("/{id}", cmdHandlers.GetByID)
	router.Put("/{id}", cmdHandlers.UpdateByID)
	router.Delete("/{id}", cmdHandlers.DeleteByID)
}

func setupFooRoutes(router chi.Router) {

	fooHandlers := &handlers.FooHandlers{}
	router.Get("/", fooHandlers.Get)
	router.Post("/", fooHandlers.Create)
	router.Put("/", fooHandlers.Update)
}

func setupBarRoutes(router chi.Router) {

	barHandlers := &handlers.BarHandlers{}
	router.Get("/", barHandlers.Get)
	router.Post("/", barHandlers.Create)
	router.Patch("/", barHandlers.Update)
}

/*
{Method: http.MethodGet, Path: "/"}, // GET
{Method: http.MethodGet, Path: "/bar"},
{Method: http.MethodGet, Path: "/foo"},
{Method: http.MethodPost, Path: "/bar"}, // POST
{Method: http.MethodPost, Path: "/foo"},
{Method: http.MethodPatch, Path: "/bar"}, // PATCH
{Method: http.MethodPut, Path: "/foo"},   // PUT
*/
