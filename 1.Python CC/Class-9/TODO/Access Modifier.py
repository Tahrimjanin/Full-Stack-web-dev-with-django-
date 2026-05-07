class Father:
    _balance=500
    def buy_food(self):
        print(self._balance)


class Son(Father):
    def buy_car(self):
        print(self._balance)


father = Father()
print(father._balance)
