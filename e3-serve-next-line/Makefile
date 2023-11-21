# cc			= c++ -std=c++17
# revert to c++11 to to make shuffle work
cc			= c++ -std=c++11
cflags		= -Werror -Wextra -Wall
src			= server.cc
name		= a.out
port		= 7777


all			: $(name)

$(name)		: $(src)
			@ $(cc) $(cflags) $^ -o $@
			@ ./$(name) $(port)

clean		:
			rm -f $(name)

fclean		: clean
			rm -f out *.out

f			: fclean

re			: f all


.PHONY		: fclean clean all re f

