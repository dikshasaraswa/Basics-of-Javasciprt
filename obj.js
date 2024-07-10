const obj={
    fn:function(){
        console.log(this);
    },
    fn2: () => {
        console.log(this);
    }
};
obj.fn();//obj(this point to its object)
obj.fn2();//window(a global object)(arrow function point to parent of 'obj' i.e. global window)
//this will point to parent object 

// function x(){
//     console.log(this);//window
//     function y(){
//         console.log(this);//window
//         function z(){
//             console.log(this);//window
//         }
//         z();
//     }
//     y();
// }
// x();

const per ={
    name:"Aman",
};
const per1={
    name:"Ruchi",
};
function a(){
    console.log(this);
}
a.call(per);
a.call(per1);