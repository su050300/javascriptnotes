let days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun']
days.forEach(function(day, index) {
    console.log(`starts with ${index+1} --${day}`)
});
//Assignment
let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
months.forEach(function(month, index) {
    console.log(`starts with ${index++} --${month}`)
})