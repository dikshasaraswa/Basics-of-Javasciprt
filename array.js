/*arr =[1,6,8,3];
console.log(arr);
arr.push(9);//add at last 
arr.push(0);
console.log(arr);
arr.pop(0); // removes last element 
console.log(arr);
arr.unshift(2);// add at first
console.log(arr);
arr.shift();//removes first element
console.log(arr);

//n=arr.length;
console.log(n);
for(let i=0;i<n;i++){
    console.log(arr[i]);//printed element line by line becoz one element printed at one time
}*/

//c++:vectors, Java:Arraylist in javascript array is evrything like array works as vectors in js 
/*--------------------------------------------*/
//constant array: in this we can work normally like  the normal array we can do push pop but the name of arr cant be asigned a value but in normal arr value can be assigned (time:1:20:15)

// let a=[2,4,6,7];
// console.log(a);
// a =9;
// console.log(a);//no error 

// const b=[3,6,8,2];
// console.log(b);
// b=1;
// console.log(b); // error

/*------------------------------------*/
//array can have all datatype
/*arr=[5,"aman",5.6,true,[4,6,8]];
console.log(arr);
console.log(typeof(arr));//object

brr=[[2,3,4],[5,6,7,8,9]];//2-D array
console.log(brr);
/*----------------------------------------*/
/*crr=[3,7,5,6,8,9];
//Forof Loop
for(const ele of crr){
    console.log(ele);
}

for(let i=0;i<crr.length;i++){//for loop
    crr[i] *=2;//no error
}
console.log(crr);

for(const ele of crr){
    //ele *=2;//error
    console.log(ele);//no error time:1:32:56
}
console.log(crr);*/

// for(const ele of crr){
//     console.log(ele); // error : we can't print index in For of loop
// }
/*-----------------------------------*/

drr=[3,5,7,8,6];
////console.log(drr);
drr.forEach((ele,i) => {
    console.log(ele,i);//it will print index as well as can print whole array together
    //ele*=2;//error same as for of loop
});
console.log(drr);