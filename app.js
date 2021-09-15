'use strict';

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    // Only change code below this line
    let newArray = [];
    let newArray1 = []
    let objectProperty1 = Object.keys(userObj);
    newArray1.push(objectProperty1);
    for (let i = 0; i < objectProperty1.length; i++) {
        if (objectProperty1[i] == "data") {
            let value1 = objectProperty1[i];
            let objectProperty2 = Object.keys(userObj[value1]);
            for (let j = 0; j < objectProperty2.length; j++) {
                if (objectProperty2[j] === "friends") {
                    let value2 = objectProperty2[j];
                    userObj[value1][value2].push(friend);
                    newArray = userObj[value1][value2];
                }
            }
        }
    }
    return newArray;
    // Only change code above this line
}
let a = [1, 2, 3, 4, 5];
console.log(a[2]);
console.log(addFriend(user, 'Pete'));

function findLongestWordLength(str) {
    let newArray = str.split(' ');
    let longestWord = 0
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].length > longestWord) {
            longestWord = newArray[i].length;
        }
    }
    return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function largestOfFour(arr) {
    let negativeNumber = -Number.MAX_VALUE;
    let largestArr = [negativeNumber, negativeNumber, negativeNumber, negativeNumber]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            
            if (arr[i][j] > largestArr[i]) {
                largestArr[i] = arr[i][j];
            }
        }
    }

    return largestArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

let word = 'opensesame';
let target = 'same';
console.log(word.substr(-6));

var date = new Date();
const PI = 3.14;
console.log(Math.PI);


function main() {
    var distance = parseInt("150", 10);
    //your code goes here
    let hours = distance / 40;
    let minutes = hours * 60;
    return minutes;
}
main();

function main1() {
    var depth = parseInt("42", 10);
    //your code goes here
    let timeCount = 0;
    let depthCount = 0;
    
    for (var i = 0; i <= depth; i++) {
        if (depthCount<=depth) {
            timeCount++;
            if (depthCount <= depth) {
                depthCount += 7
            }
            if (depthCount <= depth) {
                depthCount -= 2;
            }
            
        }
    }
    console.log(timeCount);
}
main1();
function main2() {
    var depth = parseInt("42", 10);
    // VARIABLES
    const climb = 7;
    const slip = -2;
    let day = 0;

    // SOLUTION
    for (let progress = 0; progress <= depth;) {
        progress += climb;
        day += 1;
        if (progress >= depth) {
            break;
        }
        else {
            progress += slip;
        }
    }

    // OUTPUT
    console.log(day);

}
main2();

//You are working on a Contact Manager app.
//You have created the contact object constructor, which has two arguments, name and number.
//You need to add a print() method to the object, which will output the contact data to the console in the following format: name: number
//The given code declares two objects and calls their print() methods.Complete the code by defining the print() method for the objects.
class contact {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    print() {
        console.log(this.name + ": " + this.number)
    }

}

try {
    const obj1 = {
        a: 0,
        b: 2,
        c: 4
    };
    const obj2 = Object.assign({ c: 5, d: 6 }, obj1);
    console.log(obj2.c, obj2.d);

} catch (e) {
    
}

class Add {
    constructor(...words) {
        this.words = words;
    }
    print() {
        let a = "";
        let fullWord = "$"
        for (let item of this.words) {
            a +=  fullWord + item;
        }
        a += fullWord;
        return a;
    }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();

function repeatStringNumTimes(str, num) {
    let emptyString = [];
    if (num < 0 || num === 0) {
        return emptyString;
    }
    let newString = "";
    for (let i = 1; i <= num; i++) {
        newString += str;
    }
    return newString;
}

repeatStringNumTimes("abc", 0);

function truncateString(str, num) {
    let myTruncatedString = str.substring(0, num);
    if (num<str.length) {
        let newString = `${myTruncatedString}...`
        return newString;
    }
    return myTruncatedString;
    
}

truncateString("A-tisket a-tasket A green and yellow basket", 8)

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];

        } 
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);



//Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    let newArray = str.split(" ");
    let newArrays = [];
    for (let i = 0; i < newArray.length; i++) {
       newArrays.push(newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1).toLowerCase());
    }
    let returnedString = newArrays.join(" ");
    returnedString;
}

titleCase("sHoRt AnD sToUt");



//Slice and Splice
//You are given two arrays and an index.
//Copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array.The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let arr3 = [...arr2]
   arr3.splice(n, 0, ...arr1);
    return arr3;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


//Falsy Bouncer
//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let arr2 = []
    for (let value of arr) {
        if ((value != false) && (value != null) && (value != undefined) && (!isNaN(value))) {
            arr2.push(value)
            //arr.splice(arr.indexOf(value), 1);
        }
    }
    return arr2;
}
bouncer([false, null, 0, NaN, undefined, ""]);





//Return the lowest index at which a value(second argument) should be inserted into an array(first argument) once it has been sorted.The returned value should be a number.
//For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1(index 0), but less than 2(index 1).
//Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like[3, 5, 20] and 19 is less than 20(index 2) and greater than 5(index 1).
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) { return a - b }) // how to sort an array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return arr.indexOf(arr[i]);
        }
    }
     
     return arr.length;
    
    
}

getIndexToIns([2, 20, 10], 19);

function mutation(arr) {
    let count = 0
    let string1 = arr[0].split("");
    let string2 = arr[1].split("");
    for (var i = 0; i < string2.length; i++) {
        if (arr[0].toLowerCase().includes(string2[i].toLowerCase())) {
            count++;
        }
    }
    if (count===string2.length) {
        return true
    } else {
        return false;
    }
}

mutation(["Alien", "line"]);

function PrintName(name) {
    console.log(`Hello ${name}`)
}

PrintName("Timi")

// The global variable
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Only change code below this line

//The variable watchList holds an array of objects with information on several movies.
//Use a combination of filter and map on watchList to assign a new array of objects with
//only title and rating keys.The new array should only include objects where imdbRating is
//greater than or equal to 8.0.Note that the rating values are saved as strings in the object
//and you may need to convert them into numbers to perform mathematical operations on them.


var ratings = watchList.map(rating => ({
    title: rating["Title"],
    rating: rating["imdbRating"] }));

var filteredList = ratings.filter(user => user.rating >= 8.0);
// Only change code above this line

console.log(JSON.stringify(ratings));


//The variable watchList holds an array of objects with information on several movies.
//Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
//Recall from prior challenges how to filter data and map over it to pull what you need.
//You may need to create other variables, and return the average rating from getRating function.
//Note that the rating values are saved as strings in the object and need to be converted into
//numbers before they are used in any mathematical operations.

function getRating(watchList) {
    // Only change code below this line
    // Add your code below this line
    var averageRating =
        watchList.filter(film => film.Director === "Christopher Nolan").map(film => Number(film.imdbRating)).reduce((sumOfRatings, rating) => sumOfRatings + rating) /
        // Divide by the number of Nolan films to get the average rating
        watchList.filter(film => film.Director === "Christopher Nolan").length;
    // Add your code above this line
    


    // Only change code above this line
    return averageRating;
}
console.log(getRating(watchList));

//Use the split method inside the splitify function to split str into an array of words.
//The function should return the array.Note that the words are not always separated by
//spaces, and the array should not contain punctuation.
function splitify(str) {
    // Only change code below this line
    let newString = str.split(/\s|_|(?=[A-Z])|\W/)
    return newString;

    // Only change code above this line
}
splitify("Hello World,I-am code");

//Use the join method(among others) inside the sentensify function to make a sentence from the words
//in the string str.The function should return a string.For example, I - like - Star - Wars would
//be converted to I like Star Wars.For this challenge, do not use the replace method.
function sentensify(str) {
    // Only change code below this line
    let newArray = str.split(/\s|_|(?=[A-Z])|\W/)
    let newArray1 = newArray.join(" ");
    return newArray1;

    // Only change code above this line
}
sentensify("The_Andy_Griffith_Show");



function urlSlug(title) {
    return title.split(/\s|_|(?=[A-Z])|\W/).filter(item=> !(item==="")).map(item => item.toLowerCase()).join("-")
}
urlSlug(" Winter Is  Coming");


//We'll pass you an array of two numbers. Return the sum of those two numbers 
//plus the sum of all the numbers between them.The lowest number will not always come first.
//For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.
function sumAll(arr) {
    if (arr[0] > arr[1]) {
        let value = 0;
        for (let i = arr[1]; i <= arr[0]; i++) {
            value += i;
            
        }
        return value;
    } else {
        let value1 = 0;
        for (let i = arr[0]; i <= arr[1]; i++) {
            value1 += i;
            
        }
        return value1;
    }
}
sumAll([1, 4]);


//Compare two arrays and return a new array with any items only found in one of the two given arrays,
//but not both.In other words, return the symmetric difference of the two arrays.
//Note: You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (!(arr1.includes(arr2[i]))) {
            newArr.push(arr2[i]);
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!(arr2.includes(arr1[i]))) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//You will be provided with an initial array(the first argument in the destroyer function),
//followed by one or more arguments.Remove all elements from the initial array that are
//of the same value as these arguments.
//Note: You have to use the arguments object.
function destroyer(arr, ...arr1) {
    let removingArray = [...arr1]
    for (var i in arr) {
        for (var item of removingArray) {
            if (arr[i] === item) {
                delete arr[i];
            }
        }
    }
   
    return arr.filter(t => t !== null);
    
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
let example = { "b": 2, "c": 3, "d": 4, "e": 5 }
for (var item in example) {

}

function whatIsInAName(collection, source) {
    var arr = [];
    
    // Only change code below this line
    for (let i of collection) {
        let collectionKeys = Object.keys(i);
        let sourceKeys = Object.keys(source);
        let index = 0;
        for (var j = 0; j < sourceKeys.length; j++) {
            if (collectionKeys.includes(sourceKeys[j])) {
                index++
            }
        }
        if (index === sourceKeys.length) {
            let index2 = 0
            for (var k in i ) {
                for (var l in source) {
                    if (i[k] === source[l] && k==l) {
                        index2++
                    }
                }
            }
            if (index2 === sourceKeys.length) {
                arr.push(i)
            }
        }
        
    }

    // Only change code above this line
    return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });



//Pig Latin is a way of altering English Words.The rules are as follows
//If a word begins with a consonant, take the first consonant or consonant
//cluster, move it to the end of the word, and add ay to it.
//If a word begins with a vowel, just add way at the end.
//Translate the provided string to Pig Latin.Input strings are
//guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
    let newArr = str.split("");
    let removedArr = [];
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0
    if (vowels.includes(newArr[0])) {
        return str + "way";
    }
    for (var i = 0; i < newArr.length; i++) {
        if (vowels.includes(newArr[i])) {
            removedArr.push("ay");
           let concated =  newArr.concat(removedArr);
           return concated.filter(t=> t!==null).join("");
        } else {
           let rC =  newArr[i]
            removedArr.push(rC);
            delete newArr[i];
            count++
        }
    }
    if (count === str.length) {
        return str + "ay";
    }
}
translatePigLatin("rhythm");


//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing(before).
//Third argument is what you will be replacing the second argument with (after).
//Note: Preserve the case of the first character in the original word when you are replacing it.
//For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
function myReplace(str, before, after) {
    let newArr = str.split(" ");
    let position = newArr.indexOf(before);
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        newArr[position] = after.charAt(0).toUpperCase() + after.slice(1); //Capitalizing the First Letter
    } else {
        newArr[position] = after.toLowerCase();
    }
    return newArr.join(" ");
}

myReplace("I think we should look up there", "up", "Down");
console.log('Hello world');
