//function are used to increase the reuseability of code
function onetoN(n){
    for (let i=0;i<n;i++) {
        console.log(i);
    }
}
onetoN(3);

function eqn(a,b){
    return (Math.abs(a*a*a)+ Math.abs(b*b*b)); //Math.abs will give positive answer even if the number is negative as the cube of a negative number is negative.
}
console.log(eqn(-3,-4)); //eqn(3,4):will only return the answer the printing will be done by console.log
//in js we dont need to mention return type or parameter type 



//MATHEMATICAL FUNCTION
console.log(Math.abs(-8));
console.log(Math.max(5,1,6,89,54));
console.log(Math.min(-5,1));
console.log(Math.pow(2,7));
console.log(Math.sqrt(3.14));
console.log(Math.cbrt(3.14));

console.log(Math.floor(-3.5))//-4
console.log(Math.ceil(6.7));

console.log(Math.random());//gives random real number between (0,1) excluding 0 and 1 both.

//write a code to generate a random number btw 0 and 9(included)
let num = Math.floor(Math.random()*10);//floor will print integer only 
console.log(num);

//between 0 and 10 included 
console.log(Math.floor(Math.random()*11));

//between -10 and 10 included
console.log(Math.floor((Math.random()*21)-10));

if(Math.random()<0.5){
    console.log('hello');
}
else console.log('bye');