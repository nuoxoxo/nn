# Run
```
$ make
$ nc -C "nchamber-nseat" port (2x)
```

<!---

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
```j
bool bind_and_listen(int port)
{
    memset( & servaddr, 0, sizeof(servaddr));
    servaddr.sin_family = AF_INET;
    servaddr.sin_addr.s_addr = inet_addr(LOCALHOST);
    servaddr.sin_port = htons(port);

    if (bind(sock, (const struct sockaddr *) & servaddr, sizeof(servaddr)) == -1)
    {
        drop("Dropped at bind");
        return false;
    }
    else if (listen(sock, 10) == -1)
    {
        drop("Dropped at listen");
        return false;
    }
    return true;
}
```
```j
bool create_socket()
{
    if ((sock = socket(AF_INET, SOCK_STREAM, 0)) == -1)
    {
        drop("Dropped at sock");
        return false;
    }
    return true;
}
```

--->
