// Logical Operators
// 1.Use && to check whether 10 > 5 and 20 > 15 are true.
console.log(10>5 && 20>15);


// 2.Use && to check whether 10 > 15 and 20 > 10 are true.
console.log(10>15 && 20>10)
// 3.Use || to check whether 10 > 20 or 15 > 10 is true.
console.log(10>20 || 15>10);

// 4.Use || to check whether 5 > 10 or 20 < 15 is true.
console.log(5>10 || 20<15)
// 5.Use ! to reverse the result of 10 > 5.
console.log(!(10>5));

// 6.Use ! to reverse the result of 10 < 5.
console.log(!(10<5));

// 7.Create two conditions using && and || and print the final result.
 var a=10>5;
 var b=15>30;
 console.log(a&&b,a||b);
 
// 8.Create three conditions using &&, ||, and ! together.
 var a=20>15;
 var b=30<20;
 console.log(a&&b,a||b,!a);
 
// Ternary Operator
// 9.Create an age variable. If age is 18 or above, print "Eligible"; otherwise print "Not Eligible".
 let age=14;
 console.log(age>=18 ?"eligible" :"not eligible");
 
// 10.Create a marks variable. If marks are 35 or above, print "Pass"; otherwise print "Fail".
  let marks=35;
  console.log(marks>=35 ?"pass":"fail");
  
// 11.Create a number variable. Check whether it is greater than 10 using a ternary operator.
let num=10;
console.log(num>10 ?"greater than 10":"Not Greater than 10");
// 12.Create a number variable. Check whether it is even or odd using a ternary operator.
 var num1=29;
 console.log(num1%2===0 ?"even":"odd");
 
// 13.Create a salary variable. If salary is greater than 30000, print "Good Salary"; otherwise print "Low Salary".
let sal=10000;
console.log(sal>30000?"Good Salary":"Low Salary");

// Concatenation & Template Strings
// 14.Create three variables containing your first name, last name, and city. Join them using +.
let firstName="talloji"
let lastName="shivani"
let city="hyd"
console.log(firstName+lastName+" "+city);

//15. Create name and age variables and print them together using concatenation.
var name="shivani";
var age1=24;
console.log(name+" "+age1);

// 16.Create three variables: product, price, and brand. Print them as one sentence using +.
let product="chocolate";
let price=200;
let brand="silk"
console.log(product+" "+price+" "+brand);

// 17.Create variables for your name, qualification, and company. Display them using a template string.
var name1="shivani";
var qualif="btech";
var company="stackly"
console.log(`my name is ${name1}. i completed ${qualif}. im working at ${company}.`);


// 18.Create name, age, and city variables. Display them using a template string in one sentence.
var name="shivani";
var age1=24;
var city1="hyd";
console.log(`my name is ${name} my age is ${age1} im from ${city1}`);

// Type Casting — Implicit
// 19.Add a string and a number. Print the result and its typeof.
var num1="20";
var num2=20;
console.log(num1+num2);
console.log(typeof(num1+num2));

// 20.Add a number and a number. Print the result and its typeof.
var n1=10;
var n2=20;
console.log(n1+n2);
console.log(typeof(n1+n2));

// 21.Add a number and true. Print the result and its typeof.
var n3=10;
var n4=true;
console.log(n3+n4);
console.log(typeof(n3+n4));
// 22.Add a number and null. Print the result and its typeof.
var num3=20;
var num4=null;
console.log(num3+num4);
console.log(typeof(num3+num4));
// 23.Add a string and true. Print the result and its typeof.
var num2="20";
var num1=true;
console.log(num2+num1);
console.log(typeof(num2+num1));
// 24.Add a string and an array. Print the result and its typeof.
var num2="20";
var num1=[1,2,3];
console.log(num2+num1);
console.log(typeof(num2+num1));
// 25.Add a number and an object. Print the result and its typeof.
var num1=20;
var num2={
    name:"shivani",
    age:24
};
console.log(num1+num2);
console.log(typeof(num1+num2));
// 26.Create three different expressions using different data types and check their resulting data types.
let str="shivani";
let numb=30;
let bool=true;
console.log(typeof(str),typeof(numb),typeof(bool));

// Type Casting — Explicit
// 27.Convert "100" into a number using Number() and print the result.
var num1="100";
console.log(Number(num1))
// 28.Convert "25" into a number and check its data type using typeof.
var num2="25";
console.log(typeof(Number(num2)));

// 29.Convert true into a number using Number().
var n1=true;
console.log(Number(n1));

//30. Convert false into a number using Number().
var n2=false;
console.log(Number(n2));

// 31.Convert an empty string into a number using Number().
var n3="";
console.log(Number(n3));
// 32.Convert null into a number using Number().
var n4=null;
console.log(Number(n4));

//33. Convert undefined into a number using Number().
var n1=undefined;
console.log(Number(n1));
//34. Convert "Hello" into a boolean using Boolean().
var bol="shivani";
console.log(Boolean(bol));
// 35.Convert an empty string into a boolean using Boolean().
var bol="";
console.log(Boolean(bol));
// 36.Convert 0, 1, and -1 into boolean values using Boolean().
var bol=0;
var bol1=1
var bol2=-1
console.log(Boolean(bol),Boolean(bol1),Boolean(bol2));
// 37.Convert an array into a boolean using Boolean().
var arr=[1,2,3,4]
console.log(Boolean(arr));

// 38.Convert an object into a boolean using Boolean().
var obj={
    name:"sony",
    age:24
}
console.log(Boolean(obj));
console.clear();
// Conditional Statements
// 39. Create an age variable. Using if, print "Eligible" if the age is 18 or above.
var age2=24;
if (age2>=18) {
  console.log("Eligible")
}
// 40. Create an age variable. Using if...else, print whether the person is eligible to vote.
var myAge=2;
if(myAge>=18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}

// 41.Create a marks variable and use if...else to print "Pass" or "Fail".
let marks1=29;
if(marks1>=35){
    console.log("Pass")
}
else{
    console.log("Fail")
}

// 42.Create a time variable and use else if to display:
// 1–6 → "Early Morning"
// 7–12 → "Morning"
// 13–17 → "Afternoon"
// 18–19 → "Evening"
// 20–24 → "Night"
// Anything else → "Invalid Time"
 let time=30;
 if(time>=1 && time<=6){
    console.log("Early Morning")
 }
 else if(time>=7 && time<=12){
    console.log("Morning")
 }
  else if(time>=13 && time<=17){
    console.log("Afternoon")
 }
  else if(time>=18 && time<=19){
    console.log("Evening")
 }
  else if(time>=20 && time<=24){
    console.log("Night")
 }
 else{
    console.log("Invalid Time");
    
 }
// 43. Create a temperature variable and use if...else if...else to print:
// Above 35 → "Hot"
// 20–35 → "Normal"
// Below 20 → "Cold"
let temp=30;
if(temp>35){
    console.log("Hot");
}
else if(temp>=20 && temp<=35){
  console.log("Normal");
}
else{
   console.log("cold");
    
}
// 44.Create a nested if program that checks:
// Age ≥ 18
// Height ≥ 170
// Weight ≥ 60
let pAge=100;
let Pheight=190;
let Pweight=40;
if(pAge>=18){
    
    if(Pheight>=170){
        if(Pweight>=60){
           console.log("ur eligible")
        }
        else{
        console.log("ur weight is not Eligible")
    }
    }
    else{
        console.log("ur height is not Eligible")
    }
}
else{
        console.log("Not Eligible for ur age");
        
    }
//45. Print "Eligible" only when all three conditions are satisfied.
    if(pAge>=18 && Pheight>=170 && Pweight>=60){
        console.log("eligible")
    }
    else{
        console.log("Not eligible")
    }
// Switch Statement
// 46.Create a trafficLight variable with values "red", "yellow", or "green". Use switch to print the appropriate action.
 let light="green";
 switch(light){
    case "red":
        console.log("stop"); break
    case "yellow":
        console.log("ready to go");break
    case "green":
        console.log("you can go");break
 }

// 47.Create a day variable with values "Monday" to "Sunday". Use switch to print the day.
let day="Sunday";
switch(day){
    case "Monday":
        console.log("Today is monday");break
    case "Tuesday":
        console.log("Today is Tuesday");break
    case "Wednesday":
        console.log("Today is Wednesday");break
    case "Thursday":
        console.log("Today is Thursday");break
    case "Friday":
        console.log("Today is Friday");break
    case "Saturday":
        console.log("Today is Saturday");break
    case "Sunday":
        console.log("Today is Sunday");break
}
// 48. Create a choice variable with values 1, 2, or 3. Use switch to print:
// 1 → "Start"
// 2 → "Settings"
// 3 → "Exit"
let nums=32;
 switch(nums){
    case 1:
        console.log("start"); break
    case 2:
        console.log("setting");break
    case 3:
        console.log("exit");break
    default:
        console.log("plz enter nums in 1,2,3 only");
            
 }
 console.clear()
// Loops
// 49. Use a for loop to print numbers from 1 to 10.

for (let n=1;n<=10;n++){
    console.log(n);
    
}
// 50.Use a while loop to print numbers from 10 to 1.
let a1=10;
while(a1>=1){
    console.log(a1);
    a1--;
}

// 51.Create an array of fruits and use:
// for...of to print every fruit.
let fruits=["banana","apple","mango","pineapple"];
for(let fruit of fruits){
    console.log(fruit);
}
// Create an object containing name, role, and experience, then use for...in to print every key and value.
let objt={
    myName:"shivani",
 role:"frontend",
 experience:0
}
for(let details in objt ){
    console.log(details+":",objt[details]);
}