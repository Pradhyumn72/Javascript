let a = confirm("Do you want to see the numbers from 1 to 10?");

function numbers() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    return result;
}
if (a) {
    alert(numbers())
}
else{
    alert("You canceled the action")
}

