export function Day19Notes() {
  const content =`
#statistics in Michine Learning
#Model: in machine learning, a model is a mathematical representation 
# of a real-world process or system.(example: linear regression model, decision tree model)
#In General a Model is New born child that needs to be trained and educated
# using data to make accurate predictions or decisions.

#why we need statistics in ML
#because ML is all about making predictions based on data, 
# and statistics provides the tools to analyze and interpret that data effectively.
#Statistics helps us understand the underlying patterns and relationships within the data,
# which is crucial for building accurate and reliable machine learning models.

#Some key reasons why statistics is important in machine learning:
#1. Data Exploration and Preprocessing: Statistics helps us explore and understand the data,
# identify outliers, handle missing values, and preprocess the data for modeling.
#2. Feature Selection: Statistical techniques can be used to identify the most relevant features
# for a given prediction task, improving model performance and reducing overfitting.
#3. Model Evaluation: Statistical metrics such as accuracy, precision, recall, and F1-score
# are used to evaluate the performance of machine learning models and compare different models.

#today we will learn the three main tools for this:
#1.mean: The mean is the average of a set of numbers.
#2.median: The median is the middle value of a set of numbers when they are arranged in order.
#3.mode: The mode is the value that appears most frequently in a set of numbers.


import numpy as np
from scipy import stats
import statistics
#1.mean
#mean = sum of all values / number of values


# test_scores = [85, 90, 78, 92, 88]   #this is for simple data
# mean_score = sum(test_scores) / len(test_scores)
# print("Mean Test Score:", mean_score)

# test_scores = np.array([85, 90, 78, 92, 88])  #this is for large data
# mean_score = np.mean(test_scores)
# print("Mean Test Score:", mean_score)

#disadvantage of mean:
#The mean is sensitive to extreme values (outliers) in the data.
# income_data = np.array([45000, 54000, 32000, 60000, 75000, 48000, 52000, 58000, 62000, 70000,50000000000])
# mean_income = np.mean(income_data)
# print("Mean Income:", mean_income)


#2.median
#median = middle value when data is sorted in order

# income_data = np.array([45000, 54000, 32000, 60000, 75000, 48000, 52000, 58000, 62000, 70000,50000000000])
# median_income = np.median(income_data)
# print("Median Income:", median_income)

# #advantage of median:
# #The median is less affected by extreme values (outliers) in the data.

#3.mode
#mode = most frequently occurring value in the data

# survey = np.array([1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5])
# mode_pet = stats.mode(survey)
# print(mode_pet.mode)



# #Symmetric Data mean = median = mode  
# # In symmetric data, the mean, median, and mode are all equal or very close to each other.
# symmetric_data = np.array([10, 20, 30, 40, 50])
# mean_symmetric = np.mean(symmetric_data)
# median_symmetric = np.median(symmetric_data)
# mode_symmetric = stats.mode(symmetric_data)
# print("Symmetric Data:")
# print("Mean:", mean_symmetric)
# print("Median:", median_symmetric)
# print("Mode:", mode_symmetric)


# #Skewed Data
# # In skewed data, the mean, median, and mode are not equal.
#positive skewed data mean > median > mode

# skewed_data = np.array([10000, 15000, 20000, 25000, 30000, 1000000])
# mean_skewed = np.mean(skewed_data)
# median_skewed = np.median(skewed_data)
# mode_skewed = stats.mode(skewed_data)
# print("Skewed Data:")
# print("Mean:", mean_skewed)
# print("Median:", median_skewed)     

# #negative skewed data mean < median < mode
# skewed_data = np.array([10000, 15000, 20000, 25000, 30000, -1000])
# mean_skewed = np.mean(skewed_data)
# median_skewed = np.median(skewed_data)
# mode_skewed = stats.mode(skewed_data)
# print("Skewed Data:")
# print("Mean:", mean_skewed)
# print("Median:", median_skewed) 


# app_ratings = [5, 4, 5, 3, 4, 5, 2, 4, 5, 1, 5, 4, 5, 3, 4]
# mean_rating = statistics.mean(app_ratings)
# median_rating = statistics.median(app_ratings)
# mode_rating = statistics.mode(app_ratings)

# print("Mean App Rating:", mean_rating)
# print("Median App Rating:", median_rating)
# print("Mode App Rating:", mode_rating)
# In this example, we have a list of app ratings from users.
# We calculate the mean, median, and mode of these ratings using the statistics module.
# Finally, we print out the calculated values.

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