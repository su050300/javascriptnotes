//to get current date and time
let dat = new Date()
console.log(dat)
    //printing the date in the string type
console.log(dat.toString())
    //conbvert to time string
console.log(dat.toTimeString())

//convert to date string
console.log(dat.toDateString())
    //convert to localestring
console.log(dat.toLocaleString())
    //use of getdate to get the specified date
console.log(dat.getDate())
    //to get the day,moths
console.log(dat.getDay(), dat.getMonth())
    //to get the year
console.log(dat.getFullYear())
    //to get minutes,hours,seocnds
console.log(dat.getHours(), dat.getMinutes(), dat.getSeconds())