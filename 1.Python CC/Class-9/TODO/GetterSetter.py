class GetterSetter:

    def __init__(self, name):
        self.__name = name


    def set_name(self, name):
        self.__name = name


    def get_name(self):
        return self.__name



obj = GetterSetter("")
obj.set_name("Python Batch 13")
print(obj.get_name())