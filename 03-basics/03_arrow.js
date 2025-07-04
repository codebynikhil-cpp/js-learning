const user = {
    username: "Nikhil",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Raj"
// user.welcomeMessage()

// console.log(this);

// function chai(){  //fuction
//     let username = "Nikhil"
//     console.log(this.username);
// }
// // 
// chai()

// const chai = function () {  // normal function
//     let username = "hitesh"
//     console.log(this.username);
// }

// () => {} Arrow Fuction

// const chai =  () => { //Arrow function
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => { //Basic Arrow Function 
//     return num1 + num2 //Explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2  //Implicit return Arrow Function

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "NikhilKumar"}) //parenthesis for return string


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()