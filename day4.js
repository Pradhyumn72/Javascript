function mac(){
    //BOM

    // window.alert("Are you sure you want to continue?"); //
    //window.confirm("proceed"); // response ..if ok ..at backend true ...similarly false ..if cancel
   // window.prompt("do you want to proceed"); // want to take a  response 


    //  let confirmn=confirm(5+7);
    //  console.log(confirmn);
    // showing input taken from prompt ..and then showing the message by the help of alert
    // let a=Number(prompt("enter no.1 "));
    // let b =Number(prompt("enter no.2 "));
    // let c =Number(alert(a+b));



    // whenever we want input from the user in box window ...use prompt
    // let ans = confirm("Do you like my website");

    // if(ans){
    //     alert("Thanks for your feedback");
    // }
    // else{
    //     alert("back off");
    // }

//task1
// let d= parseInt(prompt("enter your age"));
// (d>=18)? alert("you are eligible to drive"):alert("you are not eligible");

//task2
// let a=confirm("have you completed course ?");
// if(a){
//     let b=confirm("have you completed certificate ?");
// if(b){
//     alert("course completed");
// }
// }
// else{
//     alert("not completed");
// }


//task3
// let a =prompt("enter price of the product");
// let b =confirm("you have a discount coupon?");
// if (b){
//     alert(a-0.1*a);
// }
// else{
//     alert("discount not applicable");
// }

//task4
// let a =prompt("enter your exam score ");
// if(a>33){
//     alert("you have passed the exam");
// }
// else{
//     alert("failed");
// }

//task 5
// let a =parseInt(prompt("enter a number"));
// if(a%2==0){
//     alert("even number");
// }
// else{
//     alert("odd number");
// }

// task 6
// let a = confirm("are you sure want to delete ");
// if (a){
//     alert("item deleted")
// }
// else{
//     alert("cancelled")
// }

//task7 




// task 8 & 9 

// let a =0;
// while (a<=10){
//     alert(a);
//     a++;

// }


// task 10

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

mac()