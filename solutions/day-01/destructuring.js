// default array

const numbers = [1, 2, 3]
const [num1, num2, num3] = numbers
console.log('default array: ',num1, num2, num3)

//default object 
const rectangle = {
    width: 20,
    height: 10,
  }
  
  let { width, height } = rectangle
  //let { width, height, perimeter = 200 } = rectangle
  // chang name 
  let { width: w, height: h } = rectangle

  console.log('default object: ',width,height);

// define

const countries = ['Finland', 'Sweden', undefined, 'Norway']
const [fin, swe, ice = 'Iceland', nor, den = 'Denmark'] = countries
console.log('define: ',fin, swe, ice, nor, den) 

// array in array
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  const [frontEnd, backEnd] = fullStack
  console.log('array in array: ',frontEnd, backEnd)
  //["HTML", "CSS", "JS", "React"] , ["Node", "Express", "MongoDB"]

  // object in object

  const props = {
    user:{
      firstName:'Asabeneh',
      lastName:'Yetayeh',
      age:250
    },
    post:{
      title:'Destructuring and Spread',
      subtitle:'ES6',
      year:2020
  },
  skills:['JS', 'React', 'Redux', 'Node', 'Python']
  
  }

// const {user, post, skills} = props
// const {firstName, lastName, age} = user
// const {title, subtitle, year} = post
// const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills
  
  const {user:{firstName, lastName, age}, post:{title, subtitle, year}, skills:[skillOne, skillTwo, skillThree, skillFour, skillFive]} = props

  // skip element

  const number = [1, 2, 3,4,5]
  const [n1, n2, , , n5] = number

  console.log('skip element: ',n1, n2, n5);

  //get all 

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [nu1, nu2, nu3, ...rest] = nums
  console.log('get all : ',nu1, nu2, nu3, rest) //1, 2, 3, [4, 5, 6, 7, 8, 9, 10]

  //example

  const fullStack1 = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
  ]
  
  for (const [first, second, third, fourt] of fullStack1) {
    console.log(first, second, third, fourt)
  }

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }

  const getPersonInfo = (person) => {
    const {firstName,lastName,age,country,job,skills:[skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,skill9],languages:[languages1,languages2,languages3]}=person
    console.log(firstName + ' ' + lastName + 'in ' + country +'. He is '+age+ ' years old. He is an ' + job + '. He teaches '+skill1 + skill2+ + '. He speaks '+ languages1);
  }
  

  getPersonInfo(person)