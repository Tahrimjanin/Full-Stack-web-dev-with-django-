class DemoClass:

    def __init__(self,num1,batch):
        self.x=num1
        self.batch=batch
        print("I a auto executed constructor")
        self.add()

    #Variable
    x=10
    y=20

    #Method
    def add(self):
        sum = self.x+self.y
        print(sum)


class MyClass1:
    pass

class MyClass2:
    pass

class MyClass3:
    pass