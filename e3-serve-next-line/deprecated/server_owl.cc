#include "iostream"
#include "vector"
#include "cstring"
#include "unistd.h"
#include "netinet/in.h"
#include "arpa/inet.h" // inet_addr
#include "algorithm" // shuffle
#include "random" // default_random_engine
#include "chrono" // system_clock

#define MAX 77777
#define BUFFSIZE 77777
#define LOCALHOST "127.0.0.1" // 2130706433
#define YC "\033[33m"
#define CC "\033[36m"
#define NC "\033[0m"
#define INTERVAL 60

std::vector<std::string> NATO = {
    "Alfa", "Bravo", "Charlie", "Delta", "Echo",
    "Foxtrot", "Golf", "Hotel", "India", "Juliett",
    "Kilo", "Lima", "Mike", "November", "Oscar",
    "Papa", "Quebec", "Romeo", "Sierra", "Tango",
    "Uniform", "Victor", "Whiskey", "X-ray", "Yankee",
    "Zulu"
};

std::string OWL = "\n     ×___×           \n\
     (o,o)       ____\n\
     [`\"']      /___/ \n\
------\" \"------/____ \n\
            \\_\\  \\__\\\n\n";


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
void    print_owl();


int main(int ac, char **v)
{
    int     port;

    if (ac ^ 2)
    {
        std::cerr << "Wrong number of arguments" << std::endl;
        exit(1);
    }

    // std::random_shuffle ( NATO.begin(), NATO.end());
    // random_shuffle was deprecated in C++14 and removed in C++17

    unsigned int SEED = std::chrono::system_clock::now().time_since_epoch().count();
    auto LAST = std::chrono::system_clock::now();
    std::shuffle ( NATO.begin(), NATO.end(), std::default_random_engine( SEED ));
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
            drop("Dropped: select");
        }

        auto CURR = std::chrono::system_clock::now();
        auto ELAP = std::chrono::duration_cast<std::chrono::seconds>(CURR - LAST).count();
        if (ELAP >= INTERVAL)
        {
            LAST = std::chrono::system_clock::now();
            speak(sock, OWL);
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

void print_owl()
{
    std::cout << OWL;
}

void create_socket ()
{
    if ((sock = socket(AF_INET, SOCK_STREAM, 0)) == -1)
    {
        drop("Dropped: sock");
    }
}

void    bind_and_listen(int port)
{

    memset( & servaddr, 0, sizeof(servaddr));
    servaddr.sin_family = AF_INET;
    servaddr.sin_addr.s_addr = htonl( INADDR_ANY ); // wildcard add. 0.0.0.0
    servaddr.sin_port = htons(port);
    if (bind(sock, (const struct sockaddr *) & servaddr, sizeof(servaddr)) == -1)
    {
        drop("Dropped: bind");
    }
    else
    {
        std::cout << "bind ok \n";
        if (listen(sock, 10) == -1)
        {
            drop("Dropped: listen");
        }
    }
    std::cout << "on port " << port << "\n";
    std::cout << "listening \n";
    print_owl();
}

void    handle_consumer_input(int fd)
{

    if ((rune = recv(fd, buff, BUFFSIZE, 0)) < 1)
    {
        speak(fd,
            YC + NATO[uuid[fd] % (int) NATO.size()] + " just left the chat \n" NC
        );
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
            speak(fd, CC + NATO[uuid[fd]] + NC + ": " + s);
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
    speak(conn,
        YC + NATO[uuid[conn] % (int) NATO.size()] + " just joined the chat \n" NC);
    FD_SET(conn, & AA);
}

void speak(int ff, const std::string & s)
{
    int fd = -1;

    std::cout << s;
    /*
    if (s != "" && s[s.size() - 1] != '\n')
    {
        std::cout << '\n';
    }
    */
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

