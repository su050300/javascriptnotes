let mytodos = ['buy bread', 'go to gym', 'go to college']
console.log(mytodos.indexOf('buy bread'))
const newtodos = [{
    title: 'buy bread',
    isdone: false,
}, {
    title: 'go to gym',
    isdone: false,
}, {
    title: 'go to college',
    isdone: false,
}]

// const index = newtodos.findIndex(function(todo, insex) {
//     return todo.title === 'go to gym'
// })
// console.log(index)
//method1
// let findtodo = function(anytodo, title) {
//     const index = anytodo.findIndex(function(todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return anytodo[index]
// }
// let hi = findtodo(newtodos, 'go to gym')
// console.log(hi)
//method2
let findtodo = function(anytodo, title) {
    const index = anytodo.find(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return index
}
let hi = findtodo(newtodos, 'go to gym')
console.log(hi)