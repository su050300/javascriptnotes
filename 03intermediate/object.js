//creating an object
let mytodo = {
        1: 'one',
        2: {
            'on': 'off',
            'true': 'false',
        },
        3: 'three',
    }
    //to clone an object ie creating a copy of it to work on it
let clone = {...mytodo }
console.log(clone)
    //object.freeze can be used to freeze an object ie makes it immutabel
    //deep cloning using json.parse
let clo = JSON.parse(JSON.stringify(clone))
    //sue of .constructor
console.log(clone.constructor === Object)
    //use of assign() function
let redo = Object.assign({}, mytodo)
console.log(redo)
    //use of json to send data from browser onto the server
console.log(JSON.stringify(redo))
    //use of json to retrieve data from the server onto the browser
let code = '{"1": "one","2": "two"}'
let co = JSON.parse(code)
    //constructor for objects creation

let construct = function(firstname, lastname, age) {
    this.first = firstname
    this.last = lastname
    this.age = age
}
console.log(new construct('sujeet', 'kushwaha', 25))
console.log(construct.prototype)

//use of defineProperty to define the property for an object and defineProperties for defining properties for the various  object

Object.defineProperty(clone, '4', {
    value: 'four',
    writable: true,
    configurable: true,
    enumerable: true
})
console.log(clone)

Object.defineProperties(clone, {
    '5': {
        value: 'five',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    '6': {
        value: 'six',
        writable: true,
        enumerable: true,
    }
})
console.log(clone)




//use of set and get in definng properties to the object

let info = {}
info = new construct('sujeet', 'kushwaha', 25)
Object.defineProperty(info, 'fullname', {
    get: function() { //get function is used when we want to define a prperty for the object which results from its previous properties
        return this.first + ' ' + this.last
    },
    set: function(value) { //set function is used when we change the value of the property and want it to be seen in other property also
        [this.first, this.last] = value.split(' ')
    }
})
console.log(info.fullname)
info.last = 'Maurya'
console.log(info)
console.log(info.fullname)
info.fullname = 'Golden Maurya'
console.log(info.first)


//object.entries()
console.log(Object.entries(info))


for (let [key, value] of Object.entries(info))
    console.log(`${key} -- ${value}`)


//use of getownobjectdescriptors

let c = Object.getOwnPropertyDescriptor(clone, '1')
console.log(c.value)
    //use of getownpropertydescriptors


//use of getOwnPropertyNames
console.log(Object.getOwnPropertyNames(clone)) //it returns the array containing the names of the property of the object

console.log(Object.getOwnPropertySymbols(clone))



//use of isextensible to check whether new property can be added to the object

console.log(Object.isExtensible(clone))

//use of prvent extension prevents the object from extending

Object.preventExtensions(clone)

console.log(Object.isExtensible(clone))

//isfrozen checks if the object is frozen.generally all non-extensibble objects are frozen and cannot be configured or writable


console.log(Object.isFrozen(clone))