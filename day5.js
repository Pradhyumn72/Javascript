function mac() {


let a =Number(prompt("enter a number"));
switch(a){
    case 1:
    alert("Monday");
    break
    case 2 :
        alert("Tuesday");
        break
        case 3 :
            alert("wednesday");
            break
        case 4 :
            alert("thursday");
            break
        case 5 :
            alert("friday");
            break
        case 6 :
            alert("saturday");
            break
        case 7 :
            alert("sunday");
            break
            default:
                alert("invalid")
}

}

// for button function appearing..do not call function in js file
function book(){
    let e =(prompt("Enter your city of residence"));
    if(e=="Bhopal" || e==="bhopal"){
        alert("You can go to cybrom");
    }
    else if(e=="Indore" || e==="indore"){
        alert("You can go to codethinker");
    }
    else {
        alert("Enter any city of mp");
    }
}


function venue(){
    let r =prompt(("Enter the name of the faculty"));
    if (r=== "Sid" || r==="sid"){
        alert("Proceed to think digital lab");
    }
    else if(r=== "Vikas Sarkar" || r==="vikas sarkar"){
        alert("Proceed to magic brick");
    }
    else if (r=== "Vikas" || r==="vikas"){
        alert("Proceed to cyber geek")
    }
    else{
        alert("wrong input");
    }
}