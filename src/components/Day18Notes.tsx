export function Day18Notes() {
  const content =`
#Decorators in Python

# A decorator is a special type of function that modifies the behavior of another function.
# A Decorator are often used in several scenarios, 
# such as logging, access control, instrumentation, and caching,payment validation etc.

# def func():
#     print("This is a simple function.")
    
# def decorator(func):

#     def wrapper():
#         print("Welecome too func")
#         func()  # Call the original function
#         print("Exiting func")
#     return wrapper

# decorated_func = decorator(func)  # Applying the decorator
# decorated_func()  # Calling the decorated function



#Types of Decorators
#1.Functional Decorators
#2.Class Decorators
#3.Method Decorators

#Functional Decorators Example
#The most common decorators in python used to wrap and modify the behavior of functions.

# def simple_decorator(func):

#     def wrapper():
#         print(">>> Starting the function...")
#         func()
#         print(">>> Function has ended.")
#     return wrapper

# @simple_decorator
# def greet():
#     print("Hello, World!")

# greet()  # Calling the decorated function


#Method Decorators Example
#Method decorators are used to modify the behavior of methods within classes.

# def method_decorators(func):
#     def wrapper(self, *args, **kwargs):
#         print(">>> Before method execution")
#         result = func(self, *args, **kwargs)
#         print(">>> After method execution")
#         return result
#     return wrapper

# class MyClass:

#     @method_decorators
#     def say_hello(self):
#         print("Hello from MyClass!")

# obj = MyClass()
# obj.say_hello()

#built-in Decorators
#Python provides several built-in decorators, such as @staticmethod, @classmethod, and @property.


# class MyClass:
    
#     @staticmethod #Static method decorator does not require an instance of the class to be called
#     def static_method():
#         print("This is a static method.")

#     hello = 20

#     @property     #By using this property decorator we can access method like an attribute
#     def my_property(self):
#         return "This is a property."

# obj = MyClass()
# MyClass.static_method()
# print(obj.my_property)
# print(obj.hello)


#real world payment confirmation validation using decorators

# def payment_validation_decorator(func):

#     def wrapper(amount, card_number):
#         if amount <= 0:
#             print("Invalid payment amount.")
#             return
#         if len(card_number) != 16 or not card_number.isdigit():
#             print("Invalid card number.")
#             return
#         print("Payment validation successful.")
#         return func(amount, card_number)
#     return wrapper

# @payment_validation_decorator
# def process_payment(amount, card_number):
#     print(f"Processing payment of amount using card {card_number}.")

# process_payment(100, "1234567890123456")  # Valid payment
# process_payment(-50, "1234567890123456")  # Invalid amount

    
#Generators in Python
#Generators are a type of iterable, like lists or tuples, but they generate values 
# on-the-fly and do not store them in memory.

#the yield keyword is used to define a generator function.

#the diffrence between return and yield is that return statement
# return is used to exit a function and return a value,
# whereas yield is used to produce a series of values over time, pausing the function's state between each yield.

#Creating a simple generator function

# def simple_generator():
#     for i in range(5):
#         yield i * i  # Yielding square of numbers from 0 to 4


# l = simple_generator()
# for value in l:
#     print(value)

#The Main advantage of using generators is memory efficiency,
#as they generate values on-the-fly and do not require
# storing the entire sequence in memory
------------------------------------Assignment-----------------------------------------
#Creating a generator for Fibonacci sequence
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
