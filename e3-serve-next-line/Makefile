cc			= c++
cflags		= -Werror -Wextra -Wall
#src			= server.cc
src			= new_server.cc
name		= a.out
port		= 7777

all			: $(name)

$(name)		: $(src)
			$(cc) $(cflags) $^ -o $@
			./$(name) $(port)

clean		:
			rm -f $(name)

fclean		: clean
			rm -f out *.out

f			: fclean

re			: f all

.PHONY		: fclean clean all re f
