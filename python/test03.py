name = str(input("你的名字是？"))
job = input("你的职业是?")
age = int(input("你的年龄是？"))
info ='''
-----------------  %s 的清单 ---------------
                   姓名：%s
                   职业：%s
                   年龄：%d
''' % (name,name,job,age)
# %s 代表 string %d 代表只接受数据 帮助校验数据类型
print(info)
print(type(age))#打印数据类型
#raw_input python2 的 input python 3
#python2 中的input 接受的是什么格式就是什么格式 输入时没家双引号 是变量
mes ='''
-----------------  {name} 的清单 ---------------
                   姓名：{name}
                   职业：{job}
                   年龄：{age}
''' .format(name=name,job=job,age=age)
list ='''
-----------------  {0} 的清单 ---------------
                   姓名：{0}
                   职业：{1}
                   年龄：{2}
''' .format(name,job,age)
print(list)