dog = {
    name : 'Ala', 
    legs : 4, 
    color : 'white', 
    age : 2,
    bark : function (){
        return 'woof woof'
    }
}
console.log(dog);

// coppy person
const copyDog = Object.assign({}, dog)

//get values
const keys = Object.values(copyDog)
console.log('Values of dog an array: ',keys) 

dog.breed = 'Japan'
dog.getDogInfo = function () {
    const details = Object.entries(copyDog)
    console.log('get Dog info',details)
}
dog.getDogInfo()

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node','a','a','b','c'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  for (let key in users) {
      if(users[key].points >= 50){
        console.log('Point >= 50: ',key);
      }
  }
  
  var maxSkill = 0
  var maxName = ''
  for(let key in users) {
    if(users[key].skills.length>maxSkill){
        maxSkill = users[key].skills.length
        maxName = key
      }
  }
  console.log('The most skill is :', maxName, 'has ', maxSkill);

  isLogin = 0
  for(let key in users) {
    if(users[key].isLoggedIn===true){
        isLogin++
      }
  }
  console.log('There are :', isLogin, 'people is login.');

  for(let key in users) {
    if(users[key].skills.includes('MongoDB'||'Express'||'React'||'Node')===true){
        console.log('MERN: :', key);
      }
  }

  const key = Object.keys(users)
  console.log('Keys of user an array: ',key)    

  const value = Object.values(users)
  console.log('Values of user an array: ',value) 



  
