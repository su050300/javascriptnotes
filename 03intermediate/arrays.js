//create an array
let arra = ['hi', 'hello', 'hey']
    //to get length of an array using length property
console.log(arra.length)
    //to access the ith element of the array using for loop
for (let i = 0; i < arra.length; i++)
    console.log(arra[i])
    //use of foreach using array
arra.forEach(function(val, endex) {
        console.log(val + ' at ' + (endex + 1))
    })
    //use of push to append any value at the end of the array
arra.push('hey there')
console.log(arra)
    //to delete an element using pop() operation
arra.pop()
console.log(arra)
    //to pop an element from front using shift
arra.shift()
console.log(arra)
    //to push an elemnt from front of an array using unshift
arra.unshift('hi')
console.log(arra)
    //to get the index of any element using indexof
console.log(arra.indexOf('hello'))
    //use of findindexof to walk through
let index = arra.findIndex(function(val, index) {
    return val === 'hey'
})
console.log(index)


//use of array.from to form an array from the given argument
let arr = Array.from([1, 2, 3], x => x + x)
console.log(arr)
    //use of isArray function to know whether the given element is of type array
console.log(Array.isArray(arr))
    //concaneting wo array
console.log(arra.concat(arr))

//use of filter,find

let idi = arra.filter(function(val, index) {
    return val === 'hi'
})
console.log(idi)
    //join
console.log(arra.join(''))
    //keys
let ietr = arra.keys()

for (let iter of ietr)
    console.log(iter)


//map
let array1 = [1, 2, 3, 4]
const mp = array1.map(x => x * 2)
console.log(mp)


//reduce and reducer
//reducer is a simple callback function which decides the way in which array should be reduced


let reducer = (acc, curr) => acc + curr
console.log(array1.reduce(reducer))
console.log(array1.reverse())
console.log(array1.sort())



//values
let itr = array1.values()
for (let value of itr)
    console.log(value)

//iterator
let iter = array1[Symbol.iterator]()

console.log(iter.next().value)

//remove duplicates using filter

let a = ['1', 2, 3, 4, 2, 4, 2, 1, '1'].filter((value, index, self) => {
        return self.indexOf(value) === index
    })
    // console.log(a)
    //
let m = ['1', 2, 3, 4, 2, 4, 2, 1, '1']
let temp = []
temp = m.reduce((temp, number) => {
    if (temp.indexOf(number) === -1) {
        temp.push(number);
    }
    return temp
}, [])
console.log(temp)




//a way of cloning array so that we can use copy of the array without using the original array

let h = [...m]
console.log(h)
    //concaneting array using concate function or[...arr1,...arr2]


//finding minimum or maximum elemnt in the array using Math libraries

console.log(Math.min(...m))
console.log(Math.max(...m))

//pints to be noted
/*
    if an array is created using new Array(4) if ony single element(number) is present then it creates an arry of size 4 and all the values inside it are undefined by default
 */
//use of spread operator


let to = [1, 2, [3, 4, 5],
    [6, 7]
]
let g = [].concat(...to)
console.log(g)