//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i< Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        Object.values(person3)[i].forEach(x => console.log(x))
    }else{
        console.log(Object.values(person3)[i])
    }
}




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = function(){
        console.log(`This is ${this.name}, and ${this.name} is ${this.age} years old!`)
        return "Returned Value"
    }
    addAge=() => {
        return this.age += 1;    
    }
    addAge3=() =>{
        return this.age += 3;
    }
}

let myPerson = new Person("Dominic", 22)
let myPerson2 = new Person("Defne", 21)

myPerson.printInfo()
myPerson2.printInfo()

myPerson.addAge()
myPerson.printInfo()

myPerson2.addAge3()
myPerson2.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const wordLength = str => {
    return new Promise( ( yessir, nosir)=>{
        str.length > 10 ? yessir(true): nosir(str)
    })
}

wordLength('Dominic is a big word')

.then( ()=>{
    console.log(`"Big Word"`)
})

.catch( () =>{
    console.log(`"small word"`)
})