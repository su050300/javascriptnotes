let dollartors = function(dolla) {
    if (typeof dolla === 'number') {
        return dolla * 64
    } else
        throw Error('Amount needs to be in number')
}
try {
    console.log(dollartors('five'))
} catch (error) {
    console.log(error)
}