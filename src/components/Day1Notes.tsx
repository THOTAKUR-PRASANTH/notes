export function Day1Notes() {
  const content = `#---------------------------------------------------------DAY-01- Basic syntax, variables, data types-------------------------------------------------------------------------------------
""""
What is Python?

Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.

The most recent major version of Python is Python 3.13.7

python is heigh level programming language 
python supports Cross-Platform Compatibility 
python is easy to Readable and Simple Syntax
python has Strong Community Support 
python can support Multi-Programming Styles 

--------------------------------------------------------------------------------------------------------------------------------------
It is used for:

Python can be used on a server to create web applications. 
Python can be used alongside software to create workflows.
Python can connect to database systems. It can also read and modify files. 
Python can be used to handle big data and perform complex mathematics. 
Python can be used for rapid prototyping, or for production-ready software development.


---------------------------------------------------------------------------------------------------------------------------------------
Python Syntax

Python Indentation -> Python uses indentation to indicate a block of code.
Comments
Python Variables-----------------
Python Variable Nameing(rules)
Case-Sensitive(python) && Case-InSensitive 
casting --specify the data type of a variable.

Data Types----------------------
Text Type:	str
Numeric Types:	int, float, complex
Sequence Types:	list(methodes:insert(),append(),remove(),pop() del li[0],clear(),sort(),reverse()),tuple()
Mapping Type:	dict(methodes:get(),keys(),items(),pop())
Set Types:	set(methodes:add(),remove(),union(),intersection())
Boolean Type:	bool
Binary Types:	bytes
type conversion

----------------------------------------------Python operators-------------------------------------------------------------------------

1. Arithmetic Operators (Math stuff)

+ → Add (5 + 3 = 8)

- → Subtract (5 - 2 = 3)

* → Multiply (4 * 2 = 8)

/ → Divide (6 / 2 = 3.0)

% → Remainder (7 % 3 = 1)

** → Power (2 ** 3 = 8)

// → Whole number division (7 // 2 = 3)


2. Assignment Operators (Set or update values)

= → Set value (x = 5)

+= → Add and update (x += 2 → x = x + 2)

-= → Subtract and update (x -= 1 → x = x - 1)

*= → Multiply and update (x *= 3 → x = x * 3)

/= → Divide and update (x /= 2 → x = x / 2)

%= → Remainder and update (x %= 2 → x = x % 2)


3. Comparison Operators (Check values)

== → Equal (5 == 5 → True)

!= → Not equal (5 != 3 → True)

> → Greater than (6 > 4 → True)

< → Less than (3 < 5 → True)

>= → Greater or equal (5 >= 5 → True)

<= → Less or equal (4 <= 6 → True)


4. Logical Operators (Combine conditions)

and → Both must be true (x > 2 and x < 10)

or → At least one true (x > 2 or x < 1)

not → Reverse result (not True → False)

5. Identity Operators (Check if same object)

is → Same object (x is y)

is not → Not same object (x is not y)


6. Bitwise Operators (Work with binary numbers)

& → AND

| → OR

^ → XOR

~ → NOT

<< → Shift left

>> → Shift right

"""


#print("hello ulearn)

#var = is box where we store vals
# 2name it is wrong
# _name 
# print  it is wrong

# age =20 
# print(type(age))

#casting 
# x = 12
# y = float(x)
# print(type(y))

# Text Type:	str
# Numeric Types:	int, float, complex
# Sequence Types:	list(methodes:insert(),append(),remove(),pop() del li[0],clear(),sort(),reverse()),tuple()
# Mapping Type:	dict(methodes:get(),keys(),items(),pop())
# Set Types:	set(methodes:add(),remove(),union(),intersection())
# Boolean Type:	bool
# Binary Types:	bytes

# #------------NUmaric---------
# #int
# x = 10 
# print(x)
# #float
# f = 1.00
# print(f)
# #complex
# c= 3j
# print(c)



#string
# name = "ulearn"
# name = 'ulearn is learning Platform'
       # 012345......
# print(name)
# print(len(name))
# for i in range(len(name)):
#     print(name[i])

#methods of string
# print(name.split(" "))
#sliceing
# print(name[2:9])
# print(name.upper())
# print(name.lower())

# Sequence Types ----- list , tuple , dict , set 

#list 
# ---order maintains
#--- its allow duplicates
#Changeable


sample_list = [20,40,10,30,20,45,1,5]
              #0 ,1 ,2, 3......
# print("the element of the 2th index",sample_list[2]) #index based retriving.....
# print("before adding element",sample_list)
#methods of the list..
# sample_list.insert(1,100)
# print("after adding element",sample_list)

# sample_list.append(100)
# print("after adding element",sample_list)

# print("before del element",sample_list)
# sample_list.pop(0)
# print("after del element",sample_list)

# print("before del element",sample_list)
# sample_list.remove(20)
# print("after del element",sample_list)

# print("All element",sample_list)
# sample_list.clear()
# print("after perform clear",sample_list)

# print("befor sort",sample_list)
# sample_list.sort()
# print("after sort",sample_list)

# print("before reverse elements",sample_list)
# sample_list.reverse()
# print("after reverse elements",sample_list)


#tuple
# ---order maintains
#--- its allow duplicates
#unChangeable

# sample_tuple = (1,3,4,5,6,7)
# print(type(sample_tuple))
# l = list(sample_tuple)
# l.append(10)
# sample_tuple = tuple(l)
# print(sample_tuple)

#set
# ---it not maintains order
#--- its doesn't allow duplicates
#unChangeable

# sample_set1 = {1,2,3,2,10,1,4,100,90}
# sample_set2 = {1000,1,20}
# sample_set.add(20)
# print(sample_set1.union(sample_set2))
# print(sample_set1.intersection(sample_set2))


#dict
# ---it maintains order
#--- its doesn't allow duplicates
#Changeable

#key = value
class_data = {
    "name" : "hello1",
    "roll" : 20 
}

# print("before inserting new item ", class_data)
# #inserting new items
# class_data["age"] = 21,

# print("after inserting new item :" ,class_data )
# print(class_data.keys())
# print(class_data.values())
# print(class_data)`

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
