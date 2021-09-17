// var name = 'Max';
// //var is outdated, use 'let'

// console.log(name);
// let age = 29;
// let hasHobbies = true;

// // function summarizeUser(userName, userAge,userHasHobby){
// //     return 'Name is' + userName + ', age is ' + userAge + 
// //     ' and the user has hobbies: '+ userHasHobby;

// // }



// //'const' is used when you never plan on changing values
// // use 'let' when you plan on possibly changing variable

// //rewrite the above function as an arrow function
// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return (
//          'Name is' + userName + ', age is ' + userAge + 
//         ' and the user has hobbies: '+ userHasHobby);
    

// };

// //const add= (a,b) => 
//    // a + b;
// const addOne=(a) => a+1;


// //console.log(add(1,2));
// console.log(addOne(1));
// console.log(summarizeUser(name, age, hasHobbies)); 

//OBJECTS
//person is the object
// //name: Max and age:28 are our key/value pairs
const person = {
    name: 'Max',
    age: 28,
    greet() {
        //'this' refers to the surrounding Object
        //this. accesses properties or methods/variables or functions inside
        //of the Object
        console.log('Hi, I am ' + this.name);
    }
};

// person.greet();

// //console.log(person);

// //ARRAYS
// //can use combo of strings, numbers and booleans in same array
//  const hobbies = ['Sports', 'Cooking', 1, true];
// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }

// //original array created
// console.log(hobbies);
// // //.map will edit your array
// // //here we are adding the string 'Hobby: ' before each array item
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// //adding to an array:
// hobbies.push('Programming');
// console.log(hobbies);

// //Rest & Spread Operators
// //inmmutability: creating a copy of original array, along with new additions
// //slice copies an array
// const copiedArray = hobbies.slice();
// //a new array insdie of the original array (nested array)
// const copiedArray2=[hobbies];
// //Spread Operator will 'pull out' items from array named after the ... operator
// const copiedArray3 = [...hobbies];

// //not flexible to add more arguments
// const toArray = (arg1, arg2, arg3) =>{
//     return [arg1, arg2, arg3];
// };

// console.log(toArray(1, 2, 3));
// //Rest operator will take all the arguments mentioned in the console
// const toArray = (...args) =>
// { return args;};
// console.log(toArray(1, 2, 3, 4, 5, 6));

//Destructuring 

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

//destructre the object 'person'
//just makes the code more 'English' to understand what variable you are pulling 
const printName = ({ name }) => {
    console.log(name);
}
printName(person); 
const { name, age } = person;
//these new variables are from the destructering of the object, person
console.log(name, age);

//destructuring arrays
const hobbies = ['Sports', 'Cooking'];
let [hobby1, hobby2] = hobbies;
console.log(hobby2, hobby);


