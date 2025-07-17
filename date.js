// digital clock
let seconds=document.querySelector("#seconds");
let milli =document.querySelector("#milli");
setInterval(() => 
{
    let Mydate=new  Date()
let hours=document.querySelector("#hours");
    hours.innerHTML=`${Mydate.getHours()} hours ${Mydate.getMinutes()}minutes ${Mydate.getSeconds()} seconds   ${Mydate.getMilliseconds()} ms`
}, 7000);
// a =console.log(1000+Math.round(Math.random()*9000));





// console.log(Mydate.toLocaleString()); // converts obj to readable string
// console.log(Mydate.getFullYear()); // year
// console.log(Mydate.getMonth()+1);
// console.log(Mydate.getHours()); 
// console.log(Mydate.getDay());

// getting day name printed
// let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]
// console.log(days[Mydate.getDay()]);


