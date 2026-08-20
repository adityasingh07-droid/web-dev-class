// console.log("hello")
// var a =23;

// if(a=10){
// var a = 45;
// console.log("Value of a =" ,a);

// }
// console.log("Value of a outside of if = ",10)




// function sum(a,b){
//     return a + b;
// }
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,20));
// }
// sumofsum();
// function generateNumbers(){
//     return Math.random()*1000;
// }
// const randomNumbers= generateNumbers();
// console.log(randomNumbers);
// function generateNumbers(){
//     return Math.floor(Math.random()*1000);
// }
// const randomNumbers= generateNumbers();
// console.log(randomNumbers);

// function generateNumbers(){
//     return Math.floor(Math.random()*1000);
// }
// const randomNumbers= generateNumbers();

// function findEvenNumbers(){
//     if(randomNumbers%2==0){
//         console.log("Even Number");
//     }
//     else{
//         console.log("Odd Number");
//     }
// }
// findEvenNumbers();
// console.log(randomNumbers);
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result=clbk(20,40);
//     return msg+result;
// }
// console.log(sumWithMsg(sum,"The sum is:"));function login(msg,error){
//    function login(msg,error){
//     if(error){
//         console.log("Error: " +error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginHandler(username,password,clbk){
//     const myUsername="Prompt40";
//     const myPassword="12345";
//     if(username==myUsername && password==myPassword){
//         clbk("Login successful", false);
//     }
//     else{
//         clbk(null, "Username or password is incorrect");
//     }
// }
// loginHandler("Prompt40","12345",login);
// setTimeout(() => {
//     console.log("ONE");
//     setTimeout(() => {
//         console.log("TWO");
//         setTimeout(() => {
//             console.log("THREE");
//             setTimeout(() => {
//                 console.log("FOUR");
//                 setTimeout(() => {
//                     console.log("FIVE");
//                     setTimeout(() => {
//                         console.log("SIX");
//                         setTimeout(() => {
//                             console.log("SEVEN");
//                             setTimeout(() => {
//                                 console.log("EIGHT");
//                                 setTimeout(() => {
//                                     console.log("NINE");
//                                     setTimeout(() => {
//                                         console.log("TEN");
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// function sumOfSqrt(n){
//     let sum =0;
//     for(let i=1; i<=n;i++){
//         sum += Math.sqrt(i);
//     }
//     return sum;
// }
// console.log(sumOfSqrt(5));

// function sumOfSqrt(name, a, b) {
//     let sum = Math.sqrt(a) + Math.sqrt(b);
//     console.log("Name = ",name + " & sum of square roots =", sum);
// }

// sumOfSqrt("Aditya", 25, 36);
const myPromise = new Promise((resolve, reject) => {
    let username = "aditya7";
    let password = "12345";

    if (username === "aditya7" && password === "12345") {
        resolve("success");
    } else {
        reject("Invalid user");
    }
});

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=>console.log("All resource has been closed")) 

async function loginHandler(){
    try{
         const loginStatus=await myPromise;
         console.log(loginStatus)
    }catch(e){
        console.log(e)
    }finally{
       console.log("closing all the open resources...")
    }
}
     loginHandler();   
    