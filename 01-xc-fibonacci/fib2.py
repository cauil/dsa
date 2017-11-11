# -*- coding: utf-8 -*-

def fib2(n):
    f = 0
    g = 1

    while n > 0:
        g = g + f
        f = g - f
        n = n - 1

    return g

if __name__ == '__main__':
    for i in range(10):
        print('fib2(%s): %s' % (i, fib2(i)))
