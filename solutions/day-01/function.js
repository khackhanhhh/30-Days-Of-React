function Test (){
    
}
   // Arrow function 
   const anonymousFun = function (n) {
    return n * n
  }

  const fullName = (firstName,lastName) => {
      return firstName +' '+ lastName
  }

  console.log(fullName('Alex','B'));

  const addNumber = (a,b) => {
    return a+b
}

console.log(addNumber(3,4));

  const areaOfCircle = (r) =>{
    return Math.PI * r *r
  }
  console.log(areaOfCircle(10));

  const convertCelciusToFahrenheit = (oC) =>{
    return (oC * 9/5) + 32
  }

  console.log(convertCelciusToFahrenheit(10));

  const BMI = (weight, height) =>{
    var aBMI = weight/(height*height)
    if(aBMI < 18.5) {
        return 'Underweight'
    } else if (aBMI <24.9){
        return 'Normal weight'
    } else if(aBMI<29.9) {
        return 'Overweight'
    } else {
        return 'Obese'
    }
  }

  console.log(BMI(60,1.6));

  const season = (month) =>{
    if (month==='September' || month==='October' || month==='November') {
        return 'The season is Autumn'
    } else if (month==='December' || month==='January' || month==='February') {
        return 'The season is Winter'
    } else if (month==='March' || month==='April' || month==='May') {
        return 'The season is Spring'
    } else if (month==='June' || month==='July' || month==='August') {
        return 'The season is Summer'
    }
  }

  console.log(season('March'));

  const solveQuadEquation = (a,b,c) =>{
      var delta = b*b - 4*a*c
      if(delta<0){
          return 'No point match'
      } else if(delta>0){
        var point1 =(-b+Math.sqrt(delta))/2*a
        var point2 =(-b-Math.sqrt(delta))/2*a
        return point1 + ' '+ point2
        
      } else {
        return -b/2*a
      }
  }
  console.log(solveQuadEquation(1,4,4));

  const printArray = (arr) =>{
    for(const element of arr){
        console.log(element);
    }
  }

  console.log(printArray([1,2,3,4]));

  const showDateTime =() =>{
   var today = new Date();
   var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
   var time = today.getHours() + ":" + today.getMinutes() ;
   var dateTime = date+' '+time;
   return dateTime
  }
  console.log(showDateTime());

  const reverseArray = (arr) =>{
    for(const element of arr){
        return arr.reverse()
        
    }
  }
  console.log(reverseArray([1,2,3]));

  var add=[]
  const addItem = (arr,item)=>{
      add = arr.slice()
      add.push(item)
      return add
  }
  console.log(addItem([1,2,3],5));

  var remove=[]
  const removeItem = (arr,item)=>{
      add = arr.slice()
      add.splice(item,1)
      return add
  }
  console.log(removeItem([1,2,3],1));

  const evensAndOdds =(num)=>{
    if(num%2===0){
        return "The number of evens are " + (num/2 + 1) + 
               ". The number of odds are " + num/2
    } else {
        return "The number of evens are " + (num+ 1)/2 + 
        ". The number of odds are " + (num+ 1)/2
    }
  }
  console.log(evensAndOdds(11));

  function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93

  function sayHello() {
    console.log('Hello')
  }
  // setInterval(sayHello, 2000)

  setTimeout(sayHello, 2000) 
