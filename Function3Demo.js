/* Function 3 Demo */

// This is an outer function / higher order function
function outer (cbf) {
    cbf()
}

// //This is the inner function / callback function
// function inner() {
//     console.log('This is the callback (inner) function');
// }

outer(() => {
    console.log('This is the callback (inner) function')
})

// console.log('----------');
// console.log('FOR EACH');
// console.log('----------');
// nums.forEach((element, index, array) => {
//     console.log(element, 'is at index:' , index, 'array:', array);
// })

// let sum = 0
// nums.forEach(function(number){
//     sum += number
//     console.log(sum);
// })

let colors = ['red', 'green', 'white', 'green', 'purple', 'red']

let colorsCount = {}

colors.forEach((color) => {
    if (colorsCount[color]) {
        colorsCount[color]++
    } else {
        colorsCount[color] = 1
    }
})

console.log("colorsCount:", colorsCount);

// The .map method \\

let nums2 = [1,2,3,4]

// We're going to multiply each number by 2 - with .map()
let nums2Times2 = nums2.map ((num) => {
    return num * 2
})

console.log('nums2', nums2);
console.log('nums2Times2:', nums2Times2);

// This is the callbac function for the nums2Minus2 .map(). I do this because I don't want an inline callbac function
function cbf (num) {
    return num -1
}

let nums2Minus1 = nums2.map(cbf)

console.log("nums2Minus1", nums2Minus1);

let numsArr = [2,45,3,123,56,4,8,9,33]

//Filter the 'numsArr' to get odd numbers

let forLoopOdd = []

for (let i = 0; i < numsArr.length; i++){
    numsArr [i] % 2 === 1 ? forLoopOdd.push(numsArr[i]) : null
}

console.log("for loop:", forLoopOdd);

//Filter the 'numsArr' to get odd numbers by using the .filter()
let filterOddNums = numsArr.filter((num) => {
    return num % 2 ===1
})

console.log('filteroddnums:', filterOddNums);

/*Array of objects this time*/

const cars = [
    {name: 'honda civic', price: 30000},
    {name: 'toyota corolla', price: 35000},
    {name: 'kia rio', price: 25000},
    {name: 'tesla x', price: 60000},
    {name: 'honda pilot', price: 45000},
    {name: 'chevy bolt', price: 40000},
    {name: 'ford focus', price: 20000},
    {name: 'honda odyssey', price: 30000}
]

let carFilter = cars.filter((car) => {
    return car.price >= 30000
})

console.log('The cars 30k and above are', carFilter);

let hondaCars = cars.filter ((car) => {
    return car.name.includes('honda')
})

console.log("Honda cars", hondaCars)

// .reduce method \\

let numsArray = [3,1,2,5]

let reduceSum = numsArray.reduce((acc, curr) =>{
    console.log(`accumulator: ${acc}, currentValue: ${curr}`);
    return acc + curr
}, 0)

console.log('Reduced Sum:', reduceSum);

// Chaining

let hondaCarSum = cars.filter((car) => car.name.includes('honda')).reduce((acc, curr) => acc + curr.price, 0)
console.log("hondaSumPrice:", hondaCarSum);