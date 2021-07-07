const rectangle = {
    length: 20,
    width: 20,
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    isMarried: true,
    'phone number': '+3584545454545',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
  }
  console.log('Person: ',person)
  console.log(person['phone number'])
  console.log(person.getFullName())
  // coppy person
  const copyPerson = Object.assign({}, person)
  console.log('copyPerson (Object.assign) : ',copyPerson)

  // properties of object as an array
  const keys = Object.keys(copyPerson)
  console.log('Properties of object an array (Object.keys): ',keys) 

  // value of object as an array
  const values = Object.values(copyPerson)
  console.log('value of object an array (Object.values): ',values)

  // properties and value of object as an array
  const entries = Object.entries(copyPerson)
  console.log(entries)