console.log("Ajax in video");

let fetchbtn = document.getElementById('fetchbtn');
let backupbtn = document.getElementById('backupbtn');

function buttonClickHandler() {
    console.log("You have clicked the fetchbtn");

    // instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object  
    xhr.open('GET', 'ajax.txt', true);

    // what to do on progress
    xhr.onprogress = function () {
        console.log("On progress...");
    };

    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log("Response from ajax.txt:");
            console.log(this.responseText);   
        } else {
            console.log("Error: " + this.status);
        }
    };

    // handle network errors .onerror function
    xhr.onerror = function () {
        console.log("Request failed.");
    };

    // send the request
    xhr.send();
}
