// ---------------------- DEBOUNCING ----------------------

let counter = 0;
let getData = (e) => {
    console.log(e);
    console.log(`API called ${++counter}`);
}

let timer;
let debounce = (e)=>{
    
    clearTimeout(timer); // clearTimeout clears the timer (along with its callback fn) using setTimeout's
                         //  returned id as its parameter
    timer = setTimeout(() => {getData.apply(this, [e])}
    , 600);// setTimeout returns an id that will be stored in timer var
}

// ---------------------- THROTTLING ----------------------

let count = 0;
let clicked = () => {
    console.log(`You clicked me ${++count} times. don't be in a hurry`);
}

let throttle = (func, limit) => {
    let flag = true;
    return function(){
        let args = arguments;
        if(flag){
            clicked.apply(this, args);
            flag = false;
            setTimeout(()=>{flag = true}, limit) // it makes flag true after a certain period of time
        }
    }
}

let onClicked = throttle(clicked, 2000);