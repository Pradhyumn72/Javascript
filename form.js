let Val= () =>{
    let inpname= document.querySelector("#name").value;
    let errorname=document.querySelector("#errorname")
    if(inpname==""){
        errorname.innerHTML="pls enter ur name";
        return false; // this stops refreshing of forms 
    }
    else if(is===){
        errorname.innerHTML="pls enter text only"
    }
    
    let inpnumber= document.querySelector("#number").value;
    let errornumber=document.querySelector("#errornumber")
    if(inpnumber==""){
        errornumber.innerHTML="pls enter ur number";
        return false;  
    }
    else if(isNaN(inpnumber)){
        errornumber.innerHTML="pls enter number"
        return false
    }

    else if(inpnumber.length!=10){
        errornumber.innerHTML="no should of 10 digits";
        return false;
    }
    
    let inpemail= document.querySelector("#email").value;
    let erroremail=document.querySelector("#erroremail")
    if(inpemail==""){
        erroremail.innerHTML="pls enter ur email";
        return false;  
    }
    else if(inpemail.includes("@") && inpemail.includes(".com")) // checking for the conditons of inclusion of characters
        {
        erroremail.innerHTML="include proper domain"
        return false
    } 

    let inppassword= document.querySelector("#password").value;
    let errorpassword=document.querySelector("#errorpassword")
    if(inppassword==""){
        errorpassword.innerHTML="pls enter ur pass";
        return false;  
    }
    
}