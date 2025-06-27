// // var a =17;
// // var b = 9;
// // console.log("the sum of " + a + " and " + b + " is " +(a+b));


// // function intro(){
// //     var a =7;
// //     var b=2;
// //     console.log(a+b);
// //     console.log(typeof(a));
// //     console.log(typeof(b));
// //     console.log(a-b);
// //     console.log(a*b);
// //     console.log(a/b);
// // }
// // intro();


// //scope - block scope....
// function my(){
//     let a =19;
//     console.log(a);

// // block declare
//     {
//         let a =90;
//         console.log(a);
//     }
// }
// my();



// // redeclaration possible in var but not in let&const
// // reassignment possible in var & let but not in const
// // var a=6;
// // a=7;
// // let c=9;
// // c=5;
// // const d =4;
// // d=2;

// // console.log(a);
// // console.log(c);
// // console.log(d);

// //hoisting 
// // console.log(a);
// // var a =6;
// // output: undefined
// //here only var reaches the top of the function...value of var a doesn't reaches the top ...

// console.log(a)
// let a =7;
// // output: error will be displayed
// var x=9;
// var h="8";
// console.log(h+x);

const obj1 = {name:"John",age:30}
const obj2 = Object.assign({}, obj1);
const obj3={...obj1}
console.log(obj2);
console.log(obj3);
console.log(obj1);