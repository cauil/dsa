# -*- coding: utf-8 -*-

# lcs('hello', 'helao') = 'helo'

def lcs(str1, str2):
    if str1 == '' or str2 == '':
        return ''

    if str1[-1:] == str2[-1:]:
        return lcs(str1[:-1], str2[:-1]) + str1[-1:]
    else:
        l1 = lcs(str1[:-1], str2)
        l2 = lcs(str1, str2[:-1])
        return l1 if len(l1) >= len(l2) else l2

if __name__ == '__main__':
    print(lcs('hello', 'helao'))
