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

	// sample routes

	router.GET("/studs", getStuds)

	// other routes

	router.GET("/", defaultSample)
	router.POST("/", defaultSample)
	router.PUT("/", defaultSample)
	router.PATCH("/", defaultSample)
	router.DELETE("/", defaultSample)
	router.OPTIONS("/", defaultSample)
	router.POST("/post", defaultSample)
	router.GET("/hello", helloWorld)

	router.Run(":10086")

}

// define routes

func getStuds(ctx *gin.Context) {
	ctx.IndentedJSON(http.StatusOK, samples)
}

func helloWorld(ctx *gin.Context) {
	ctx.String(http.StatusOK, "Hello, World!")
}

func defaultSample(ctx *gin.Context) {
	ctx.String(http.StatusOK, ctx.Request.Method+"\nrequest received on route\n"+ctx.FullPath())
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
