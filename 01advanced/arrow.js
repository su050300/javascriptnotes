const hellothere = (name) => `Hey there,${name},how r u doing`
console.log(hellothere('sammy'))

let mytodos = [{
    title: 'did yoga',
    isdone: true,
}, {
    title: 'took medicine',
    isdone: true,
}, {
    title: 'did bath',
    isdone: false,
}, {
    title: 'had breakfast',
    isdone: true,
}, {
    title: 'programmed',
    isdone: false,
}]

let ind = mytodos.filter((todo) => todo.isdone === true)
ind.forEach(function(val) {
    console.log(val.title)
})