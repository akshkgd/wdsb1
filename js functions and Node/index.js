// function generateOtp(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//        result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//  }



function generateOtp() {
    let otp = Math.floor(Math.random()*10000);
    console.log(otp);
 }

let users = [
    {name: 'John', email: 'jhon@gmail.com'},
    {name: 'Jane', email: 'jane@gmail.com'},
    {name: 'Jack', email: 'jack@gmail.com'},
    {name: 'Jill', email: 'jill@gmail.com'},
    {name: 'Joe', email: 'joe.gmail.com'},
    {name: 'ale X', email: 'alex@gmail.com'},
    {name: 'ale Y', email: 'aley@gmail.com'},
    {name: 'ale z', email: 'alez@gmail.com'}
];

function randomUser(){
    let totalUsers = users.length;
    console.log("total users: " + totalUsers);
    let randomUser = Math.floor(Math.random()*totalUsers);
    return randomUser
}
let randomUserIndex = randomUser();
console.log("random user index: " + randomUserIndex);
console.log(users[randomUserIndex].name);



// arrow function es6


function sqr(num){
    console.log("Square of " + num +" is " +num*num);
}

// arrow function
cube = (num) => console.log("Cube of " + num +" is " +num*num*num);


sqr(5);
cube(7)


// loop for

// let number = prompt("Enter a number");
// for (let i = 1; i <= 10; i++){
//     console.log(i*number);
// }

let hobby = ["cricket", "football", "hockey", "tennis", "badminton", "dancong", 'coding'];
console.log(hobby.length);

