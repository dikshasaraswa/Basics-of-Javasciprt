//callback function ek esa function hota hai jo ek function ke andar pass hota hai
function product(a,b,c){
    return a*b*c;
}
function fun(x,y){
    let a= x(2,5,4);
    console.log(a-y);
}
fun(product,7); // now product is a callback function for fun 


//SET TIME OUT JS
function h(){
    console.log("hello");
}
function m(){
    console.log("mello");
}
setTimeout(h,2*1000);//get printed after a delay of 2 sec when we hit the run button , here h is a callback function for setimeout
setTimeout(function (){
    console.log("mello");
},6*1000);//delay of 6 sec

//ques. print 1 to 10 but with delay of 1 sec after each number gets printed 
for(let i=0;i<=10;i++){
    setTimeout(function() {
        console.log(i);// for reverse: console.log(11-i)
    }, i*1000);
}
