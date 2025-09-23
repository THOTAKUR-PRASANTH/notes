export function Day3Notes() {
  const content = String.raw`""""------------------------------------------------------------------DAY_03--Functions and Modules-------------------------------------------------------------------------"""

# -----------------------------
# FUNCTIONS
# -----------------------------
# A function is block of code, runs only when we call it
# Main use → reuse the code (no need write again)

# -----------------------------
# Function Definition and Calling
# -----------------------------
def hello():
    print("Hello")

hello()   # calling function


# -----------------------------
# Adding of Two Numbers
# -----------------------------
def addingOfTwoNumbers():
    x = 10
    y = 20
    print("The sum is =", x + y)

addingOfTwoNumbers()


# -----------------------------
# Adding two numbers by passing arguments
# -----------------------------
def add(x, y):
    print("The sum is =", x + y)

x = int(input("Enter the x value: "))
y = int(input("Enter the y value: "))
add(x, y)


# -----------------------------
# Using return in functions
# -----------------------------
def add(x, y):
    return x + y

x = int(input("Enter the x value: "))
y = int(input("Enter the y value: "))
result = add(x, y)
print("Result =", result)

# direct call
ans = add(4, 5)
print("Answer =", ans)


# -----------------------------
# Function with multiple parameters
# -----------------------------
def addEmail(s1, s2, s3, s4):
    print(s1 + "@gmail.com")
    print(s2 + "@gmail.com")
    print(s3 + "@gmail.com")
    print(s4 + "@gmail.com")

addEmail("dora", "krish", "ram", "hide")


# -----------------------------
# Passing a List as Parameter
# -----------------------------
def addEmail(l):
    list2 = []
    for i in l:
        list2.append(i + "@gmail.com")
    return list2

l = ["dora", "krishna", "ram", "hide"]
result = addEmail(l)
for i in result:
    print(i)


# -----------------------------
# Default Parameter Values
# -----------------------------
def sub(x=2, y=4):
    return y - x

print(sub())   # uses default values


# -----------------------------
# Voting System Example
# -----------------------------
def votingSys(age):
    if age >= 18:
        print("Able to vote!")
    else:
        print("Not able to vote!...")

votingSys(19)


# -----------------------------
# MODULES IN PYTHON
# -----------------------------
# A module is just a python file (.py)
# contains → variables, functions, classes
# main use → reuse code in another file

# Types:
# 1. Built-in modules (already in python) → math, random, datetime, os
# 2. External modules (need install by pip) → numpy, pandas, requests
# 3. User-defined (we create)

# -----------------------------
# BUILT-IN MODULES
# -----------------------------

# MATH
import math
print(math.pi)          # 3.14
print(math.sqrt(16))    # 4.0

# RANDOM
import random
print(random.randint(1, 10))   # random int
print(random.choice(['a','b','c']))  # pick random

# DATETIME
import datetime
today = datetime.date.today()
print("Today:", today)

# -----------------------------
# DIFFERENT WAYS TO IMPORT
# -----------------------------
# import math
# from math import sqrt, pi
# import math as m   # alias
# from math import *  # (not good)

# -----------------------------
# USER DEFINED MODULE SAMPLE
# -----------------------------
# sample.py file content:
# def fact(n):
#     res = 1
#     for i in range(n,0,-1):
#         res = res * i
#     return res
#
# in main file:
# import sample
# print(sample.fact(5))

# -----------------------------
# PACKAGES IN PYTHON
# -----------------------------
# Package = folder having many modules
# must have __init__.py file
#
# Example:
# mypkg/
#     __init__.py
#     mod1.py
#     mod2.py
#
# use:
# import mypkg.mod1

# -----------------------------
# POPULAR PACKAGES
# -----------------------------
# numpy → number work
# pandas → data
# matplotlib → charts
# requests → API calls
# flask, django → web

# install using pip:
# pip install numpy

# -----------------------------
# STANDARD LIBRARY SMALL NOTES
# -----------------------------
import string
print(string.digits)   # 0-9

import json
data = {"name": "prashanth", "age": 24}
print(json.dumps(data))

from collections import Counter
print(Counter("hello"))

import re
text = "call me 123-456-7890"
pattern = r"\d{3}-\d{3}-\d{4}"
match = re.search(pattern, text)
if match:
    print("Found:", match.group())


print("Modules and Packages concepts completed!")


# -----------------------------
# HOMEWORK / PRACTICE TASKS
# -----------------------------

# FUNCTIONS TASKS
# 1. Print numbers from 50 to 60 using a while loop inside a function.
# 2. Write a function greet() that prints "Good Morning!".
# 3. Write a function square(x) that returns square of number.
# 4. Write a function multiply(x, y) that returns multiplication result.
# 5. Write a function checkEvenOdd(n) that prints even / odd.
# 6. Write a function addEmailList(names) → take list of names, return list with "@gmail.com".
# 7. Write a function votingSys(age) → if age >=18 print "You can vote" else "You cannot vote".

# MODULES / PACKAGES TASKS
# 8. Use math module and print sqrt of 25, factorial of 5.
# 9. Use random module and generate 5 random numbers between 1-50.
# 10. Use datetime module and print current date and time.
# 11. Create your own module mymodule.py with a function add(a,b).
#     import it and use in another file.
# 12. Use string module and print all ascii_letters.
# 13. Use re module to check if "abc123" has numbers.`

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
