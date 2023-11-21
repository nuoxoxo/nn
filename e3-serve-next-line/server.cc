#include "iostream"
#include "vector"
#include "cstring"
#include "unistd.h"
#include "netinet/in.h"
#include "arpa/inet.h" // inet_addr

#define MAX 77777
#define BUFFSIZE 77777
#define LOCALHOST "127.0.0.1" // 2130706433

int sock, conn, top; 
int num = 0;

ssize_t rune;

struct sockaddr_in servaddr, cli;

socklen_t   len = sizeof(cli);
fd_set  AA, RR, WW;

std::vector<std::string> inbox( MAX );
std::vector<int> uuid( MAX );

char    buff[BUFFSIZE + 1];
std::string head;

int get_next_line(std::string & buf, std::string & msg);
void speak(int, const std::string &);
void drop(const std::string &);

int main(int ac, char **v)
{

    if (ac ^ 2) {
        std::cerr << "Wrong number of arguments" << std::endl;
        exit(1);
    }
    if ((sock = socket(AF_INET, SOCK_STREAM, 0)) == -1)
        drop("Dropped");
    memset( & servaddr, 0, sizeof(servaddr));
    servaddr.sin_family = AF_INET;
    // servaddr.sin_addr.s_addr = inet_addr(LOCALHOST);
    servaddr.sin_addr.s_addr = htonl( INADDR_ANY );
    servaddr.sin_port = htons(atoi(v[1]));
    if (bind(sock, (const struct sockaddr * ) & servaddr, sizeof(servaddr)) == -1)
        drop("Dropped");
    else if (listen(sock, 10) == -1)
        drop("Dropped");
    FD_ZERO(& AA);
    FD_SET(sock, & AA);
    top = sock;
    while (true) {
        RR = WW = AA;
        if (select(top + 1, & RR, & WW, nullptr, nullptr) < 0)
            drop("Dropped");
        int fd = -1;
        while (++fd <= top) {
            if (!FD_ISSET(fd, & RR))
                continue;
            if (fd == sock) {
                if ((conn = accept(sock, (struct sockaddr *) & cli, & len)) < 0)
                    drop("Dropped");
                top = std::max(top, conn);
                uuid[conn] = num++;
                inbox[conn] = "";
                speak(conn, "server: client " + std::to_string(uuid[conn]) + " just arrived\n");
                FD_SET(conn, & AA);
            } else if ((rune = recv(fd, buff, BUFFSIZE, 0)) < 1) {
                speak(fd, "server: client " + std::to_string(uuid[fd]) + " just left\n");
                close(fd);
                inbox[fd] = "";
                FD_CLR(fd, & AA);
                break;
            }
            buff[rune] = 0;
            inbox[fd] += buff;
            std::string s;
            get_next_line(inbox[fd], s);
            speak(fd, "client " + std::to_string(uuid[fd]) + ": " + s);
            /* for (std::string s; get_next_line(inbox[fd], s);)
                speak(fd, "client " + std::to_string(uuid[fd]) + ": " + s); */
        }
    }
}

// 

void speak(int ff, const std::string & s)
{
    int fd = -1;
    while (++fd < top + 1) {
        if (FD_ISSET(fd, & WW) && fd != ff)
            send(fd, s.c_str(), s.length(), 0);
    }
}

void drop(const std::string & s) {
    perror(s.c_str());
    exit(1);
}

int get_next_line(std::string & buf, std::string & msg)
{
    if (buf.empty())
        return 0;
    size_t newline_pos = buf.find('\n');
    if (newline_pos != std::string::npos)
    {
        msg = buf.substr(0, newline_pos + 1);
        buf = buf.substr(newline_pos + 1);
        return 1;
    }
    return 0;
}
