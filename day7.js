//============= `` template literals==============0


//use 1
let a =alert(`Hello i am "sid" and i am from 'Bhopal' `);// `` act as "" and hence we can use "" in the sentence with ``

// use 2 : supports multiline strings
let b =alert(`hey marry!
    how are you ?`);

// use 3 : we can use html tags using backtick
let c = (`<h1>Hey Sid</h1> 
    you teach <b>JS</b> 
    right?`);
    document.write(c);


// use 4 : used for inserting variables

let name = "Maddy";
let age = 19;

let intro=`hello everyone i am ${name} and my age is ${age}`;
document.write(intro);


