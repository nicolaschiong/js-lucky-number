# js-lucky-number

### Problem
An integer is considered "lucky" in an array of integers (arr) if its frequency, or the number of times it appears in the array, is equal to its value. The task is to return the lucky integer in the array. If there are multiple lucky integers, the largest one should be returned. If there is no lucky integer, the function should return -1.



### Solution
This solution uses an object count to count the frequency of each number in the array. The keys of the object are the elements in the array and the values are the number of times each element appears.

After counting the frequency of each number, the solution iterates through the object and checks if any of the keys are equal to their corresponding values. If a key is equal to its value, it is a lucky number, so the solution pushes it to an array of lucky numbers.

Finally, if there are no lucky numbers, the solution returns -1. Otherwise, it returns the maximum lucky number using the Math.max function.
