//Object in js is kind of like map/dictionary where wwe have key-value pairs
var details=["diksha",20,95.8,false];

let x={   // here x is a object 
    name:"diksha",
    //"nick name":'yati',// in js we can key can bs a string also with spaces in between , normal key cant be used with spaces it will give error.
    age:20,
    percent:95.8,
    'is Married':false
};
console.log(x);
console.log(x.age,x["is Married"]);
//console.log(x[age]);//error
console.log(x['age']);//it will the desired output
x.age = 40;
console.log(x.age);

//For IN Loop
for (const key in x) {
    console.log(key,x[key]);
}