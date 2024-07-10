//falsy values: false condition, false, 0, null, NaN, undefined
//but 'null' and '0' will be considered as truth they will act like string 
//truthy values: everything except falsy values 
if('null'){
    console.log("Right");//truthy
}
else console.log("wrong");//falsy

//console.log(a);//error not defined 
console.log(typeof(a));//no error output will be undefined