class BankAccount:
    def __init__(self,balance):
        self.__balance = balance

    def deposit(self,amount):
        self.__balance += amount

    def withdraw(self,amount):
        self.__balance -= amount

    def get_balance(self):
        return self.__balance


acc = BankAccount(500)
acc.deposit(5000)
acc.withdraw(4000)
print(acc.get_balance())

print(acc.balance)


