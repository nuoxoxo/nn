### Run Redis ___either___ on Brew
```
$ brew services start redis
```
### ___or___ on Docker
```
$ redis-cli -h 127.0.0.1 -p 6379
```
### Redis CLI
```
$ docker run -p 6379:6379 redis:latest
127.0.0.1:6379> KEYS * 
```

- Chi 
- Redis 
- Docker 

<details><summary>1.2</summary>

```
$ go get -u github.com/go-chi/chi/v5
```

</details>

<details><summary>1.1</summary>

```go
package main

import (
	"fmt"
	"net/http"
	_"github.com/go-chi/chi/v5"
	_"io/ioutil"
)

func main() {
	server := &http.Server{
		Addr:    ":10086",
		Handler: http.HandlerFunc(handler),
	}
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println("err/listen & serve", err)
	}
}

func handler(writer http.ResponseWriter, req *http.Request) {
	path := req.URL.Path
	writer.Write([]byte("Hello, World!\n"))

	fmt.Println(path, req.Method)

	if req.Method != http.MethodPost {
		fmt.Println("\t/Not POST/", req.Method)
	}
	if len(req.URL.Query()) == 0 {
		fmt.Println("\t/empty query")
	}
	for k, v := range req.URL.Query() {
		fmt.Println("\t/item", k, v)
	}

	fmt.Println("\t/end \n")
}

```
</details>

<details><summary>1</summary>

	`http.Server` - basic handler - `server.ListenAndServe` - 
```
### Do after doing the following

$ go build main.go && ./main
```
```go
package main

import (
	"fmt"
	"net/http"
)

func main () {
	server := &http.Server {
		Addr: ":10086",
		Handler: http.HandlerFunc( handler ),
	}
	err := server.ListenAndServe()
	if err != nil {
		fmt.Println("err/listen & serve", err)
	}
}

func handler (writer http.ResponseWriter, req *http.Request) {
	writer.Write( []byte("Hello, World!") )
}
```

</details>
