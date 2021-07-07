a = 3
if (a>2){
    console.log(a,'is a window scope, found anywhere');
    a--
}
console.log(a,'is a window scope');

var i = "var 1"
let j = "let 1"


i = "var"
j = "let" 

console.log("Change var let: ",i + " " + j);

var i = "Var"

// J had exist
// let j ="Let" 

console.log("Khai bao var oke, let error :" ,i + " " + j);

if(true){
    var k = 3
    var i = "var function"
    let j = "let function"
    console.log("Var let in Block Oke : " + i + " " +j)
} 
console.log("Var let in Class after block (var change and let don't change) : " +i + " "+j + " "+ k)
// var in function will not use in out block.