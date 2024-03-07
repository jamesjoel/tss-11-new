/*
How do you reverse a string?
How do you determine if a string is a palindrome?
How do you calculate the number of numerical digits in a string?
How do you find the count for the occurrence of a particular character in a string?

How do you find out if the two given strings are anagrams?
How do you calculate the number of vowels and consonants in a string?
How do you total all of the matching integer elements in an array?
How do you reverse an array?
How do you find the maximum element in an array?
How do you sort an array of integers in ascending order?
How do you print a Fibonacci sequence using recursion?
How do you calculate the sum of two integers?
How do you find the average of numbers in a array?
How do you check if an integer is even or odd?
How do you find the middle element of a linked list?
How do you remove a loop in a linked list?
How do you merge two sorted linked lists?
How do you implement binary search to find an element in a sorted array?
How do you print a binary tree in vertical order?


JS Array Method
.length
.toString()
Array.join("-")
Array.pop()
Array.shift()
Array.push("white")
Array.unshift("white")
NewArray = Array.concate(Array, Array);
Array.flat();
Array.splice();
Array.slice()
Array.sort()
Array.reverse()
Array.indexOf()


JS String Method

.length
.charAt(2)
.slice()
.trim()
.repeat()
.split()


JSON method

JSON.parse()
JSON.stringify()


*/

let arr = [
    {
        id : 1, 
        name : "rohit",
        age : 25
    },
    {
        id : 1, 
        name : "rohit",
        age : 25
    },
    {
        id : 1, 
        name : "rohit",
        age : 25
    }
]

let x = JSON.stringify(arr);

console.log(x);

let y = JSON.parse(x);
console.log(y);