var age = 10
if(age>=18){
    console.log('You are old enough to drive')
} else {
    console.log('You are left with ',18-age,' years to drive.')
}

var yourAge = 11
var myAge = 10
if(yourAge==myAge){
    console.log('You and I are the same age.')
} else if(yourAge>myAge) {
    console.log('You are ', yourAge-myAge,' years older than me.')
} else {
    console.log('You are ', myAge-yourAge,' years younger than me.')
}

var a=12
var b=13
if(a>b && a!=b){
    console.log(a,'is greater than',b)
} else {
    console.log(a,'is less than',b)
}
a>b ? console.log(a,'is greater than',b) : console.log(a,'is less than',b)

var evenNumber = 12
if(evenNumber%2===0){
    console.log(evenNumber,'is an even number')
} else {
    console.log(evenNumber,'is an odd number')
}

var scores = 90
if(scores<0){
    console.log(scores,'is not a scores.')
} else if (scores<=49) {
    console.log(scores,'is scores F.')
} else if (scores<=59) {
    console.log(scores,'is scores D.')
} else if (scores<=69) {
    console.log(scores,'is scores C.')
} else if (scores<=89) {
    console.log(scores,'is scores B.')
} else {
    console.log(scores,'is scores A.')
} 

var month = 'SEptember'
if (month==='September' || month==='October' || month==='November') {
    console.log('The season is Autumn')
} else if (month==='December' || month==='January' || month==='February') {
    console.log('The season is Winter')
} else if (month==='March' || month==='April' || month==='May') {
    console.log('The season is Spring')
} else if (month==='June' || month==='July' || month==='August') {
    console.log('The season is Summer')
}

var day = 'Saturday'
if (day === 'Saturday'||day === 'Sunday'){
    console.log(day,'is a weekend.')
} else if (day === 'Monday'||day === 'Tuesday'||day === 'Wednesday'||day === 'Thursday'||day === 'Friday'){
    console.log(day,'is a working day.')
} 

var dayOfMonth = 'February' 
var years = 2021
if(dayOfMonth==='January'||dayOfMonth==='March'||dayOfMonth==='May'||dayOfMonth==='July'||dayOfMonth==='August'||dayOfMonth==='October'||dayOfMonth==='December'){
    console.log(dayOfMonth,'has 31 days')
} else if (dayOfMonth==='April'||dayOfMonth==='June'||dayOfMonth==='September'||dayOfMonth==='November'){
    console.log(dayOfMonth,'has 30 days')
} else if(dayOfMonth==='February'){
    if(years%400===0 || years%4===0 && years%100!==0) {
        console.log(dayOfMonth,'has 29 days') 
    } else {
        console.log(dayOfMonth,'has 28 days') 
    }
}

