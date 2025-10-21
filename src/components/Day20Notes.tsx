export function Day20Notes() {
  const content =
`# Variance measures how far each datapoint is spread out from the mean.
#it simply tells us how much the data varies.
#formula for the variance is = sum((x - mean)^2) / N

import statistics as stats
import numpy as np
import matplotlib.pyplot as plt

# marks = [60, 65,70,75,80]

# # mean = (60+65+70+75+80)/5   # mean = 70
# # #(60-70)^2 + (65-70)^2 + (70-70)^2 + (75-70)^2 + (80-70)^2 / 5
# # #so the variance is: 100+25+0+25+100 / 5 = 50

# mean = sum(marks) / len(marks)
# print("Mean is:", mean)
# sum = 0
# for mark in marks:
#     sum += (mark - mean) ** 2
# variance = sum / len(marks)
# print("Variance is:", variance)


#real world example
#stock prices of a company over a week
#Exam performance of students in a class
#ai/ml model predictions - variance helps us understand how much the predictions
# vary from the actual values.


#using statistics module
# marks = [60, 65,70,75,80]
# mean = stats.mean(marks)
# variance = stats.variance(marks)  #by default it calculates sample variance
# print("Mean is:", mean)
# print("Variance is:", variance)

#using numpy module
# marks = [60, 65,70,75,80]
# mean = np.mean(marks)
# variance = np.var(marks)  #by default it calculates population variance
# print("Mean is:", mean)
# print("Variance is:", variance)

#standard devations is the square root of the variance .
#it tells how much data deviates from the mean.
# formula for standard deviation = sqrt(variance)

# A low SD means thet most of the numbers are close to the mean.
# A high SD means that the numbers are more spread out.

#real world example
#1 weather forecasting -
#city A (temp) - [28, 29, 30, 28, 27, 29, 30]  #low sd (we can predict weather more accurately)

#city B (temp) - [20, 35, 15, 40, 10, 30, 25]  #high sd (we cant predict weather accurately)

#2 AI/ML model performance:
#model A - predictions are close to actual values (low sd)
#model B - predictions vary widely from actual values (high sd)


#Using numpy module to calculate standard deviation
# data = [10, 12, 23, 23, 16, 23, 21, 16]
# mean = np.mean(data)
# variance = np.var(data)
# std_deviation = np.sqrt(variance)
# print("Mean:", mean)
# print("Variance:", variance)
# print("Standard Deviation:", std_deviation)

#using statistics module to calculate standard deviation
# data = [10, 12, 23, 23, 16, 23, 21, 16]
# mean = stats.mean(data)
# variance = stats.variance(data)
# std_deviation = stats.stdev(data)
# print("Mean:", mean)
# print("Variance:", variance)
# print("Standard Deviation:", std_deviation)


# Practical Example: 

# store_A_sales = [200, 220, 250, 230, 240, 260, 270]
# store_B_sales = [150, 300, 100, 400, 200, 350, 250]

# sD1 = np.std(store_A_sales)
# print("Store A - Standard Deviation of sales:", sD1)
# sD2 = np.std(store_B_sales)
# print("Store B - Standard Deviation of sales:", sD2)

# Visualization
np.random.seed(0)
data1 = np.random.normal(50, 5, 1000)  # mean=50, sd=5
data2 = np.random.normal(50, 15, 1000) # mean=50, sd=15

plt.figure(figsize=(10,5))
plt.hist(data1, bins=30, alpha=0.5, label='SD=5')

plt.hist(data2, bins=30, alpha=0.5, label='SD=15')

plt.title('Effect of Standard Deviation on Data Spread')
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.legend()
plt.show()
# In the histogram, data1 with a lower standard deviation (SD=5) is more concentrated around the mean,`
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
