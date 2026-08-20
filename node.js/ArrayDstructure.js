// const num=["Hello",12,false,45.23]
// // const a = num[0];
// const[a,b,c,d]=num;// array destructure
// console.log(a,b,c);
// const array= ["JS","Maths","CPP","JAvA","C"]


// const[a,b,c,d,e]=array;
// console.log(a,b,c,d,e);
// const num1 = [1,2,3];
// const num2 = [4,5,6];
// const finalNum=[num1,num2];
// console.log(finalNum);
// function sum(finalNum){
//     return finalNum;
// }; 

// console.log(a);

//understanding the concept of push()
//unshift(),pop(),shift(),splice(),map(),reduce() and 
const a = [2,11,12,13]
console.log(a);
a.push(30);
console.log(a);
a.shift(1);
console.log(a);
a.unshift(5);
console.log(a);
a.splice(1,0,50);
console.log(a);
a.splice(2,1);
console.log(a);
a.splice(0,1,30)
const num=[11,12,13]
num.map((e)=>e+1);
console.log(num);
const b= num.filter((e)=>e<14);
console.log(b);
const r = a.reduce((p,c)=>
    {
        return p+c;

    });
console.log(r);
