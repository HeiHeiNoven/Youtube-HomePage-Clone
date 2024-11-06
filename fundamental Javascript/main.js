// Log a statement using a console.log()
//console.log('This is main.js')

// Variables
//let age = 20
//console.log(age)

//const salary = 50000
//console.log(salary)

//Primitive data type

//const language = "JavaScript"
//const channel = `Codevolution`

//const PI = 3.14
//const number = 0
//
//const isPrimaryNumber = true
//const isNewUser = false
//
//let gender
//console.log(gender)
//const name = 'Noven'
//
//const color = undefined
//const data = null
//
////non-primitive data type
//
//const person = {/
//'firstname' : 'Noven',/
//'lastname' : 'Qin',/
//'age' : 20,/
//}
//console.log(person.lastname)

//const OddNumbers = [1, 3, 5, 7, 9]
//console.log(OddNumbers[3])

////Operators

//let x = 10
//let y = 5

//console.log(x % y)
//console.log(++x)
//console.log(--y)
//
//console.log(x >= y)
//
//const isValidNumber = x > 20 || 8 > y;
//console.log(isValidNumber)
//
//const isValid = true
//console.log(!isValid)
//
//console.log('Bruce ' + 'Wayne')
//
//const isEven = 10 % 2 === 0 ? 'Number is odd' : 'Number is even'
//console.log(isEven)

//console.log(true+'4')
//console.log(5- null)
//console.log('Bruce' - 'Wayne')
//console.log(5+undefined)

//console.log(String(true))
//console.log((54).toString())
//console.log(parseFloat('5'))
//console.log(Boolean(20)) //Null, Undefined, NaN, 0, '' will all return false

//Equality!!!!
//const Var1 = 'test'
//const Var2 = 'test'
//console.log(Var1 == Var2)
//console.log(Var1 === Var2//)
//
//

//const color = true
//switch (color) {
//case 'red': console.log('Color is red')
//break
//case 'blue': console.log('Color is blue')
//break
//case 'green': console.log('Color is green')
//break
//default:console.log('Not a valid color')
//}

//const num = 10
//if (num > 0) {
//console.log('Number is positive')
//} else if (num < 0) {
//console.log('Number is negative')
//} else {
//console.log('Number is 0')
//}

//Looping code!!!!!
//1)for loop 2)while loop 3)do..while loop 4)for..of loop

//for (let i = 1; i <= 5; i++){
//   console.log('Iteration number'+i)
//}

//let i = 1
//while (i <= 5) {
//console.log('Iteration number' + i)
//i++
//}

//const numArray=[1, 2, 3, 4, 5]
//
//for (const num of numArray) {
//console.log('Iteration number' + num)
//}

//Function!!!!!!!
//function greet(Username) {
  //console.log('Good morning '+Username);
//}
//
//greet('David');
//greet('Noven');
//greet('Michael');
//
//function add(a, b) {
    //return a+b
//}
//
//const arrowSum = (a, b) => a + b
//const addfive = num => num+5
//
//
//const sum= arrowSum(24,24)
//console.log(sum)

//Scope!!!!!!!!!
const myNum=100

if (true) {
    const myName = "Noven";
    console.log(myName);
    console.log(myNum)
}

function testFn() {
    const myName = 'Nippy';
    console.log(myName);
    console.log(myNum)
}

testFn()



