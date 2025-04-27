let air = () => {
let inpname= document.querySelector("#inpname").value;
let errorname=document.querySelector("#errorname");
let inpemail=document.querySelector("#inpemail").value
let erroremail=document.querySelector("#erroremail")

if(inpname==""){
    errorname.innerHTML="pls enter ur name";
    return false;  
}
else if(is===""){
    errorname.innerHTML="pls enter text only"
}


if(inpemail==""){
    erroremail.innerHTML="pls enter ur email";
    return false;  
}
else if(inpemail.includes("@") && inpemail.includes(".com")) 
    {
    erroremail.innerHTML="include proper domain"
    return false
} 
}