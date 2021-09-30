// ------- Variable Shadowing --------
// 1. var
var x = 10;
if (true) {
  var x = 100;
  console.log(x); // 100 is logged
}
console.log(x); // 100 is logged

// 2. let
let y = 20;
if (true) {
  let y = 200;
  console.log(y); // 200 is logged
}
console.log(y); // 20 is logged

// 3. const
const z = 30;
if (true) {
  const z = 300;
  console.log(z); // 300 is logged
}
console.log(z); // 30 is logged


// ------- Template Literals ---------
let name = "Ritik";
console.log(`Hello ${name}`); // js variables can be accessed
name = `Ritik Jain
Hope you're doing well`;
console.log(`Hello ${name}`); // name is logged in multiple lines
           
//  ------ Function's Declarations ----
// 1. Function Statement
console.log(fun1);
fun1(7); // Hoisted at top of scope(here it is global scoped) and assigned the function

function fun1(param){
    console.log(`Parameter given is ${param} from fun1`);
}

// 2. Function Expression
console.log(fun2);
// fun2(7); it will give an error here before function expression because fun2 is not assigned with function at hoisting

var fun2 = function (param){
    console.log(`Parameter given is ${param} from fun2`);
}
fun2(7);

// 3. Arrow functions
let obj = {
    a : 1,
    arrowFunc: function()  {
        setTimeout( () => console.log(this.a), 0); // 1 is logged 
    },
    funcExpression: function(){
        setTimeout( function(){console.log(this.a)}, 0); // undefined because this is evaluated at runtime so this is assigned to global object
    }
}

obj.arrowFunc();
obj.funcExpression();