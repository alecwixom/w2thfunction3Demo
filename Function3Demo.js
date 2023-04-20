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

let nums2Times2 = nums2.map ((num) => {
    return num * 2
})

console.log('nums2', nums2);
console.log('nums2Times2:', nums2Times2);