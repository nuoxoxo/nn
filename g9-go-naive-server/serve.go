package main

import (
    "fmt"
    "net/http"
    "log"
    "time" // for ticker
)

func main () {

    go logger()

    // 3 routes
    //  - /         ---> index.html
    //  - /hell     - hello world
    //  - /action   - consume action ---> action.html


    fileServer := http.FileServer( http.Dir("./static") )

    http.Handle("/", fileServer)
    http.HandleFunc("/hello", handleHelloWorld)
    http.HandleFunc("/action", handleAction)

    fmt.Println("Server has started.")
    err := http.ListenAndServe(":10086", nil)
    if err != nil {
        fmt.Println("Something went wrong.")
        log.Fatal(err)
        return
    }
}

func handleHelloWorld( w http.ResponseWriter, r * http.Request ) {

    if r.URL.Path != "/hello" {
        http.Error(w, "404", http.StatusNotFound)
        return
    }
    if r.Method != "GET" {
        http.Error(w, "method not supported", http.StatusNotFound)
        return
    }
    fmt.Fprintln(w, "Hello, World!")
}

func handleAction( w http.ResponseWriter, r * http.Request ) {

    err := r.ParseForm()
    if err != nil {

        fmt.Fprintln(w, "func ParseForm err: \n\t", err)
        return 
    }
    fmt.Fprintln(w, "POST \n\tsuccessfully consumed")
    name := r.FormValue("name")
    msg := r.FormValue("msg")
    fmt.Fprintln(w, "Name: \n\t", name)
    fmt.Fprintln(w, "Msg: \n\t", msg)
}

// added logger

func logger () {

    ticker := time.NewTicker( 12 * time.Second)

    defer ticker.Stop()

    for true {
        select {
            case <- ticker.C:
                log.Println(":logger:")
        }
    }
}
