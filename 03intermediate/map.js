//declaration of map
let todos = new Map([
    ['green', 'apple']
])

console.log(todos)

let arra = [
    ['key1', 'value1'],
    ['key2', 'value2']
]
let ma = new Map(arra)
console.log(ma)

//to access the value of the map using key 

console.log(ma.get('key2'))
    //setting the values
ma.set('key3', 'value3')

console.log(ma)
    //to access the key value pair using for of
for (let [key, value] of ma.entries())
    console.log(`${key} -- ${value}`)

//to return the size of the map

console.log(ma.size)

//to iterate through the keys of the map
let key = ma.keys()

for (let ke of key)
    console.log(ke)

//to iterate through the values of the  map

let value = ma.values()
for (let val of value)
    console.log(val)
    //clear method removes all the elemnnt from the map
todos.clear()
console.log(todos)
    //delete method to remove any specific value from the map

ma.delete('key1')
console.log(ma)

//has method to check whether the given element is present in the map

console.log(ma.has('key2'))
    //use of for each
ma.forEach((value, key) => console.log(`${key} -- ${value}`))

//