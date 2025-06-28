// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "NIKHIL",
    "full name": "Nikhil Kumar",
    [mySym]: "mykey1", // ([] for using in symbol type) ** for interview 
    age: 18,
    location: "Jaipur",
    email: "nikhil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // another type accessing objects
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "nikhil@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nikhil@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //String interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());