export function Day8Notes() {
  const content = String.raw
  `
#------------------------------------------DAY_08-----------------------------------
  #single Inheritance ==> only one parent class and one child class
# class Parent:
#     def func1(self):
#         print("this is parent class")

# class Child(Parent):
#     def func2(self):
#         print("this is child class")

# obj = Child()

# obj.func1() #parent class method
# obj.func2() #child class method

#Multi-level Inheritance ==> one parent class and one child class and one grand child class
# child inherits from a parent  and then another child inherits from that child

# class GrandParent:         
#     def func1(self):
#         print("this is grand parent class")

# class Parent(GrandParent):
#     def func2(self):
#         print("this is parent class")

# class Child(Parent):
#     def func3(self):
#         print("this is child class")


# obj = Child()
# obj.func1() #grand parent class method
# obj.func2() #parent class method
# obj.func3() #child class method


#multiple Inheritance ==> one child class and multiple parent class


# class Father:
#     def func1(self):
#         print("this is father class")

# class Mother:
#     def func2(self):
#         print("this is mother class")

# class Child(Father , Mother):
#     def func3(self):
#         print("this is child class")

# obj = Child()
# obj.func1() #father class method
# obj.func2() #mother class method
# obj.func3() #child class method


#Hierarchical Inheritance ==> one parent class and multiple child class

# class Parent:
#     def func1(self):
#         print("this is parent class")

# class Child1(Parent):
#     def func2(self):
#         print("this is child1 class")

# class Child2(Parent):
#     def func3(self):
#         print("this is child2 class")
# class Child3(Parent):
#     def func4(self):
#         print("this is child3 class")

# obj_for_child1 = Child1()
# obj_for_child2 = Child2()
# obj_for_child3 = Child3()

# obj_for_child1.func1() #parent class method
# obj_for_child1.func2() #child1 class method


#the another feature of this oops is polymorphism
#polymorphism means many forms

#this polymorphism enables us to use same function name or method name to perform diffrent tasks
#based on the input(object) etc...

#type of polymorphism
#1. compile time polymorphism ==> is achieved by method overloading at the time of compile
#2. run time polymorphism is achieved by method overriding,operator overloading, duck typeing at the time of run

# we have len() function in python
# print(len("hello"))

# print(len([10,20]))

#method overloading ==> means same method name with diffrent number of arguments

# class ExampleOfMethodOverLoading:
#     def add(self,*args):
#         print(args)
#         return sum(args)
#     def add(self,x,y,z)  #it gives error
#        return x+y+z
    
# obj = ExampleOfMethodOverLoading()
# result = obj.add(1,2,3,4)
# print(result) 

#Runtime polymorphism ==> method overriding, operator overloading, duck typing

#method Overriding ==> when a child class method has same name as a parent class method 

# class Animal:
#     def sound(self):
#         print("Animal makes a sound")
    
# class Dog(Animal):
#     def sound(self):
#         print("Dog barks")

# obj_animal = Dog()
# obj_animal.sound() #it calls the child class method

# class SystemCalculator:
#     def add(a, b):
#         return a + b

# class MyCalculator(SystemCalculator):
#     def add(self, a, b):
#         return f"the result is {a + b}"

# obj = MyCalculator()
# result = SystemCalculator.add(10, 20)  #here no msg just it giving the result
# print(result)

# result = obj.add(10, 20)  #here it gives the msg with result
# print(result)

#Operator Overloading ==> when same operator behaves diffrently based on the input

# print(10 + 20)#it performs addition
# int.__add__(10,20)

# print("10" + "20") #it performs concatenation
# str.__add__("10","20")

#to add complex numbers we can use + operator

#3+2j + 5+6j
#(3+5) + (2j + 6j)
#8 + 8j

# class ComplexNumber:
#     def __init__(self, real, imag):
#         self.real = real
#         self.imag = imag
    
#     def __add__(self, other):
#         real_part = self.real + other.real
#         Imag_part = self.imag + other.imag
#         return f"{real_part} + {Imag_part}j"

# o1 = ComplexNumber(3,2)#3+2j
# o2 = ComplexNumber(5,6)#5+6j
# result = o1 + o2 
# print(result)

#Duck Typing ==> it is a concept related to dynamic typing

#dynamic typing ==> it is a concept related to dynamic typing (python,javascript,ruby)
# def add(a, b): #a is string here
#     return a + b

# result1 = add("10", "20") #it performs concatenation
# print(result1)


#static typing ==> it is a concept related to static typing (java,c,c++)
# int add(int a,int b){
#     return a+b;
# }
# add("10","20")

# class Dog:
#     def sound(self):
#         return "Dog barks"
# class Cat:
#     def sound(self):
#         return "Cat meows"


# def animal_sound(animal):
#     print(animal.sound())


# dog = Dog()
# cat = Cat()

# # animal_sound(dog)
# animal_sound(cat)

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