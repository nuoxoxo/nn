def helper(s, idx):
    D = []
    sign = '+'
    num = 0
    i = idx
    while i < len(s):
        c = s[i]
        if c.isdigit():
            num = num * 10 + int(c)
        if not c.isdigit() or i == len(s) - 1:
            if c == '(':
                num, i = helper(s, i + 1)
                l, r = 1, 0
                for j in range(i + 1, len(s)):
                    if s[j] == ')':
                        r += 1
                        if r == l:
                            i = j
                            break
                    elif s[j] == '(':
                        l += 1
            pre = -1
            if sign == '+':
                D.append(num)
            elif sign == '-':
                D.append(-num)
            elif sign == '*':
                pre = D.pop()
                D.append(pre * num)
            elif sign == '/':
                pre = D.pop()
                D.append(int(pre / num))
            sign = c
            num = 0
            if c == ')':
                break
        i += 1
    ans = 0
    while D:
        ans += D.pop()
    return ans, i

def EVAL(expr):
    expr = expr.replace(' ', '')
    res, _ = helper(list(expr), 0)
    return res

def main():
    while True:
        expr = input("<   ")
        if expr.lower() == 'exit':
            break
        print(">  ", EVAL(expr), end='\n\n')

if __name__ == "__main__":
    main()
