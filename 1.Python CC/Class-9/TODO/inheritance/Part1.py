class Father:
    x=10
    y=20
    def add(self):
        print(self.x+self.y)

class Mother(Father):
   g=10
   h=20
   def mul(self):
       print(self.g*self.h)


class Son(Mother):
    a=20
    b=30
    def sub(self):
        print(self.a-self.b)


class Daughter(Mother):
    a=20
    b=30
    def sub(self):
        print(self.a-self.b)




class demo(Father,Mother,Son,Daughter):
    pass

