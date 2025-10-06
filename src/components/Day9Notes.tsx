export function Day9Notes() {
  const content = String.raw`import time
import numpy as np
import sys

# lib in python3
#lib means collection of modules and packages(contains python files)
# the use of thse libraries is to avoid rewriting the code again and again
#it simplifies complex tasks 

#commen libraries
#math
#random
#datetime  


#Numpy is a open source library for python
#by using this we can perform mathematical and scientific operations
# numpy means numerical python

# diffrence between array and List
#list is a collection of items or elements  example [1,2,3,"hello"]
#array is a collection of items of same data type [1,2,3,4,5]



#diffrence between numpy numpy and list (by its speed)
# l = [1,2,3,4,5] * 100000

# start = time.time() 
# for i in range(100000):
#     l[i] = l[i] + 5
# end = time.time()
# print(end - start) 

# arr = np.array(l)
# start = time.time()
# arr = arr + 5
# end = time.time()   
# print(end - start)

#diffrence between numpy  and list (by its memory efficiency)

# l = [1,2,3,4,5]
# print(sys.getsizeof(1) * len(l))


# arr = np.array(l)
# print(arr.nbytes)

# main features of this numpy
# speed
#memory effecient
# dircet operation on array(vectorization)
#builtin functions


#creation of array

#1d array [1,2,3,4,5]
#2d array [[1,2,3,4,5]
#           [1,2,3,4,5]]


# arr = np.array([1,2,3,4,5])
# # print(arr)

# print(arr.ndim)  #to know the dimension of array
# print(arr.shape) #to know the shape of array


# #creating of 2D array
# arr = np.array([[1,2,3,4,5],
#                 [6,7,8,9,10],

#                 ])

# print(arr.ndim)
# print(arr.shape)


# arr = np.arange(1,11)  #it will create array from 1 to 10
# print(arr)

#linspace

# arr = np.linspace(1,10,20) #it will create 20 values between 1 to 10
# print(arr)

#zeros and ones

# arr = np.zeros([2,3])
# print(arr)

# arr = np.ones([2,3],dtype=int) #by default it will take float value we use dtype to change it to int
# print(arr)

# arr = np.full([2,3],5) #it will create array of 2*3 with all values as 5
# print(arr)

# arr = np.empty([2,3]) # it will create array of 2*3 with random values
# print(arr)


#type casting of the arrays
# arr_int = np.array([1,2,3,4,5])
# print(arr_int.dtype)  #to know the data type of array

# arr_float = arr_int.astype(float) #to change the data type of array
# print(arr_float.dtype)


#Reshaping of array

# arr = np.arange(1,13)
# print(arr)
# print("before reshape:",arr.shape)

# arr1 = arr.reshape(3,4) #it will convert 1d array to 2d array of 2*3
# print(arr1)


#Raveling of array => it convrets nd to 1d array

# arr = np.array([[1,2,3,4],
#                 [5,6,7,8],])

# print("before ravel:",arr)
# arr1 = arr.ravel()
# print("after ravel:",arr1)  

#flattening of array => it convrets nd to 1d array

# arr = np.array([[1,2,3,4],
#                 [5,6,7,8],])

# print("before flatten:",arr)
# arr[0,0] = 20
# arr1 = arr.flatten()
# print("after flattenl:",arr1)


#Arithmetic operations on array

# arr = np.array([1,2,3,4,5])
# arr = arr + 5
# print(arr)


# arr1  = np.array([[1,2,3],[4,5,6]])
# arr2  = np.array([[7,8,9],[10,11,12]])
# print(np.add(arr1,arr2)) #it will add two arrays
# arr3 = arr1 + arr2     #it will also add two arrays
# print(arr3)

# arr3 = arr1 - arr2     #it will also sub two arrays
# print(arr3)
# print(np.subtract(arr1,arr2)) #it will subtract two arrays

# print(np.multiply(arr1,arr2)) #it will multiply two arrays

# print(np.divide(arr1,arr2)) #it will divide two arrays

# print(arr1 // arr2) #it will give floor value of division

# print(np.mod(arr1,arr2)) #it will give remainder value of division

# print(np.sqrt(arr1)) #it will give square root of each element in array
# print(np.sin(arr1))  #it will give sine value of each element in array

#indexing and slicing of array

# arr = np.array([[1,2,3,4,5],
#                 [6,7,8,9,10]])


# 1    2   3   4  5
# 00   01  02  03 04

# 6  7  8  9  10
# 11 12 13 14 15

# print(arr[0,0]) #it will give 1st row and 1st column value
# print(arr[1,4]) #it will give 2nd row and 5th column value


# l = [1,2,3,4,5]
# print(l[1:4]) #it will give 2nd to 4th index value
# print(l[1:])  #it will give 2nd index to last index value

# print(arr[0,1:4]) #it will give 1st row and 2nd to 4th column value


#iterating the array

arr = np.array([[1,2,3,4,5],
                [6,7,8,9,10]])

# for i in np.nditer(arr):    # is used to iterate through each element of the array
#     print(i , end =" ")


# for index,i in np.ndenumerate(arr):  #it will give index and value of each element of array
#     print(index,i)


#views and copies of array

#views is used to create a new array but it shares the same memory location as the original array
#copies is used to create a new array with new memory location

# arr = np.array([1,2,3,4,5])
# arr1 = arr.view()  #it will create a view of the original array

# arr[2] = 20
# print(arr)
# print(arr1)  #it will also change the value of view array because it shares the same memory location as the original array

# arr = np.array([1,2,3,4,5])
# arr1 = arr.copy()  #it will create a copy of the original array
# arr[2] = 20
# print(arr)
# print(arr1)  #it will not change the value of copy array because it has its own memory location



#transpose of array
# arr = np.array([[1,2,3],
#                 [4,5,6]])
# print(arr)
# arr1 = arr.T  #it will transpose the array
# print(arr1)

#contatination of array
arr1 = np.array([[1,2,3],
                [4,5,6]]) 

arr2 = np.array([[7,8,9],
                [10,11,12]])

# arr3 = np.concatenate((arr1,arr2),axis=0) #it will concatenate two arrays along rows
# print(arr3)

#vstack => it will concatenate two arrays along rows
# arr3 = np.vstack((arr1,arr2))
# print(arr3)

#hstack => it will concatenate two arrays along columns
# arr3 = np.hstack((arr1,arr2))
# print(arr3)

#aggregate functions in numpy
arr = np.array([[1,2,3],
                [4,5,6]])


print(np.min(arr)) #it will give minimum value of array
print(np.max(arr)) #it will give maximum value of array
print(np.sum(arr)) #it will give sum of all elements of array
print(np.mean(arr)) #it will give mean of all elements of array
print(np.median(arr)) #it will give median of all elements of array
print(np.std(arr)) #it will give standard deviation of all elements of array
-----------------------------------------DAY-09-Assignment------------------------------------

Assignment Questions:

1. Create a 1D NumPy array with numbers from 1 to 20 and reshape it into a 4x5 matrix.

2. Create two 3x3 arrays with random integers and perform element-wise addition, subtraction, and multiplication.

3. Create a 2D array of shape (5,5) filled with zeros, then replace the diagonal elements with 1s.

4. Generate an array of 15 numbers evenly spaced between 0 and 100 using linspace.

5. Create a 3D array of shape (2,3,4) filled with numbers from 1 to 24 and find:
   - Maximum value
   - Minimum value
   - Mean value
   - Standard deviation

6. Create two 1D arrays: [1,2,3,4,5] and [6,7,8,9,10]. Stack them vertically and horizontally.

7. Create a 4x4 matrix with random values and extract:
   - First row
   - Last column
   - 2x2 subarray from center

8. Create an array [10, 20, 30, 40, 50] and use boolean indexing to get elements greater than 25.

9. Create a 3x3 identity matrix and transpose it.

10. Write a program to compare the time taken by a Python list vs NumPy array for adding 1000000 elements.

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
