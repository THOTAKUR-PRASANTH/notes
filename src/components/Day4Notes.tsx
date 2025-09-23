export function Day4Notes() {
  const content = String.raw`""""------------------------------------------------------------------DAY_04-Data Structures --Lists, -------------------------------------------------------------------------"""

# -----------------------------
# INTRO TO DATA STRUCTURES
# -----------------------------
# Data Structure = way to store and organize data
# Python has built-in data structures:
# 1. List  -> ordered, changeable, allows duplicates
# 2. Tuple -> ordered, immutable, allows duplicates
# 3. Set   -> unordered, no duplicates
# 4. Dict  -> key-value pairs

# -----------------------------
# LISTS IN PYTHON
# -----------------------------
# List is a sequence data type where we store multiple values in a single variable
# It is:
# - ordered (elements have positions)
# - mutable (we can change)
# - allows duplicates

# -----------------------------
# Creating and Adding Elements
# -----------------------------
l = []
for i in range(1, 6):
    name = input("Enter name: ")
    l.append(name)   # append() adds element at end
print(l)

# Another way: using split
l = list(map(str, input("Enter names (comma separated): ").split(",")))
print("Before add:", l)
l.insert(1, "hai")   # insert() adds at specific position
print("After add:", l)

# -----------------------------
# Useful List Methods
# -----------------------------
l = [1, 90, 80, 2, 10]

l.reverse()          # reverses the list
print(l)

l.sort()             # sorts ascending
print(l)

print(l.index(90))   # find index of value

l.remove(90)         # remove element by value
print(l)

l.pop(1)             # remove element by index
print(l)

# -----------------------------
# Looping in Lists
# -----------------------------
l = [10, 2, 3, 90, 5, 8, 0]
for i in l:
    print(i)

l = [10, 2, 3, 90, 5, 8, 0]
for i in range(len(l)):
    print(l[i])

# -----------------------------
# Finding Min and Max Manually
# -----------------------------
l = [10, 2, 3, 90, 5, 8, 0]

res = 1000
for i in l:
    if i < res:
        res = i
print("Minimum:", res)

res = -1
for i in l:
    if i > res:
        res = i
print("Maximum:", res)

# -----------------------------
# More List Examples
# -----------------------------

# List Comprehension - quick way to create lists
squares = [x*x for x in range(1, 6)]
print("Squares:", squares)

# Nested Lists
matrix = [[1, 2], [3, 4], [5, 6]]
print("Matrix:", matrix)
print("First row:", matrix[0])
print("Element [1][1]:", matrix[1][1])

# Joining and Repeating lists
a = [1, 2, 3]
b = [4, 5]
print("Join:", a + b)
print("Repeat:", a * 3)

# Membership test
print(2 in a)     # True
print(10 not in a) # True

# Copying lists
original = [1, 2, 3]
copy1 = original.copy()
copy2 = list(original)
print("Copied:", copy1, copy2)

# -----------------------------
# DAY 4 - ASSIGNMENT PROBLEMS
# -----------------------------
print("\nDAY 4 - LIST ASSIGNMENT PROBLEMS")
print("=" * 50)

# Problem 1: Find second largest number in list
print("\nProblem 1: Find second largest number")
numbers = [45, 22, 88, 56, 92, 33]
print("List:", numbers)
# sorted_list = sorted(numbers, reverse=True)
# print("Second largest:", sorted_list[1])

# Problem 2: Remove duplicates from list
print("\nProblem 2: Remove duplicates")
duplicate_list = [1, 2, 2, 3, 4, 4, 5, 1, 3]
print("Original list:", duplicate_list)
# unique_list = list(set(duplicate_list))
# print("After removing duplicates:", unique_list)

# Problem 3: Count even and odd numbers
print("\nProblem 3: Count even and odd numbers")
num_list = [12, 7, 19, 22, 35, 48, 53, 64]
print("List:", num_list)
# even_count, odd_count = 0, 0
# for num in num_list:
#     if num % 2 == 0:
#         even_count += 1
#     else:
#         odd_count += 1
# print(f"Even: {even_count}, Odd: {odd_count}")

# Problem 4: Sum of elements at even positions
print("\nProblem 4: Sum of elements at even positions")
pos_list = [10, 20, 30, 40, 50, 60, 70]
print("List:", pos_list)
# even_pos_sum = sum(pos_list[i] for i in range(0, len(pos_list), 2))
# print("Sum:", even_pos_sum)

# Problem 5: Reverse words in a sentence
print("\nProblem 5: Reverse words in sentence")
sentence = "Python programming is fun"
print("Original:", sentence)
# words = sentence.split()
# words.reverse()
# print("Reversed:", " ".join(words))`

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
