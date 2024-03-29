package handlers

import (
	"fmt"
	"net/http"
)

type FooHandlers struct{}

func (fh *FooHandlers) Create(writer http.ResponseWriter, req *http.Request) {
	DBG_foo(writer, req, "/Create")
}

func (fh *FooHandlers) Get(writer http.ResponseWriter, req *http.Request) {
	DBG_foo(writer, req, "/List")
}

func (fh *FooHandlers) Update(writer http.ResponseWriter, req *http.Request) {
	DBG_foo(writer, req, "/Update")
}

// helper
// lowercase name for :: unexported func
func DBG_foo(
	writer http.ResponseWriter,
	req *http.Request,
	endpoint string,
) {

	// write 418
	writer.WriteHeader(http.StatusTeapot)
	// DBG
	fmt.Println(endpoint, req.URL.Path, req.Method)

	// print out param/queryStr
	if len(req.URL.Query()) == 0 {
		fmt.Println("\t/empty query")
	}
	for k, v := range req.URL.Query() {
		fmt.Println("\t/item", k, v)
	}
}
