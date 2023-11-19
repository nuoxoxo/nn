#include "iostream"
#include "vector"
#include "cstring"
#include "unistd.h"
#include "netinet/in.h"
#include "arpa/inet.h" // inet_addr

#define MAX 77777
#define BUFFSIZE 77777
#define LOCALHOST "127.0.0.1" // 2130706433

int     sock, conn, top; 
int     num = 0;

ssize_t rune;

struct sockaddr_in servaddr, cli;

socklen_t   len = sizeof(cli);
fd_set      AA, RR, WW;

std::vector<std::string> inbox( MAX );
std::vector<int> uuid( MAX );

char    buff[BUFFSIZE + 1];
std::string head;

int     get_next_line(std::string &, std::string &);
void    speak(int, const std::string &);
void    drop(const std::string &);
void    handle_consumer_input (int);
void    handle_incoming_conn ();
void    bind_and_listen (int);
void    create_socket ();

int main(int ac, char **v)
{
    int     port;

    if (ac ^ 2)
    {
        std::cerr << "Wrong number of arguments" << std::endl;
        exit(1);
    }
    if ((sock = socket(AF_INET, SOCK_STREAM, 0)) == -1)
    {
        drop("Dropped");
    }
    port = atoi(v[1]);
    create_socket();
    bind_and_listen( port );
    FD_ZERO(& AA);
    FD_SET(sock, & AA);
    top = sock;
    while (true)
    {
        RR = WW = AA;
        if (select(top + 1, & RR, & WW, nullptr, nullptr) < 0)
        {
            drop("Dropped");
        }
        int fd = -1;
        while (++fd <= top)
        {
            if (!FD_ISSET(fd, & RR))
            {
                continue;
            }
            if (fd == sock)
            {
                handle_incoming_conn();
            }
            else
            {
                handle_consumer_input(fd);
            }
        }
    }
}

// 

void create_socket ()
{
    if ((sock = socket(AF_INET, SOCK_STREAM, 0)) == -1)
    {
        drop("Dropped at sock");
    }
}

void    bind_and_listen(int port)
{

    memset( & servaddr, 0, sizeof(servaddr));
    servaddr.sin_family = AF_INET;
    servaddr.sin_addr.s_addr = inet_addr( LOCALHOST );
    servaddr.sin_port = htons(port);
    if (bind(sock, (const struct sockaddr *) & servaddr, sizeof(servaddr)) == -1)
    {
        drop("Dropped at bind");
    }
    else if (listen(sock, 10) == -1)
    {
        drop("Dropped at listen");
    }
}

void    handle_consumer_input(int fd)
{

    if ((rune = recv(fd, buff, BUFFSIZE, 0)) < 1)
    {
        speak(fd, "server: client " + std::to_string(uuid[fd]) + " just left\n");
        close(fd);
        inbox[fd] = "";
        FD_CLR(fd, & AA);
    }
    else
    {
        std::string s;

        buff[rune] = 0;
        inbox[fd] += buff;
        while (get_next_line(inbox[fd], s))
        {
            speak(fd, "client " + std::to_string(uuid[fd]) + ": " + s);
        }
    }
}

void handle_incoming_conn(void)
{

    if ((conn = accept(sock, (struct sockaddr *) & cli, & len)) < 0)
    {
        drop("Dropped");
    }
    top = std::max(top, conn);
    uuid[conn] = num++;
    inbox[conn] = "";
    speak(conn, "server: client " + std::to_string(uuid[conn]) + " just arrived\n");
    FD_SET(conn, & AA);
}

void speak(int ff, const std::string & s)
{
    int fd = -1;

    while (++fd < top + 1)
    {
        if (FD_ISSET(fd, & WW) && fd != ff)
            send(fd, s.c_str(), s.length(), 0);
    }
}

void drop(const std::string & s)
{
    perror(s.c_str());
    exit(1);
}

int get_next_line(std::string & buf, std::string & msg)
{
    if (buf.empty())
        return 0;

    size_t  newline_pos = buf.find('\n');

    if (newline_pos != std::string::npos)
    {
        msg = buf.substr(0, newline_pos + 1);
        buf = buf.substr(newline_pos + 1);
        return 1;
    }
    return 0;
}

