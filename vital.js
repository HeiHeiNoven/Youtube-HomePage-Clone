//let a = 10
//function outer() {
    //let b = 20
    //function inner() {
        //let c = 30
        //console.log(a,b,c)
    //}
    //inner()
//}
//outer()
//outer()

//function outer() {
    //let counter = 0
    //function inner() {
        //counter++
        //console.log(counter)
    //}
    //return inner
//}
//const fn=outer()
//fn()
//fn()

//function sayMyName(name) {
    //console.log('My name is ${name}')
//}
//sayMyName('Noven')

//implicit binding!!!!!!!

//function Person(fName, lName) {
    //this.firstName = fName
    //this.lastName = lName
//}
//
//const person1 = new Person('Bruce', 'Wayne')
//const person2 = new Person('Clark', 'Kent')
//
//Person.prototype.getFullName = function () {
    //return this.firstName + ' ' + this.lastName
//}
////console.log(person1.getFullName())
////console.log(person2.getFullName());
//
//function Superhero(fName, lName) {
    ////this = {}
    //Person.call(this, fName, lName)
    //this.isSuperhero = true
//}
//
//Superhero.prototype.fightCrime = function (){
    //console.log('Fighting Crime')
//}
//
//Superhero.prototype = Object.create(Person.prototype)
//
//const batman = new Superhero('Bruce','Wayne')
//Superhero.prototype.constructer = Superhero
//console.log(batman.getFullName())

class Person{
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }
 
    sayMyName() {
        return this.firstName + ' ' + this.lastName
    }
}
const class1 = new Person('Bruce', 'Wayne')
console.log(class1.sayMyName())

class Superhero extends Person{
    constructor(fName, lName){
        super(fName, lName)
        this.isSuperHero = true
    }
    fightcrime() {
        console.log('Fighting crime')
    }
}

const batman = new Superhero('Bruce', 'Wayne')
console.log(batman.sayMyName())
