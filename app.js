//CHAPTER # 1//
document.write('<h1>CHAPTER # 01</h1><br>')

//Question # 01//

alert("Hey! What's up");

//Question # 02//

alert("Error! Please enter a valid password");

//Question # 03//

alert("Welcome to JS Land... \nHappy Coding!");

//Question # 04//

alert("Welcome to JS Land...");

alert("Happy Coding! \nPrevent this page from creating additional dialogs.");

//Question # 05//

alert("Hello...I can run JS through my web brower's console");

console.log("Hello...I can run JS through my web brower's console");

//Question # 06//

let btnShow = document.querySelector('button');

let str = "this is Hello world";

btnShow.addEventListener('click', () => {
  alert(str);
});

//CHAPTER # 02//
document.write('<h1>CHAPTER # 02</h1><br>')

//Question # 01//

let userName = "Aiman";
console.log(userName);


//Question # 02//

let myName = "Aiman Siddiqui";
console.log(myName);


//Question # 03//
let message = "Hello World";
alert(message);

//Question # 04//

let name = "Aiman Siddiqui";
alert(name);
let age = "19";
alert(age);
let course = "Course";
alert(course);

//Question # 05//

let pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

//Question # 06//

let emailMessage = "aimansiddiqui77254@gmail.com";
let email = "My email address is aimansiddiqui77254@gmail.com ";
alert(email);

//Question # 07//

let book = "A smarter way to learn Javascript";
let bookMessage = "I am trying to learn from the book A smarter way to learn Javascript";
alert(bookMessage);

//Question # 08//

// let document = "hey";
document.write('Yah! I can write HTML content through Javascript <br>');

//Question # 09//

let string = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(string);

//CHAPTER # 03//
document.write('<h1>CHAPTER # 03</h1><br>')
//Question # 01//

let myAge = 19;
alert("I am "+myAge+" year old");

//Question # 02//

let visitCount = localStorage.getItem('visitCount');
if (!visitCount) {
  visitCount = 0;
}
visitCount++;

localStorage.setItem('visitCount' , visitCount);

alert("You have visited this site " + visitCount + " times.");

//Question # 03//

let birthYear = 2004;
document.write ("My birth year is 1990 <br> Data type of my declared variable is number <br>");

//Question # 04//
let visitorName = "John Doe";
let productTitle = "T-shirts";
let quantity = 5;

document.write (visitorName +" "+ "ordered"+ " " + quantity + " " + productTitle + " (s) on XYZ Cloting store")


//CHAPTER # 04//

document.write('<h1>CHAPTER # 04</h1><br>')
// Question # 01//

let favouriteColor = "yellow";
let myWork = "Web developer";
let birthDate = "31";

console.log('My favourite color is ${favouriteColor} and i am a ${myWork} and I live in ${birthPlace}');

//Question # 02//
 //5 Legal Variable Names//

 let myVar = "hey";
 let _my_var = "Hey";
 let myvar = "Hey";
 let MYVAR = "Hey";
 let my_var = "Hey";

 //5 illegal Variable Names//

//  let my var = "hey";
//  let 2myvar = "hey";
//  let mY var = "hey";
//  let my vAR = "hey";
//  let my-var = "hey";

//Question # 03//

document.write ("<h1>Rules for naming JS variables</h1> <br> <br> <br>")
let var1 = "numbers";
let var2 = "$";
let var3 = "_";
let var4 = "sensitive";
let var5 = "keywords";
let var6 = "letter";

document.write ("Variables name can only contain" + " " +var1+ "," + " " +var2+ " " + "and" + " " + var3+ ".For example : $my_1stVariable <br>");
document.write ("Variables must begin with a" + " " +var6+ "," + " " +var2+ " " + "and" + " " + var3+ ".For example : $name,_name or name <br>");
document.write ("Variables name case are" + " " +var4+ " <br>");
document.write ("Variables name should not be JS" + " " +var5+ " <br> <br> <br> ");

//CHAPTER # 05//

document.write ("<h1>CHAPTER # 05</h1> <br>")

//Question # 01//

let num1 = 5;
let num2 = 3;

let sum = num1 + num2;

document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum + '<br><br>');

//Question # 02//

let sum1 = num1 - num2;
let sum2 = num1 * num2;
let sum3 = num1 / num2;
let sum4 = num1 % num2;

document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum1 + '<br><br>');

document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum2 + '<br><br>');

document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum3 + '<br><br>');

document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum4 + '<br><br>');

//Question # 03//

let variable = 4;

document.write('Value after variable declaration is undefined  <br>')

let int = variable + 1;

document.write('Initial value :' + int + '.<br>');

let newNum = ++int;

document.write('Value after increment is: ' +newNum+ '<br>');
 
let add = 7 + newNum;

document.write('Value after addition is:' +add+ '<br>');

let dec = --add;

document.write('Value after decrement is:' +dec+ '<br>');

let remainder = dec / 3;

document.write('The remainder is:' +remainder+ '<br> <br>');

//Question # 04//

let ticketCost = 600;

document.write('Total cost to buy 5 tickets to a movie is' +600*5+ 'PKR<br><br>')

//Question # 05//

document.write('Table of 4')
let number = 4;
for (var table = 1; table <= 10; table++){
  let answer = number*table
  console.log(number + "x" +table+ "=" +answer);
  document.write(number + "x" +table+ "=" +answer+ '<br><br>');
}

//Question # 06//

let celsius = 25;
let farhenhit = (celsius*9/5) + 32;

document.write(celsius+ '°C is' +farhenhit+ '°F <br>' );

let fahrenheit = 70;
let celsius1 = (fahrenheit-32)*5/9;

document.write(fahrenheit+ '°F is' +celsius1+ '°C <br> <br>' );

//Question # 07//

let price1 = 650;
let price2 = 100;
let quantity1 = 3;
let quantity2 = 7;
let charges = 100;

let total = (price1*quantity1)+100+(price2*quantity2);

document.write('Total cost of your order is' +total+ '<br><br>');

//Question # 08//

document.write('<h1>Marks Sheet</h1><br><br>')

let totalMark = 980;

document.write('Total Marks:' +totalMark+ '<br>');

let markObtained = 804;

document.write('Marks Obtained:' +804+ '<br>');

let per = 804/980*100;

document.write('Percentage:' +per+ '%<br><br>');

//Question # 09//

document.write('<h1>Currency in PKR</h1><br><br>')

let us = 10;
let sr = 25;
let currency = (us*104.80)+(sr*28);

document.write('Total Currency in PKR:' +currency+ '<br><br>');

//Question # 10//

let program = 2;
let initital = program + 1;
let addi = initital + 5;
let multi = addi * 10;
let div = multi / 2;

document.write(+div+ '<br><br>');

//Question # 11//

document.write('<h1>Age Calculator</h1><br><br>')

let currentYear = 2024;

document.write('Current Year:' +currentYear+ '<br>');

let birth = 2004;

document.write('Birth Year:' +birth+ '<br>');

let yourAge = currentYear - birth;

document.write('Your Age is:' +yourAge+ '<br><br>');

//Question # 12//
document.write('<h1>The Geometrizer</h1><br><br>')

let rad = 20;
let cir = 2*3.142*rad;
let area = 3.142*rad*rad;

console.log(cir);


document.write('The circumference is' +cir+ '<br>');

document.write('The area is:' +area+ '<br><br>');

//Question # 13//

document.write('<h1>The Lifetime Supply Calculator</h1><br><br>')

let favouriteSnack = "chocolate chip";

document.write('Favourite Snack:' +favouriteSnack+ '<br>');

let currentAge = 15;

document.write('Current age:' +currentAge+ '<br>');

let maximumAge = 65;

document.write('Estimated Maximum Age:' +maximumAge+ '<br>');

let amountSnack = 3;

document.write('Amount of snacks per day:' +amountSnack+ '<br>');

let all = (maximumAge-currentAge)*amountSnack;

document.write('You will need' +all+ 'chocolate chip to last you until the ripe old age of' +maximumAge+ '<br><br>');








 






 






