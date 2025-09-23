export function Day5Notes() {
  const content = String.raw`#tuple in python is also a sequence data type
#it is order,allow duplicates,but we cant change it(immutable)
# t = (1,2,3,4,5)
# print(t)
# print(type(t))

t = (12,3,4,4,5,6,6)
# l = list(t)
# l.append(90)
# t = tuple(l)
# for i in t:
#     print(i)
# print(t[0])

#remove element from tuple
# l = list(t)
# l.remove(6)
# t = tuple(l)
# print(t)
# print(t.count(6))

# print(t.index(4))

#set in python is a collection data type
#it is unordered,unindexed,no duplicates
# s = {1,6,3,4,5,5,2}
# print(s)
# for i in s:
#     print(i)

#to add elements in set we use add()
# s.add(10)
# print(s)

# l = [10,20,30,40]
# s.update(l)
# print(s)

# s.remove(100)
# print(s)

# s.discard(100)
# print(s)

# union
# s1 = {1,2,3,4}
# s2 = {3,4,5,6}
# s3 = s1.union(s2)
# print(s3)

# s1 = {1,2,3,4}
# s2 = {3,4,5,6}
# s3 = s1 | s2
# print(s3)

#intersection
# s1 = {1,2,3,4}
# s2 = {3,4,5,6}
# s3 = s1.intersection(s2)
# print(s3)

# s1 = {1,2,3,4}
# s2 = {3,4,5,6}
# s3 = s1 & s2
# print(s3)

#difference
# s1 = {1,2,3,4}
# s2 = {3,4,5,6}
# s3 = s1.difference(s2)
# print(s3)

# s1 = {1,2,3,4}
# s2 = {3,4,5,6}
# s3 = s1 - s2
# print(s3)

# day1 = {"prashanth","pavan","sai"}
# day2 = {"sai","pavan","ram"}
# both = day1 & day2
# any_day = day1 | day2
# print(any_day)
# print(both)

#dictionary in python is a collection data type
#it is ordered,changeable,no duplicates
# key:value

# d = {
#     "name":"prashanth",
#     "age":24,
#     "city":"hyd"
# }
# print(d.keys()) 
# print(d.values())
# print(d.items())

# for k , v in d.items():
#     print(k,"--->",v)

# print("before add item in d",d)

# d["phone"] = "9876543210" #adding new item in dict
# print("after add item in d",d)
# # print(d.get("name")) #use to access the value

# print(d["name"])

#nested dictionary

d = {
    "name":"prashanth",
    "age":24,
    "Address":{
        "city":"hyd",
        "state":"telangana"
    },
}

# print(d["Address"]["state"])
# print(d1["state"])

# print(d.items())

# for k , v in d.items():
#     print(k,"---->" ,v)
#     if type(v) is dict:
#         for k1 , v1 in v.items():
#             print(k1,"--->",v1)

#remove item in dict
# d.pop("age")
# print(d)

# d.popitem() #remove last item
# print(d)
# d.clear() #remove all item
# print(d)
# del d #delete entire dict
# print(d)
# d1 = d.copy()
# print(d1)
# d1 = dict(d)
# print(d1)

# d1 = {
#     "name":"pavan",
#     "age":23,
#     "city":"banglore"
# }     
# d.update(d1)
# print(d)
# d.update({"phone":"9876543210"})
# print(d)
# d.update({"age":25})
# print(d)

#--------------------- DAY 5 - ASSIGNMENT PROBLEMS -------------------------

print("\nDAY 5 - TUPLE, SET, DICTIONARY ASSIGNMENT PROBLEMS")
print("=" * 60)

# TUPLE PROBLEMS
print("\n--- TUPLE PROBLEMS ---")

# Problem 1: Count frequency of each element in tuple
print("\nProblem 1: Count frequency in tuple")
sample_tuple = (1, 2, 3, 2, 4, 2, 5, 1, 3)
print("Tuple:", sample_tuple)
# Your solution here:
# for item in set(sample_tuple):
#     print(f"{item} appears {sample_tuple.count(item)} times")

# Problem 2: Find common elements between two tuples
print("\nProblem 2: Common elements in tuples")
tuple1 = (1, 2, 3, 4, 5)
tuple2 = (4, 5, 6, 7, 8)
print("Tuple 1:", tuple1)
print("Tuple 2:", tuple2)
# Your solution here:
# common = tuple(set(tuple1) & set(tuple2))
# print("Common elements:", common)

# SET PROBLEMS
print("\n--- SET PROBLEMS ---")

# Problem 3: Find unique characters in a string
print("\nProblem 3: Unique characters in string")
text = "programming"
print("String:", text)
# Your solution here:
# unique_chars = set(text)
# print("Unique characters:", unique_chars)
# print("Count of unique characters:", len(unique_chars))

# Problem 4: Set operations practice
print("\nProblem 4: Set operations")
set_a = {1, 2, 3, 4, 5, 6}
set_b = {4, 5, 6, 7, 8, 9}
print("Set A:", set_a)
print("Set B:", set_b)
# Your solutions here:
# print("Union:", set_a | set_b)
# print("Intersection:", set_a & set_b)
# print("Difference A-B:", set_a - set_b)
# print("Difference B-A:", set_b - set_a)
# print("Symmetric difference:", set_a ^ set_b)

# DICTIONARY PROBLEMS
print("\n--- DICTIONARY PROBLEMS ---")

# Problem 5: Student grade management
print("\nProblem 5: Student grade calculator")
students = {
    "dora": [85, 90, 78, 92],
    "nesly": [79, 85, 88, 86],
    "prashanth": [92, 88, 84, 90]
}
print("Student grades:", students)
# Your solution here:
# for student, grades in students.items():
#     average = sum(grades) / len(grades)
#     print(f"{student}: Average = {average:.2f}")

# Problem 6: Word frequency counter
print("\nProblem 6: Word frequency in sentence")
sentence = "python is great and python is easy to learn python"
print("Sentence:", sentence)
# Your solution here:
# words = sentence.split()
# word_count = {}
# for word in words:
#     word_count[word] = word_count.get(word, 0) + 1
# print("Word frequency:", word_count)

# Problem 7: Nested dictionary practice
print("\nProblem 7: Employee database")
employees = {
    "emp1": {
        "name": "dora",
        "department": "IT",
        "salary": 50000,
        "skills": ["Python", "Java", "SQL"]
    },
    "emp2": {
        "name": "pavan", 
        "department": "HR",
        "salary": 45000,
        "skills": ["Communication", "Management"]
    }
}
print("Employee database created")
# Your solutions here:
# print("\nAll employee names:")
# for emp_id, details in employees.items():
#     print(f"ID: {emp_id}, Name: {details['name']}")

# print("\nEmployees with Python skill:")
# for emp_id, details in employees.items():
#     if "Python" in details['skills']:
#         print(f"{details['name']} knows Python")

# Problem 8: Dictionary manipulation
print("\nProblem 8: Merge two dictionaries")
dict1 = {"a": 1, "b": 2, "c": 3}
dict2 = {"d": 4, "e": 5, "b": 10}  # Note: 'b' exists in both
print("Dict 1:", dict1)
print("Dict 2:", dict2)
# Your solution here:
# merged = dict1.copy()
# merged.update(dict2)
# print("Merged dictionary:", merged)`

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
