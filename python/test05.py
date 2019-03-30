age = 24
count = 0
while count < 3:
    ages = int(input("我的年龄是"))
    if ages == age:
        print("very good")
        break
    elif ages > age:
        print("think smaller...")
    else:
        print("think bigger")
    count = count + 1
    if count == 3:
        con_flag = input("是否继续")
        if con_flag == 'y':
            count = 0
        elif con_flag == 'n':
            count = 3
            print("You fuck off")
        else :
            count = 3
            print("You no input")
else:
    print("fuck off")
    #python 特有的语法 不满足while条件后 执行else语句