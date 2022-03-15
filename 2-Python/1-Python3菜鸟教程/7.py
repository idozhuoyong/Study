class Animal:
    name = 'Animal'
    age = 0
    __weight = 'xxx'

class Dog(Animal):
    def __init__(self, weight) -> None:
        super().__init__()
        # self.__weight = weight

    def speak(self):
        print(self.name)

d = Dog(111)
d.speak()
