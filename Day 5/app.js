// -------------- Prototype --------------

// 1. this is referenced to calling object
let animal = {
    firstName : "Ritik",
    lastName : "Jain",
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(f, s){
        this.firstName = f
        this.lastName = s
    }
}

let rabbit = {
    jumps: true,
    __proto__ : animal,
}

console.log(rabbit.getFullName()); // this is referenced to rabbit but since firstName, lastName is in animal
rabbit.setFullName("reTick", "Jain") // firstName and lastName is modified for rabbit. this = rabbit
console.log(rabbit.getFullName()); // "reTick Jain" is logged. because this = rabbit
console.log(animal.getFullName()); // "Ritik Jain" is logged. this = animal

// 2. for in reads inherited props also

for( let it in rabbit){
    console.log(it); // rabbit's and inherited properties is logged
}

for (let it in rabbit) {
    if(rabbit.hasOwnProperty(it)){
        console.log(it); // jumps, firstName, lastName is logged because only rabbit's property logged
    }
}

// write/delete directly operates on the calling object

rabbit.getFullName = () => {
    console.log(`getFullName function is updated`);
}
rabbit.getFullName();