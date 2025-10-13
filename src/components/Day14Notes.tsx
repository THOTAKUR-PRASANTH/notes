export function Day14Notes() {
  const content =`
#Error Handling And Debugging......

#python Exception handling allows a program to gracefully hanadle the unexpected 
#errors that may occur during the execution of a program.

#basic diffrence between the error and the Exception 

# #Error:
# x = int(input("Enter a number: "))
# #Exception: 
# x = 10/0 
# print(x)
# print("heloo")    

#Python privide the four main keywords for handleing the Exceptions 

#1. try   --> it will try to execute the code that may cause an exception
#2. except  -- > it will catch and handle the exception if it occurs
#3. else  --> it will execute if no exception occurs
#4. finally --> it will execute regardless of whether an exception occurs or not

# try:
#     #code that may cause an exception
# expect:
#     #code to handle the exception
# else:
#     #code to execute if no exception occurs
# finally:
#     #code to execute regardless of whether an exception occurs or not

#Example 1: Handling a specific exception

# try:
    
#     y = int(input("Enter a number: "))
#     print("You entered:", y)

# except ZeroDivisionError:
#     print("Error: Division by zero is not allowed.")     # we can handle mutliple Exceptions by using this mutliple except block...
# except ValueError:
#     print("Error: Invalid input. Please enter a valid integer.")
# except Exception as e:
#     print("An error occurred:", e)
# print("Hello")

# try:
#     n =0
#     res = 100/n
# except ZeroDivisionError:   
#     print("Error: Division by zero is not allowed.")

# else:
#     print("the result is :",res)

# finally:
#     print("Execution completed.......")


#Raising Exceptions Manually
# we can raise exceptions manually using the raise keyword

# def check_age(age):
#     if age < 0 :
#         raise ValueError("Age cannot be negative.")
#     print("Your age is:", age)

# try:
#     user_age = int(input("Enter your age: "))
#     check_age(user_age)
# except ValueError as e :
#     print(e)

#custom Exceptions

#you can create your own custom exceptions by defining a new class 
#that inherits from the built-in Exception class.

# class NegativeAgeError(Exception):
#     pass

# def check_age(age):
#     if age < 0 :
#         raise NegativeAgeError("Age cannot be negative.")
#     print("Your age is:", age)

# try:
#     user_age = int(input("Enter your age: "))
#     check_age(user_age)
# except NegativeAgeError as e :
#     print(e)

#builtin Exceptions in Python
#1. ValueError: Raised when a function receives an argument of the right type but an
#   inappropriate value.
#2. TypeError: Raised when an operation or function is applied to an object of
#   inappropriate type.
#3. IndexError: Raised when a sequence subscript is out of range.

#4. KeyError: Raised when a dictionary key is not found.
#5. AttributeError: Raised when an attribute reference or assignment fails.


# #valueError Example
# try:
#     num = int(input("Enter a number: "))
#     print("You entered:", num)
# except ValueError:
#     print("Error: Invalid input. Please enter a valid integer.")

#IndexError Example
# l = [1, 2, 3]

# try:
#     print(l[5])
# except IndexError:
#     print("Error: Index out of range.")

#AttributeError Example
# class Person:
#     def __init__(self, name):
#         self.name = name

# try:
#     p = Person("hello")
#     print(p.age)  # Trying to access a non-existent attribute
# except AttributeError:
#     print("Error: Attribute not found.")


#Another Example of Custom Exception (user defined Exception)
# class InvalidAgeError(Exception):
#     def __init__(self,age,msg):
#         self.msg = msg
#         self.age = age
#         super().__init__(self.msg)

#     def __str__(self):
#         return f'{self.age} --> {self.msg}'


# def check_age(age):
#     if age < 0 or age > 120:
#         raise InvalidAgeError(age,"Age must be b/w 0 and 120!....")
#     else:
#         print(f"Age set to {age}")

# try:
#     check_age(150)
# except InvalidAgeError as e:
#     print(e)

#by using the above example we can create our own custom Exception
#1. Real-world Example : Invalid Email
#2. Banking Application : Insufficient Funds
#3. File Handling : File Not Found
#4. User Authentication : Invalid Credentials
#5. Data Validation : Invalid Data Format
#6. Network Operations : Connection Timeout
#7. E-commerce Application : Out of Stock
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
