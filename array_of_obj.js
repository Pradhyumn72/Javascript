// accessing the data

let arr1=[{
    name:"Bunny",
    age:23,
    city:"Bhopal"

},
{
    name:"Ash",
    age:24,
    city:"Boston"
},
{
    name:"Ravindra",
    age:24,
    city:"Barcelona"
},
{
    name:"Vikas",
    age:25,
    city:"Madrid"
},
{
    name:"Akash",
    age:35,
    city:"Munnar"
}]
console.log(arr1[0].city);
// console.log(arr1[1].name);
// console.log(arr1[2].age);
// console.log(arr1[3].city);
// let show=document.querySelector("#datashow")

arr1.map((e)=>{
    show.innerHTML+=`
   <tr>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td> ${e.city}</td>
    </tr>
    
    `
})