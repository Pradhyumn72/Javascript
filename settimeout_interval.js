// // settimeout makes asynchronous 
// syntax:
//it helps us to delay a code with a specific time duration
//  setTimeout(function,delay); 
//  setTimeout(()=>{ 
//     console.log("hello");
//  },2000)

//  console.log("bye")


//  hi=()=>{
//     setTimeout(()=>
// console.log("hi bunny")
//     ,3000)
//  }

// setinterval
//  a =0;
// let pro;
// let show=document.querySelector("#dis")
//  air= ()=>{
//   pro=  setInterval(()=>{
//        show.innerHTML=a;
//        a++  
       
//     },2000)

//  clear interval

// let stopp=()=>{
// //     clearInterval(pro)
// // }
let count=0;
let a;
let air =()=>{
    
a= setInterval(() => {

        count++ ;
        if (count==9){
            clearInterval(a)
        }
        a.innerHTML="a";
}, 7000);
    

       
}
