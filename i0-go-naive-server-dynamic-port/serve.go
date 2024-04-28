package main

import (
    "fmt"
    "net/http"
    "net"
    "log"
)

func main () {

    fileServer := http.FileServer( http.Dir("./static") )

    http.Handle("/", fileServer)
    http.HandleFunc("/hello", handleHelloWorld)
    http.HandleFunc("/action", handleAction)

    fmt.Println("Server is  up")
    listener, err := net.Listen("tcp", ":0") // using net.Listen for dynamic porting
    if err != nil {
        fmt.Println("Failed to start server")
        log.Fatal(err)
        return
    }

    defer listener.Close()

    port := listener.Addr().( * net.TCPAddr).Port
    fmt.Println("... running on port:", port)

    err = http.Serve(listener, nil)
    if err != nil {
        fmt.Println("Failed to serve:")
        log.Fatal(err)
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

        fmt.Fprintln(w, "ParseForm() err: \n\t", err)
        return 
    }
    fmt.Fprintln(w, "POST \n\tsuccessfully consumed")
    name := r.FormValue("name")
    msg := r.FormValue("msg")
    fmt.Fprintln(w, "Name: \n\t", name)
    fmt.Fprintln(w, "Msg: \n\t", msg)
}


