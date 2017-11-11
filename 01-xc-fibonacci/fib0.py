# -*- coding: utf-8 -*-

def fib0(n):
    return 1 if n < 2 else fib0(n-1) + fib0(n-2)


if __name__ == '__main__':
    for i in range(10):
        print('fib0(%s): %s' % (i, fib0(i)))
