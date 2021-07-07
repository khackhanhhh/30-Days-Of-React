// forEach with arr
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']
const newCountries = []
countries.forEach((country) => newCountries.push(country))

console.log('use forEach: ', newCountries)

//map return array
const countriesLength = countries.map((country) => country.length)

console.log('use map: ', countriesLength)

// filter return array 
const countriesWithLand = countries.filter((country) =>
    country.includes('land')  // !country.includes('land')
)
console.log('filter :', countriesWithLand)

// reduce return string or number
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur) // => acc + cur, 5) //60
console.log(sum) // 55

const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld) // "Hello world !"

//find return element first find

const firstEvenNum = numbers.find((n) => n % 2 === 0)
console.log('firstEvenNum find: ', firstEvenNum) // 0

const countriesWithWay = countries.find((country) => country.includes('way'))//country.length ==6)
console.log('first country find: ', countriesWithWay)

// findIndex return index first find

const indexCountriesWithWay = countries.findIndex((country) => country.includes('way'))//country.length ==6)
console.log('first country find index: ', indexCountriesWithWay)

// some return boolean

const evens = [0, 2, 4, 6, 8, 10]
const numSome = [0, 1, 2, 4, 6, 8, 10]
const someAreEvens = evens.some((n) => n % 2 === 0)
const someAreOdds = evens.some((n) => n % 2 !== 0)
const someAreOddsN = numSome.some((n) => n % 2 !== 0)
console.log(someAreEvens) // true
console.log(someAreOdds) // flase
console.log(someAreOddsN); // true
const allAreEvens = evens.every((n) => n % 2 === 0)
const allAreOdds = evens.every((n) => n % 2 !== 0)
const allAreOddsN = numSome.every((n) => n % 2 !== 0)
console.log(allAreEvens); // true 
console.log(allAreOdds); // flase
console.log(allAreOddsN); //false 

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: 2 },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 2 },
]

products.forEach((product) => {
    console.log(product.price)
})

products.forEach((product) => {
    console.log('The price of ' + product.product + ' is ' + product.price + ' euros.')
})

var sumPrice = 0
products.forEach((product) => {
    sumPrice = sumPrice + product.price
})
console.log('Sum price = ', sumPrice, 'euros.')

const priceMap = products.map((product) => product.price)
console.log('priceMap map : ', priceMap);

const priceFilter = products.filter((product) => product.price > 0)
console.log('priceMap map : ', priceMap);

const priceReduce = products.reduce((sum, product) => {
    return sum + product.price
},0)
console.log(priceReduce);