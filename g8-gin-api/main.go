package main

import (
	_ "errors"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Stud struct {
	ID    string `json:"id"`
	Final int    `json:"final"`
	Login string `json:"login"`
	User  string `json:"user"`
}

func main() {
	for _, line := range samples {
		fmt.Println(line)
	}
	router := gin.Default()

	// root

	router.GET("", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "Hello, GET request received")
	})
	router.POST("", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "Hello, POST request received")
	})

	// other routes

	router.GET("/hello", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "Hello, World!")
	})
	router.GET("/studs", func(ctx *gin.Context) {
		ctx.IndentedJSON(http.StatusOK, samples)
	})
	router.POST("/post", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "POST request received")
	})

	router.Run("localhost:3000")

}

// helper

var samples = []Stud{
	{
		ID:    "13003636",
		Login: "ttragian",
		User:  "Timothy Tragian",
		Final: 72,
	}, {
		ID:    "26466741",
		Login: "knguyen",
		User:  "King Nguyen",
		Final: 36,
	}, {
		ID:    "69000427",
		Login: "oumuamua ",
		User:  "Ou Ummagumma",
		Final: 88,
	}, {
		ID:    "26668154",
		Login: "nflan ",
		User:  "Neo Flanagan",
		Final: 88,
	},
}
