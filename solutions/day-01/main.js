// import { countries } from './countries';
// console.log('countries: ',countries)

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  textC= text.split('.').join("")
  textF= textC.split(',').join("")
  console.log(textF)
  var arrText = textF.split(' ')
  console.log(arrText)
  console.log(arrText.length)

  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  shoppingCart.unshift("Meat")
  shoppingCart.push("Sugar")

  const honey = shoppingCart.indexOf("Honey")
  shoppingCart.splice(honey,1)

  const tea = shoppingCart.indexOf("Tea")
  shoppingCart.splice(tea,1,"Green Tea")

  console.log(shoppingCart)

  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node', 'Express', 'MongoDB']
  const fullStack = frontEnd.concat(backEnd);
  console.log(fullStack)

  
