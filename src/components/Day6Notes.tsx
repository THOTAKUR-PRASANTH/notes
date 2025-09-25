export function Day6Notes() {
  const content = String.raw`#------------------------------------------DAY_06-------------------------------------------
#files in Python
#files are more important in any web application 
#files are used to store data permanently
#files types .txt,.csv,.json,.xml,.html,.pdf,.docx,.xlsx,.pptx,.jpg,.png,.gif etc

#file operations
# CURD operations with files (create,update,read,delete)

#open() function is used to open a file
#syntax: open(filename,mode)
#modes:
#r - read mode (default mode) if file not found it will raise an error
#w - write mode if file not found it will create a new file
#a - append mode if file not found it will create a new file
#x - create mode if file already exists it will raise an error
#b - binary mode
#t - text mode (default mode)
#to read the content of the file we use read() function

#to close the file we close()
#read() is the function to read the conte present in the file

# file = open("demo.txt","r")

#print(file.read(5)) #reads first 5 characters
#print(file.readline()) #reads the 1st line of the file
#print(file.readlines()) #reads all the lines of the file and returns a list 
# file.close()

#we can alos open the file by using the with statement

# with open("demo.txt","r") as file:
#     print(file.read())

# with open("vhsad.txt","r") as file:
#     print(file.read())
# #file is automatically closed when the with block is exited


# with open("demo.txt","rt") as file:
#     print(file.read())
# #file is automatically closed when the with block is exited

#write mode 

# with open("writemodefile.txt","w") as file:
#     file.write("heloo")
# with open("writemodefile.txt","r") as file:
#     file.read()


# with open("writemodefile.txt","a") as file:
#     file.write("\nhello how are you")

# with open("createnewfile.txt","x") as file:
#     file.write("this is a new file")

# import os
# os.remove("createnewfile.txt") #deletes the file

#r+ mode at a time read and write both
# with open("demo.txt","r+") as file:
#     print(file.read())
#     file.write("\nthis is hvfevhewe mode")
#     print(file.read())

# file = open("demo.txt","r+")    

# for i in range(2):
#     presentName = input("record ur attendence with name: ")
#     file.write(presentName +" is present today"+ "\n")

# print(file.read()) 
# file.close()  

# with open("demo.txt","r+") as file:
#     print(file.read())


#Exception Handling in python

#in python Exceptions are nothing but errors that occur during the execution of the program

#try and except block is used to handle exceptions in python
#except block is executed when an exception occurs in the try block
#syntax:
# try:


# try:
#     print(10//0)
# except ZeroDivisionError as e:
#     print("you cannot divide a number by zero")

# try:
#     file= open("nonexistentfile.txt","r")
#     print(file.read())
# except FileNotFoundError as e:
#     print("file not found error:",e)

#list of common exceptions in python
#ZeroDivisionError
#FileNotFoundError
#IndexError
#KeyError
#ValueError
#TypeError
#AttributeError
#ImportError


# l= [1,2,3]
# try:
#     print(l[4])
# except :
#     print("index error:")
# print(l)

#value error
# try:
#     num = int(input("enter a number: "))
#     print(num)
# except ValueError as e:
#     print("value error:",e)

#else block
# else block is executed when there is no exception in the try block
# try:
#     num = int(input("enter a number: "))
#     print(num)
# except ValueError as e:
#     print("value error:",e)
# else:
#     print("no exception occurred")
#finally block
#finally block is always executed whether an exception occurs or not
# try:
#     num = int(input("enter a number: "))
#     print(num)
# except ValueError as e:
#     print("value error:",e)
# else:
#     print("no exception occurred")
# finally:
#     print("this block is always executed")

# Python File Handling & Exception Handling Assignments

# 1. Create a new file called 'notes.txt' and write 3 sentences about your favorite hobby.

# 2. Open 'notes.txt' and read the content. Print only the first line.

# 3. Append two more sentences to 'notes.txt'. Then read and print the entire file content.

# 4. Create a file 'numbers.txt'. Write numbers from 1 to 10 in separate lines.

# 5. Read 'numbers.txt' and print only the even numbers.

# 6. Create a program that takes a list of fruits ['apple', 'banana', 'cherry'] 
#    and writes each fruit into a new line in 'fruits.txt'.

# 7. Open 'fruits.txt' and use a for loop to read and print each line.

# 8. Write a program to delete a file named 'oldfile.txt' if it exists.

# 9. Exception Handling: Ask the user to input two integers and perform subtraction. 
#    Handle the case if the user enters non-numeric data.

# 10. Exception Handling: Try to open 'missing.txt' (which does not exist). 
#     Handle the FileNotFoundError and display a user-friendly message.

# 11. Exception Handling: Create a list [10, 20, 30]. Ask the user for an index 
#     and print the value at that index. Handle IndexError if the index is out of range.

# 12. Using else block: Ask the user to enter their age as a number. 
#     If no error occurs, print 'Valid age entered'.

# 13. Using finally block: Write a program to divide two numbers entered by the user. 
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
