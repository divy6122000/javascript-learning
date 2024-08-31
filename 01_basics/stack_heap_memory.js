// primitive datatype -> number, dtring, boolean, null, undefined, bigInt, symbol
// Note: store in stack memory

let name = 'Divy';
anotherName = name
anotherName = 'Divy modi'

console.log(name);
console.log(anotherName);

// non primitive datatypes (referance) -> array, object, function
// Note: story in heap memory

const userOne = {
    name:'Divy',
    email:'divy123@gmail.com'
}

// const userTwo = JSON.parse(JSON.stringify(userOne))  //Deep Copy
// userTwo.email = "this@this.com" // both are referance same so change both object value
// console.log(userOne);
// console.log(userTwo);

const userTwo = {...userOne} //Shallow Copy
userTwo.email = "this@this.com"

console.log(userOne);
console.log(userTwo);




