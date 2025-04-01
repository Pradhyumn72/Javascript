function mac(){
    //BOM

    // window.alert("Are you sure you want to continue?"); //
    // window.confirm("proceed"); // response ..if ok ..at backend true ...similarly false ..if cancel
    // window.prompt("do you want to proceed"); // want to take a  response 


    // let confirmn=window.confirm("Are you okay?");
    // console.log(confirmn);
    // showing input taken from prompt ..and then showing the message by the help of alert
    // let message= prompt("how was your day?");
    // alert(message);



    // whenever we want inpur from the user in box window ...use prompt
    let ans = confirm("Do you like my website");

    if(ans){
        alert("Thanks for your feedback");
    }
    else{
        alert("back off");
    }

}
mac()