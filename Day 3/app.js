// --------------- Temporal Deadzone ------------

console.log(a); // a is unreachable because this statement is in temporal deadzone

let a = 10;

// --------------- Syntax Errors ----------------

let b = 100;
let b = 1; // Syntax Error because let syntax : let, const cannot be redeclared

// Or

const c; // Syntax Error because const syntax: const should be initialize at declaration

// --------------- Type Errors -------------------

const d = 7;
d = 14; // const cannot be updated anywhere in the code.

// --------------- Lexical Scope -----------------

function x(){
    let z = 7;
    function y(){
        console.log(z); // z is local scoped in function x(). So, 7 is logged
        console.log(u); // u is global and 8 is logged
    }
    y();
}

var u = 8;
x();