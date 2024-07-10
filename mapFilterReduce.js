//Map basically agar mujhe ek array se ek aur array banana hai usse related with some specific changes
/*let arr=[1,6,3,8];
//1
// let brr=[];
// for (const ele of arr) {
//     brr.push(ele*2);//changing array brr
// }
// console.log(brr);

//2------------------------------------------------
function twice(ele){
    return(ele*2);
}
function sq(ele){
    return(ele*ele);
}
//let brr=arr.map(sq); this also possible
//console.log(brr);

//3-------------------------------------------------
// let brr = arr.map(function(ele){
//     return(ele*2);
// });
//console.log(brr);

//4---------------------------------------------------
let brr = arr.map((ele)=>{
    return(ele*ele*ele);
});
console.log(brr);


//5-----------------------------------------------
arr = arr.map(ele => ele*ele);
console.log(arr);
brr=arr.map(ele=> ele+10);
console.log(brr);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%FILTER%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//filter out even elements
function fun(ele){
    if(ele%2 != 0) return true;
    else false;
}
let arr=[1,9,2,7,4,5,6,2,8];
console.log(arr);
//1
// arr=arr.filter(fun);
// console.log(arr);
//2
arr=arr.filter(function (ele){
    if(ele%2 == 0) return true;
    else false;
});
console.log(arr);

//3
arr=arr.filter((ele)=>{
    return (ele >5);
    //return(ele>5) ? true:false;
});
console.log(arr);

//4
arr=arr.filter((ele)=>(ele>5));
console.log(arr);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%REDUCE%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
let arr=[1,9,2,7,4,5,6,2,8];
console.log(arr);

let x = arr.reduce(function(a,b){
    //return a+b;
    return a-b;
})
console.log(x);
/////////////////////////////////sorting 
arr=arr.sort();//wrong sorting for negative number 
console.log(arr);

// arr = arr.sort((a,b)=>b-a); //decreasing 
// console.log(arr);

brr=[-9,-7,4,-6];
brr = brr.sort((a,b)=>a-b);//actual sort increasing 
console.log(brr);

brr = brr.sort((a,b)=>Math.abs(a)-Math.abs(b));//abs sort increasing 
console.log(brr);