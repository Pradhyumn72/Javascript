let text="this is a string"
let fruits=["Bunny",25,"Bhopal"];

let obj ={
    // key:value
    Name:"Bunny",
    Age:25,
    City:"Bhopal"

}
console.log(obj); //to print full obj
console.log(obj.Age)// to print any specific key 
obj.college="VIT"; // to insert an object
console.log(obj)
obj.Age=28; // editing the existing key
console.log(obj);
delete obj.City; // for deleting the object
console.log(obj)


