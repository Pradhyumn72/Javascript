// let text="this is a string"
// let fruits=["Bunny",25,"Bhopal"];

// let obj ={
//     // key:value
//     Name:"Bunny",
//     Age:25,
//     City:"Bhopal"

// }
// console.log(obj); //to print full obj
// console.log(obj.Age)// to print any specific key 
// obj.college="VIT"; // to insert an object
// console.log(obj)
// obj.Age=28; // editing the existing key
// console.log(obj);
// delete obj.City; // for deleting the object
// console.log(obj)

// destrucutring : a way of unpacking values from objects into variables
// makes code better cleaner and easier to read
// allows quick access to object properties
// let student={
//     name:"john",
//     age:20,
//     city:"indore"
// }

// let {name,age} = student;
// console.log(name);
// console.log(age);

// Spread Operator: it is used to spread the elements of an object or array another object or array
// uses : merge objects or arrays
// copy exisitng objects/arrays into a new one

// let stu1={
//     name:"Jack",
//     age: 30
// }
// let stu2={
//     city:"Bhopal",
//     grade:"A"
// }

// // combining objects
// let comstu={...stu1, ...stu2};
// console.log(comstu);

let p1=document.querySelector("#para")
let okk=() =>{
    if(p1){
        p1.style.display="none"
    }
    else {
        p1.style.display="block"
}

}