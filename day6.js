let a =" This is string Is 1              <br>";
let b =" Hello str 2 <br>";
// string methods
// length(): len of string
// slice(): elements b/w two indexes of str 
//split(): converts str to array
// replace();replaces text wiht str
// concat(): combines text of 2 str
//substring(): returns elements b/w two strings 
//toLowerCase():
// toUpperCase()
//trim; removes leading and traiiling white space and line terminator char

console.log("<br>"+a.length);
console.log("<br>"+a[2]+ b[5]);
document.write("<br>"+a + b); // concatanation
document.write("<br>"+b.toUpperCase());
document.write("<br>"+b.toLowerCase());
// document.write("<br>"+ b.charAt(5));
// document.write("<br>" + a.charCodeAt(4))//ASCII value

document.write("<br>"+a.slice(0,5)); // slice
document.write(b.replace("Hello","Helllo")) ;//replace
document.write(a.replaceAll("is","ok")); //replace all
document.write(b.replace(/str/g,"var")) // repalce using g => converting it into a global variable
document.write(a.replace(/string/gi,"integer")) // gi makes the string case insensitive 
document.write(a.trim());

//split()
let spl1="Con-cert i-t int-o arr-ay";
console.log(spl1.split("-"))

let arr1=[2,4,6,8]; // array formation ....array- collection of same or different datatypes

