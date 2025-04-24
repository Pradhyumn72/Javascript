senddata=()=>{
    // localStorage.setItem("Name","Bunny")
    // localStorage.setItem("Age",25)
    // localStorage.setItem("Email","air@gmail.com")
    // localStorage.setItem("Name","Ram")
    // localStorage.setItem("Age",26)
let a=document.querySelector("#name").value
let b=document.querySelector("#age").value
let c =document.querySelector("#email").value
localStorage.setItem("Name",a)
localStorage.setItem("Age",b)
localStorage.setItem("email",c)


    location.reload() // page can be refreshed
}

// let show=document.querySelector("#Show")
// show.innerHTML=localStorage.getItem("Name")

removedata=()=>{
    // localStorage.removeItem("Email")
    localStorage.clear()

    location.reload() 
}