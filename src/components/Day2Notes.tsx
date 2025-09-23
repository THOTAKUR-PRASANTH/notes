export function Day2Notes() {
  const content = `""""------------------------------------------------------------------DAY_02----Conditional statements (if-else)
- Loops (for, while-----------------------------------------------------------------------"""

# -----------------------------------------------------------------------------
# OPERATORS IN PYTHON
# -----------------------------------------------------------------------------

# Arithmetic Operators
# +, -, *, /, %, //, **

# Logical Operators
# and, or, not
# Truth values: 1 = True, 0 = False

# AND operator truth table:
# 1 and 1 = True (1)
# 0 and 1 = False (0)
# 0 and 0 = False (0)
# 1 and 0 = False (0)

# OR operator truth table:
# 1 or 1 = True (1)
# 0 or 1 = True (1)
# 0 or 0 = False (0)
# 1 or 0 = True (1)

# NOT operator:
# not 0 = True
# not 1 = False

# Assignment Operators
# =, +=, -=, *=, /=, //=, %=, **=
# Example: x = 10; x += 5 means x = x + 5

# Bitwise Operators
# & (bitwise AND)
# | (bitwise OR)
# ^ (bitwise XOR)
# ~ (complement)
# << (left shift)
# >> (right shift)

# Identity Operators
# is, is not

# Membership Operators
# in, not in

# Relational/Comparison Operators
# ==, !=, <, >, <=, >=
# Examples:
# 5 == 5 → True
# 4 > 3 → True
# 4 < 5 → True
# 4 != 5 → True
# 4 <= 4 → True
# 5 >= 5 → True

# -----------------------------------------------------------------------------
# IF-ELSE STATEMENTS
# -----------------------------------------------------------------------------

# Basic if-else for age verification
# age = int(input("Enter your age: "))
# if age < 18:
#     print("Sorry, you're not eligible to vote.")
# else:
#     print("You're eligible to vote!")

# Grading system example
# marks = int(input("Enter your marks: "))
# 
# if marks >= 90:
#     print("Your grade is: A")
# elif marks >= 70:
#     print("Your grade is: B")
# elif marks >= 50:
#     print("Your grade is: C")
# else:
#     print("Your grade is: F")

# Simple login system
# password = input("Enter your password: ")
# original = "admin"
# 
# if password == original:
#     print("You are the authorized user of this account.")
# else:
#     print("Wrong password!")

# -----------------------------------------------------------------------------
# MATCH-CASE STATEMENTS (Python 3.10+)
# -----------------------------------------------------------------------------

# Language selection example
# language = input("Enter your language (en/te/hi): ")
# 
# match language:
#     case "en":
#         print("You have preferred English")
#     case "te":
#         print("You have preferred Telugu")
#     case "hi":
#         print("You have preferred Hindi")
#     case _:
#         print("Your preferred language is not in our list.")

# -----------------------------------------------------------------------------
# LOOPS IN PYTHON
# -----------------------------------------------------------------------------

# Loops are used to repeat some code
# Python has 2 main loops: for loop and while loop

# -------------------------------------------------------------------------
# FOR LOOP
# -------------------------------------------------------------------------
# for loop is used when we know how many times we want to run

# Example 1: Print odd numbers from 1 to 99
# for i in range(1, 100, 2):
#     print(i)

# Example 2: Print even numbers from 1 to 100
# for i in range(1, 101):
#     if i % 2 == 0:
#         print(i)

# Example 3: Calculate sum of numbers from 1 to 100
# total = 0
# for i in range(1, 101):
#     total = total + i
# print(f"Sum of 1 to 100: {total}")

# Example 4: Reverse a string
# name = "dora"
# reversed_name = ""
# 
# for i in range(len(name) - 1, -1, -1):
#     reversed_name = reversed_name + name[i]
# 
# print(f"Original: {name}")
# print(f"Reversed: {reversed_name}")

# Example 5: Print multiplication table of 5
# for i in range(1, 11):
#     print(f"5 x {i} = {5*i}")

# Example 6: Print each letter in a word
# word = "python"
# for ch in word:
#     print(ch)

# -------------------------------------------------------------------------
# WHILE LOOP
# -------------------------------------------------------------------------
# while loop is used when we don’t know how many times to run
# it will keep running until condition becomes False

# Syntax:
# while condition:
#     code

# Example 1: Print numbers from 1 to 5
# i = 1
# while i <= 5:
#     print(i)
#     i += 1

# Example 2: Keep asking password until correct
# correct = "admin"
# password = ""
# while password != correct:
#     password = input("Enter password: ")
# print("Login success!")

# Example 3: Reverse a number
# num = 1234
# rev = 0
# while num > 0:
#     digit = num % 10
#     rev = rev * 10 + digit
#     num = num // 10
# print("Reversed:", rev)

# -------------------------------------------------------------------------
# DIFFERENCE BETWEEN FOR AND WHILE
# -------------------------------------------------------------------------
# for loop:
# - use when we know how many times to repeat
# - example: print 1 to 100, read all characters in a string
#
# while loop:
# - use when we don’t know exact repeat count
# - loop stops only when condition becomes False
# - example: ask user until they give correct input, repeat until balance is 0

# -------------------------------------------------------------------------
# BREAK AND CONTINUE
# -------------------------------------------------------------------------

# break = exit loop fully
# Example: stop when number is 5
# for i in range(1, 10):
#     if i == 5:
#         break
#     print(i)

# continue = skip current loop step
# Example: skip number 5
# for i in range(1, 10):
#     if i == 5:
#         continue
#     print(i)

# Same works in while loop also

# -------------------------------------------------------------------------
# SIMPLE ASSIGNMENTS
# -------------------------------------------------------------------------
# 1. Print numbers from 1 to 10 using while loop
# 2. Print table of 7 using while loop
# 3. Keep asking name until user enters "stop"
# 4. Print sum of digits of number using while loop
# 5. Write program to guess secret number (hint: while loop, break when correct)
# 6. Print all odd numbers between 1 to 50 using for loop
# 7. Print factorial of a number using for loop
# 8. Print string "python" in reverse using while loop`

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
