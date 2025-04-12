let Val= () =>{
    let inpname= document.querySelector("#name").value;
    let errorname=document.querySelector("#errorname")
    if(inpname==""){
        errorname.innerHTML="pls enter ur name";
        return false; // this stops refreshing of forms 
    }
    let inpnumber= document.querySelector("#number").value;
    let errornumber=document.querySelector("#errornumber")
    if(inpnumber==""){
        errornumber.innerHTML="pls enter ur number";
        return false;  
    }
    let inpemail= document.querySelector("#email").value;
    let erroremail=document.querySelector("#erroremail")
    if(inpemail==""){
        erroremail.innerHTML="pls enter ur email";
        return false;  
    }
    let inppassword= document.querySelector("#password").value;
    let errorpassword=document.querySelector("#errorpassword")
    if(inppassword==""){
        errorpassword.innerHTML="pls enter ur pass";
        return false;  
    }
    
}