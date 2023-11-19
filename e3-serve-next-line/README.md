# Run
```c
// 1st terminal
$ make

// 2nd and 3rd terminal
$ nc localhost 8080 
```

# Todo
Consider using
```j
void handle_incoming_conn(void)
{

    if ((conn = accept(sock, (struct sockaddr *) & cli, & len)) < 0)
        drop("Dropped");
    top = std::max(top, conn);
    uuid[conn] = num++;
    inbox[conn] = "";
    speak(conn, "server: client " + std::to_string(uuid[conn]) + " just arrived\n");
    FD_SET(conn, & AA);
}
```
```j
void handle_consumer_input(int fd)
{

    if ((rune = recv(fd, buff, BUFFER_SIZE, 0)) < 1)
    {
        speak(fd, "server: client " + std::to_string(uuid[fd]) + " just left\n");
        close(fd);
        inbox[fd] = "";
        FD_CLR(fd, & AA);
    }
    else
    {
        buff[rune] = 0;
        inbox[fd] += buff;
        std::string s;
        while (get_next_line(inbox[fd], s))
            speak(fd, "client " + std::to_string(uuid[fd]) + ": " + s);
    }
}
```
