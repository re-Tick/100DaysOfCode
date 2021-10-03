// -------------- Closures -----------------
function x1(){
    let a = 7;
    function y(){
        console.log(a++);
    }
    return y;
}

let z = x1(); // function y is returned and also the reference to its parent environment (fn x) is stored 
z(); // 7 is logged and a is incremented to 8
z(); // 8 is logged and a in increased to 9

