export function Day7Notes() {
  const content = String.raw
`#----------------------------------------------DAY-07_OOPS----------------------------------------------
#python is a object oriented programming language(oops)

#procedural programming: a way of programming where  data and methods are separated
#object oriented programming: a way of programming where data and methods are bundled together


# def rai_circle(r):
#     return 3.14 * r * r

# def perimeter_circle(r):
#     return 2 * 3.14 * r


# print(rai_circle(5))
# print(perimeter_circle(5))

#oops is programming style  where data and methods are bundled together
#the main use of thse oops is to create reusable code
#we can organize our code in a better way

#class: a blueprint for creating objects 
#object: an instance of a class (real world entity)(car)
#attributes: characteristics of an object (color, model, name)
#methods: functions that belong to a class (behaviors of an object)(drive, stop,break)

#creating a class
#__init__ : constructor method (used to initialize the attributes of the class)
#self is a reference to the current instance of the class


# class Car:
#     #attributes
#     def __init__(self, name, model, color):
#         self.name = name
#         self.model = model
#         self.color = color
    
#     #methods
#     def drive(self):
#         print(f"{self.name} is driving")
#     def stop(self):
#         print(f"{self.name} is stopping")
#     def brake(self):
#         print(f"{self.name} is braking")


#creating objects
# car1 = Car("BMW", "X5", "Black")
# car1.drive()
# print(car1.color)

# car2 = Car("Audi", "A6", "White")
# car2.drive()


# class Circle:
#     def __init__(self,radius): 
#         self.radius = radius  

#     def area(self):
#         return 3.14 * self.radius * self.radius  

#     def perimeter(self):
#         return 2 * 3.14 * self.radius
    
# circle1 = Circle(5)
# print(circle1.area())
# print(circle1.perimeter())

#empty class
#pass is used to create an empty class
# class Student:
#     pass

# student1 = Student()


# class Student:
#     def __init__(self,name,roll):
#         self.name = name
#         self.roll = roll
    
#     def read(self):
#         print(self.name+"is reading...")
#     def write(self):
#         print(self.name+"is writing...")


# std1 = Student("prashanth",101)
# std1.read()
# std1.write()
# std2 = Student("kumar",102)
# std2.read()
# std2.write()

#inheritance: a way of creating a new class from an existing class
#in inheritance we are getting the attributes and methonds from parent class to child class
#parent class (base class)
#child class (derived class)
#main use of inheritance is code reusability




# class Animal:  #parent class  #it inherited by child class
#     def speak(self):
#         print("Animal is speaking")
#     def eat(self):
#         print("Animal is eating")


# class Dog(Animal):  #child class #it inherits the properties of parent class
#     def bark(self):
#         print("Dog is barking")
        
# dog = Dog()
# dog.eat()  #inherited method from parent class


#overriding: a way of changing the behavior of a method in child class

class Student:  #parent class
    def __init__(self,name,roll):
        self.name = name
        self.roll = roll
    
    def stdDetais(self):
        print(f"Name: {self.name}, Roll: {self.roll}")

#super() it is used to call the constructor of parent class and access its methods and attributes

class Marks(Student): 
    def __init__(self,name,roll,marks): 
        # super.__init__(name,roll)  #calling the constructor of parent class
        self.name = name
        self.roll = roll
        self.marks = marks

    def showMarks(self):
        print(f"Name: {self.name}, Roll: {self.roll}, Marks: {self.marks}")

    def stdDetais(self):    #overriding the method of parent class
        # super().stdDetais()  #calling the method of parent class 
        print(f"Student Marks: {self.marks}")



std1 = Marks("prashanth",101,95)
# std1.showMarks()
# std1.stdDetais()  #it calls the method of child class because it is overridden

Student.stdDetais(std1) #it calls the method of parent class using class name


#---------------------------------------------Assignments-----------------------------------------------

1. #create an BankAccount class with attributes account_number, account_holder, balance
#and methods deposit, withdraw, check_balance



2. #create a SavingsAccount class that inherits from BankAccount and has an additional attribute interest_rate
#and a method add_interest that adds interest to the balance based on the interest rate
`
return (
    <div className="rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
  <div className="max-w-none rounded-md bg-slate-900">
    <pre className="font-mono text-sm leading-7 text-slate-100 p-4 overflow-x-auto">
      <code>{content}</code>
    </pre>
  </div>
</div>
  )
}