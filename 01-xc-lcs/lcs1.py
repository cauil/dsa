# -*- coding: utf-8 -*-

# lcs('hello', 'helao') = 'helo'

def lcs1(str1, str2):
    L = [[0 for i in range(len(str1)+1)] for j in range(len(str2)+1)]

    for i in range(len(str1)-1, -1, -1):
        for j in range(len(str2)-1, -1, -1):
            if str1[i] == str2[j]:
                L[i][j] = 1 + L[i+1][j+1]
            else:
                L[i][j] = max(L[i+1][j], L[i][j+1])

    i = 0
    j = 0
    S = ''
    while i < len(str1) and j < len(str2):
        if str1[i] == str2[j]:
            S += str1[i]
            i += 1
            j += 1
        elif L[i+1][j] >= L[i][j+1]:
            i += 1
        else:
            j += 1

    return S

if __name__ == '__main__':
    print(lcs1('hello', 'helao'))
