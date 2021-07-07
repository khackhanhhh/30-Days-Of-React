// forEach dung mang
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
countries.forEach((country, i, arr) => {
  console.log(i, country.toUpperCase())
})

// ------------------
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = []
countries.forEach((country) => newCountries.push(country))

console.log(newCountries)

//for in dung Object

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }