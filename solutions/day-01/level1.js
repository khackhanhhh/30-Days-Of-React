// 12 , 14
const arr1 = []

const arrlength = [1,2,3,4,5,6,7]
    console.log('arr length: ' , arrlength.length)
    console.log('arr first: ' , arrlength[0])
    const end = arrlength.length-1
    console.log('arr end: ' , arrlength[end])
    const middle = end/2
    console.log('arr middle: ' , arrlength[middle])

const MixedDataTypes = 
    [
        1,
        "Khanh",
        20,
        "Student",
        "Quang Nam",
        true,
    ]

let itCompanies = 
    ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
    let OCompanies = []
    for(let i=0;i<itCompanies.length;i++){
        if( itCompanies[i].lastIndexOf('o') != itCompanies[i].indexOf('o')){
            OCompanies.push([itCompanies[i]])
        }
    }
    console.log('OCompanies: ',OCompanies)
    console.log('String :',itCompanies.toString(),'are big IT companies.')
    console.log('itCompanies: ',itCompanies)
    console.log('itCompanies length: ',itCompanies.length)
    console.log('itCompanies first: ' , itCompanies[0])
    const endCompanies = itCompanies.length-1
    console.log('itCompanies end: ' , itCompanies[endCompanies])
    const middleCompanies = end/2
    console.log('itCompanies middle: ' , itCompanies[middleCompanies])

    console.log('itCompanies split: ',itCompanies.toString())

    itCompanies = itCompanies.map(function (e) { 
        return e.toUpperCase()
    });
    console.log('itCompanies UpperCase: ',itCompanies.toString())

    console.log("Sort : ",itCompanies.sort())

    console.log("Reverse : ",itCompanies.reverse())

    const coppyIT = itCompanies.slice()
    console.log("Coppy arr: ", coppyIT)

    const coppyIT2 = itCompanies.slice()
    console.log("Coppy arr: ", coppyIT2)

    coppyIT.splice(middleCompanies,1)
    console.log("Delete middle: ", coppyIT)

    coppyIT.splice(endCompanies-3,3)
    console.log("Delete 3 element end: ", coppyIT)

    coppyIT.splice(0,3)
    console.log("Delete 3 element first: ", coppyIT)

    coppyIT2.splice(middleCompanies,1)
    console.log("Delete element middle: ", coppyIT2)

    coppyIT2.splice(0,1)
    console.log("Delete element first: ", coppyIT2)

    const endCompanies2 = coppyIT2.length-1
    coppyIT2.splice(endCompanies2,1)
    console.log("Delete element end: ", coppyIT2)

    coppyIT2.splice(0,coppyIT2.length)
    console.log("Delete all: ", coppyIT2)

    const company = itCompanies.includes("APPLE");
    if(company===true){
        return console.log("Find by includes : ","Apple")
    } else {
        return console.log("Find by includes : ","Not found")
    }

