# -*- coding: utf-8 -*-
memo = {}

def fib1(n):
    if n in memo:
        return memo[n]

    memo[n] = 1 if n < 2 else fib1(n-1) + fib1(n-2)
    return memo[n]


if __name__ == '__main__':
    for i in range(10):
        print('fib1(%s): %s' % (i, fib1(i)))
