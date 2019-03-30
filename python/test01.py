#!/usr/bin/env python
import os
count = 0
while count<3:
    name = input("用户名？")
    password = input("密码")
    if name == "abc" and password =="123":
        def wirteFile():
            a = list()
            a.append(name)
            a.append(password)
            f = open("D:\pyCode\test\a.txt", mode='a', encoding="UTF-8")
            for i in a:
                f.write(i+"\n")
            f.close()



