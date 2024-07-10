let a="diksha saraswat";
console.log(a,a.length);
console.log(a[4]);
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
//Forof loop
for (const char of a) {
    console.log(char);
}
//for each loop dont work for string 

/*---------------------string built in-------------------*/
//console.log(a.toUpperCase(a));
// let a2=a.toUpperCase();
// console.log(a,a2);

// b=" aman kumar "
// console.log(b,b.length);
// let b2=b.trim();//removes begin and end spaces from string  
// console.log(b2,b2.length);
// console.log(b2.indexOf('a'));
// console.log(b2.lastIndexOf('a'));
// console.log(b2.charAt(4));

let c="physicswallah";
console.log(c.slice(2,6));//substring from index i to index j-1
console.log(c.slice(5));//substring from i to end 
c2=c.slice(2,6);
console.log(c,c2);

let d="I am studying javascript from youtube";
console.log(d);
let arr= d.split(' ');// string used in array: when there is space in string split that in array

//console.log(arr);
for (const ele of arr) {
    console.log(ele);
}