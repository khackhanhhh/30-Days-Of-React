class Person {
    constructor(firstName, lastName) {
        // constructor( firstName = 'Asabeneh', lastName = 'Yetayeh'){ 
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
        this.score = 0
        this.skills = []
    }

    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }

    get getSkills() {
        return this.skills
    }

    set setSkill(skill) {
        this.skills.push(skill)
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

const person = new Person()
const person1 = new Person('Asabeneh', 'Yetayeh')

console.log('class default : ', person)
console.log('class constructor : ', person1)
console.log('class function : ', person1.getFullName())

person1.setSkill = 'HTML'
console.log(person1);
console.log('class getter : ', person1.getSkills)

console.log('Skills random static : ', Person.favoriteSkill())
console.log('Time now static: ', Person.showDateTime())

class Student extends Person {
    constructor(firstName, lastName, gender) {
        super(firstName, lastName)
        this.gender = gender
    }
    saySomething() {
        console.log('I am a child of the person class')
    }

    getFullName() {
        const fullName = this.firstName + '&' + this.lastName
        return fullName
    }
}
const s1 = new Student('Asabeneh', 'Yetayeh')
console.log(s1)
console.log('function extends : ', s1.saySomething())
console.log('function extends : ', s1.getFullName())

class Animal {
    constructor(name,age,color,legs){
        this.name=name
        this.age=age
        this.color=color
        this.legs=legs
    }
    sayHello(){
        console.log('Hello');
    }
}
class Dog extends Animal {
    constructor(name,age,color,legs,gender){
        super(name,age,color,legs)
        this.gender = gender
    }
    sayHello(){
        return 'Woof Woof'
    }
}
class Cat extends Animal {
    constructor(name,age,color,legs,gender){
        super(name,age,color,legs)
        this.gender = gender
    }
    sayHello(){
        return 'Meow Meow'
    }
}

const cat1 = new Cat()
console.log(cat1.sayHello());