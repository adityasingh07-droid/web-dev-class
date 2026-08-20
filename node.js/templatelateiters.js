// const hello = (uname ="User")=>{
//     console.log('hello Mr/Mrs  &{uname}');
// };hello();
//default value  assign
//Another es6 advanced way for assigning value is Short circuit
// const Hello=(uname)=>{
// uname= uname||"user"//short circuit
// console.log('hello Mr/Ms ${uname}');

// };Hello();
// Hello("Aditya");
const emp = {
    uname: "Sonu",
    email: "abc@gmail.com",
    age: 20,
    "last login": "11 Feb"
};

// object destructuring
const { uname ,email, age } = emp;
emp.uname="Monu"
console.log(uname,email, age);
