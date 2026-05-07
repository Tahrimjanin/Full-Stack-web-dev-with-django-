from abc import ABC, abstractmethod

class Father(ABC):
    @abstractmethod
    def loan(self):
        pass


class Son(Father):
    def loan(self):
        pass
    def deposit(self):
        pass


class Login(ABC):
    @abstractmethod
    def webpage(self):
        pass

    @abstractmethod
    def username(self):
        pass

    @abstractmethod
    def password(self):
        pass

    @abstractmethod
    def fill_form(self):
        pass

    @abstractmethod
    def form_submit(self):
        pass

    @abstractmethod
    def login_success(self):
        pass

    @abstractmethod
    def login_fail(self):
        pass



class MyLoginFeature(Login):
    def webpage(self):
        pass

    def username(self):
        pass

    def password(self):
        pass

    def fill_form(self):
        pass

    def form_submit(self):
        pass

    def login_success(self):
        pass

    def login_fail(self):
        pass

