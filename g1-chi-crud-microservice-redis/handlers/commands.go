package handlers

import (
	"fmt"
	"net/http"
)

type CommandHandlers struct{}

func (cmdh *CommandHandlers) Create(
	writer http.ResponseWriter,
	req *http.Request,
) {
	writer.WriteHeader(http.StatusOK)
	fmt.Println("/Create", req.URL.Path, req.Method)
}

func (cmdh *CommandHandlers) List(
	writer http.ResponseWriter,
	req *http.Request,
) {
	writer.WriteHeader(http.StatusOK)
	fmt.Println("/List", req.URL.Path, req.Method)
}

func (cmdh *CommandHandlers) GetByID(
	writer http.ResponseWriter,
	req *http.Request,
) {
	fmt.Println("/GetByID", req.URL.Path, req.Method)
}

func (cmdh *CommandHandlers) UpdateByID(
	writer http.ResponseWriter,
	req *http.Request,
) {
	fmt.Println("/UpdateByID", req.URL.Path, req.Method)
}

func (cmdh *CommandHandlers) DeleteByID(
	writer http.ResponseWriter,
	req *http.Request,
) {
	fmt.Println("/DeleteByID", req.URL.Path, req.Method)
}
