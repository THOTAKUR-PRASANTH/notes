export function Day12Notes() {
  const content =`#check the number is even or odd
# num = int(input("Enter a number: "))

# if num % 2 == 0:
#     print(f"{num} is an even number.")
# else:
#     print(f"{num} is an odd number.")


#find the maximum of three numbers
# a,b,c = map(int,input("Enter three numbers:").split())

# if a>=b and a>=c:
#     print(f"{a} is the maximum number.")
# elif b>=a and b>=c:
#     print(f"{b} is the maximum number.")
# else:
#     print(f"{c} is the maximum number.")

#sum of 1st n natural numbers  n = 10 (1 t0 10 == 1+2+3+...+10  = 55)
# n = int(input("Enter a number: "))

# sum = 0
# for i in range(1,n+1):
#     sum += i
#     print(f"Sum of first {n} natural numbers is {sum}")

#print multiplication table of a number (11)

# num = int(input("Enter a number u to display a table for it : "))
   
# for i in range(1,11):      #11
#     print(f"{num} x {i} = {num*i}")

#count digits in a number (12345) => 5
# num = int(input("Enter a number: "))
# c = 0
# while num !=0:
#     num = num // 10
#     c += 1
# print(f"Number of digits in the number is {c}")

#reverse a number (12345) => 54321
# num = int(input("Enter a number: "))

# rev = 0
# while num != 0:
#     digit  = num % 10   #5
#     rev = rev * 10 +digit  #0*10+5 = 5, 5*10+4=54, 54*10+3=543
#     num = num // 10
# print(f"Reversed number is {rev}")

# count the number of vowels in a string
# s = input("Enter a string: ")
# count = 0
# vowels = "aeiouAEIOU"
# for char in s:
#     if char in  vowels:
#         count += 1
# print(f"Number of vowels in the string is {count}")

# #find the largest element in a list
# l = list(map(int,input("Enter elements of list: ").split()))
# print(l)
# max = l[0]
# for num in l:
#     if num > max:
#         max = num
# print(f"Largest element in the list is {max}")  

#sum of elements in a list
# l = list(map(int,input("Enter elements of list: ").split()))
# print(l)
# sum = 0
# for num in l:
#     sum += num
# print(f"Sum of elements in the list is {sum}")

#find the element in a list 
# l = list(map(int,input("Enter elements of list: ").split())) #[10,20,30,40,50]
# print(l)
# key = int(input("Enter the element to search: "))  #30

# for i in range(len(l)):
#     if l[i] == key:
#         print(f"Element {key} found at index {i}")
#         break
# else:
#     print(f"Element {key} not found in the list")
#----------------------------------------------Day 12-Assignmenths -------------------------------------------------
#how to check if a number is prime or not
#find the factorial of a number
#generate fibonacci series up to n terms
#check if a string is palindrome or not
#find the GCD of two numbers
#find the LCM of two numbers
#convert decimal to binary
#convert binary to decimal
#find the sum of digits of a number
#find the power of a number using recursion
#implement stack using list
#implement queue using list
#implement linked list

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