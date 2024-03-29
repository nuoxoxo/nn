package handlers

import (
	"fmt"
	"net/http"
)

type BarHandlers struct{}

func (bh *BarHandlers) Create(
	writer http.ResponseWriter,
	req *http.Request,
) {
	DBG_bar(writer, req, "/Create")
}

func (bh *BarHandlers) Get(
	writer http.ResponseWriter,
	req *http.Request,
) {
	DBG_bar(writer, req, "/List")
}

func (bh *BarHandlers) Update(
	writer http.ResponseWriter,
	req *http.Request,
) {
	DBG_bar(writer, req, "/Update")
}

// Helper

func DBG_bar(
	writer http.ResponseWriter,
	req *http.Request,
	endpoint string,
) {

	// write Accpt|202 for status
	writer.WriteHeader(http.StatusAccepted)
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
