let intervall;
let setalarm=()=>{
    let usertime=document.querySelector("#usertime").value
    let show =document.querySelector("#show")
    let audioo=document.querySelector("#audio")
    setInterval((e)=>{
        let Time=new Date()
        let AlarmTime=`${Time.getHours().toString().padStart(2,"0")}:${Time.getMinutes().toString().padStart(2,"0")}`
    if(AlarmTime==usertime){
     show.innerHTML="⏰ Alarm is ringing"
     audioo.play()
     clearInterval(intervall)
    }
    else{
        show.innerHTML="Alarm is set"
        
    }
    },4000)
 
   
}