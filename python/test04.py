#密文输入 标准库 不用安装直接引用
import getpass
_name = "abc"
_pass = "123"
name = input("用户名？")
password = getpass.getpass("输入密码？")
#强制缩进
if _name == name and _pass == password:
    print("欢迎",name,"访问")
else:
    print("失败")
print("asda")