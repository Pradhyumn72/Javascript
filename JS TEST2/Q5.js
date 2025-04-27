let air1=[{
    name:"Bitti",
    age:29,
    city:"Bhubaneshwar"

},
{
    name:"Rohit",
    age:24,
    city:"California"
},
{
    name:"Rachin",
    age:34,
    city:"Mexico"
},
{
    name:"Steve",
    age:35,
    city:"Oslo"
},
{
    name:"Amar",
    age:15,
    city:"Manglore"
}]

let show=document.querySelector("#pro")

air1.map((e)=>{
    show.innerHTML+=`
   <tr>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td> ${e.city}</td>
    </tr>
    
    `
})