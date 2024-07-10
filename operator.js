//OPERATOR IN JAVASCRIPT
let a=4;
let b=5;
console.log(a+b);
console.log(a/b);//it will the quotient irrespective of int or float
console.log(Math.floor(a/b));//it will only give int in python we use (a//b) for int value 
console.log(2**4);


//DATATYPE In js
c=4;
d=3.14;
e="aman";
f=true;
g='w';
console.log(c,typeof(c));
console.log(d,typeof d);
console.log(e,typeof(e));
console.log(f,typeof(f));
console.log(g,typeof(g));

//CONDITIONAL if else statement
age=2;
if(age>=18){
    console.log("adult");
}
else
console.log('kid');

x=45;
if(x>=100 && x<=999) console.log('3 digits')
else console.log('not 3 digit')

//TRIPLE EQUAL TO ===
v=5;
n='5'; //'5':53 ascii 
console.log(a==b);
console.log(a===b);//time:1;02;55 college wallah 


//LOOPS
for(let i=0;i<=10;i++){
    console.log(i);
}
//
let i=0;
while(i<=10){
     console.log(i);
     i++;
}
//
let j=1;
do{
     console.log(j);
     j++;             //do while works once even when i>n in initialization 
}while(j<=9);



