export function Day10Notes() {
  const content = `#pandas in python 
#pandas is a library used for  working with data sets
#in pandas we functions for analysing data sets,cleaning data ,exploring and manuplating the data sets 

#why we use the pandas library
#1.easy to use
# it allows us to analyse data and make conclusions about the data
# pandas can clean messy data and make them readable and relevant
#relavent data is very important for data scientists

# what pandas can do
#1.pandas can read and write data from various file formats like csv,excel,json etc
# min value
# max value
#mean value
#median value
#standard deviation

#in pandas we have two main data structures
#1.series
#2.data frames

#series
# it is a one dimensional array that can hold data of any type
#it is like a column in a table


#lables me aning indexs
#row lable ---> index 
#col lable -> attributes
import pandas as pd 

# data = ["Sandya Satyavathi","Santhoshi","K.DEEKSHITHA","A.LAVANYA","Ramya"]

# # myvar = pd.Series(data)
# myvar = pd.Series(data,index=["a","b","c","d","e"])
# print(myvar) #print the series
# print(myvar["c"])#print the value at index c


#data frames
# it is a two dimensional array that can hold data of different types
# it is like a table in a database or an excel sheet

#creating data frame from a dictionary

# data = {
#     "Names" : ["Sandya Satyavathi","Santhoshi","K.DEEKSHITHA","A.LAVANYA","Ramya"],
#     "Age" : [20,21,19,20,21],
#     "City" : ["Hyderabad","Vijayawada","Chennai","Bangalore","Pune"]
# }

# myvar = pd.DataFrame(data)
# print(myvar[0:1])#print the first  row of the data frame
# print(myvar)
# print(myvar.loc[1])
#print(myvar.loc[2])

# print(myvar.loc[[1,2,3]])#print the rows at index 1,2,3

#to read the csv file(comma separated values)

# df = pd.read_csv('data.csv')
# # pd.options.display.max_rows = 100000
# # print()#to print all the rows
# print(df)


#json file

# df = pd.read_json('samplejson.json')
# print(df)

#viewing the data

# df = pd.read_csv('data.csv')
# print(df.head())#print the first 5 rows of the data frame

# print(df.head(3))#print the first 3 rows of the data frame

# print(df.tail())#print the last 5 rows of the data frame
# print(df.tail(3))#print the last 3 rows of the data frame

# print(df.info())#print the information about the data frame



#data cleaning means fixing bad data in your data set
#1.empty cells
#2.duplicate data
#3.incorrect data

#empty cells

df = pd.read_csv('data.csv')
# print(df)

#1 way -> we can remove rows with empty cells
# new_df=df.dropna()  #remove the whole row if any cell is empty
# print(new_df)

# new_df = df.dropna(subset=["DateOfBirth"]) #remove the row if the specified column is empty
# print(new_df)

# df.dropna(inplace=True) #remove all rows with empty cells and update the original data frame
# print(df)

#2 way -> we can replace empty cells with a specific value

# new_df = df.fillna("unknown") #replace empty cells with the string "unknown"
# print(new_df)

#duplicate data

# df.drop_duplicates(inplace=True) #remove duplicate rows
# print(df)

# print(df.duplicated()) #print boolean values for each row if it is duplicate or not


#incorrect data

#way 1--> is removeing the entire row 
# way 2--> convert all cells in thecloumn to a specific data type(same format) 


# df['DateOfBirth'] = pd.to_datetime(df['DateOfBirth'],format='mixed')
# print(df)


#correlation
#relationship between 2 variables

#if 1 variable changes the other variable also changes
 # example -> if we increase the study hours the marks will also increase
#positive correlation -> both variables increase or decrease together
#negative correlation -> one variable increases and the other decreases
#no correlation -> no relationship between the variables
#correlation values range from -1 to 1
#1 -> perfect positive correlation
#-1 -> perfect negative correlation
#0 -> no correlation

data = {
    "study hours" : [1,2,3,4,5],
    "marks" : [10,20,30,40,50]
}   
df = pd.DataFrame(data)
print(df.corr())#print the correlation between the columns in the data frame
# print(df.corr())
------------------------------------------------DAY-10-Assignment----------------------------------------------------------------

Assignment Questions:

1. Create a Pandas Series with the following data: [10, 20, 30, 40, 50] and custom indices ['a', 'b', 'c', 'd', 'e']. Print the value at index 'c'.

2. Create a DataFrame from the following dictionary:
   {
     "Product": ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"],
     "Price": [50000, 500, 1500, 8000, 2000],
     "Quantity": [10, 50, 30, 15, 25]
   }
   Print the first 3 rows and last 2 rows.

3. Create a CSV file with student data (Name, Age, Grade, City) for 10 students. Then read this CSV file using pandas and display the DataFrame.

4. Using the DataFrame from question 2:
   - Display information about the DataFrame using info()
   - Calculate the total value (Price * Quantity) for each product
   - Find the product with maximum price

5. Create a DataFrame with some missing values:
   {
     "Name": ["Alice", "Bob", None, "David", "Eve"],
     "Age": [25, None, 30, 35, None],
     "Salary": [50000, 60000, 70000, None, 80000]
   }
   - Remove rows with any missing values
   - Fill missing values with appropriate defaults

6. Create a DataFrame with duplicate rows and demonstrate how to:
   - Identify duplicate rows
   - Remove duplicate rows
   - Keep only the first occurrence of duplicates

7. Create two datasets:
   - Study Hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   - Test Scores: [50, 55, 65, 70, 75, 80, 85, 90, 95, 100]
   Calculate and interpret the correlation between study hours and test scores.

8. Data Analysis Exercise:
   Create a sales dataset with columns: Date, Product, Sales Amount, Region
   - Find total sales by region
   - Find average sales amount
   - Identify top-selling products

9. Working with JSON data:
   Create a JSON file with employee data and read it using pandas. Display the structure and basic statistics.

10. Advanced Data Cleaning:
    Create a messy dataset with:
    - Mixed date formats
    - Inconsistent text casing
    - Extra whitespace
    - Invalid numeric values
    Clean this data and show before/after comparison.

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