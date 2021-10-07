let obj = {
  abc: 1,
  xyz: "Hello",
  pqr: true,
  ijk: {
    some: "Greetings",
  },
};
// for(let .. in obj) used to traverse through keys of object
for (let props in obj) {
  console.log(props);
}

let map = new Map();
map.set(123, true);
map.set(true, 123);

for (let itr of map) {
  console.log(itr);
}

let map2 = new Map([
  [456, "true"],
  [true, { obj: 1, obj2: 2 }],
]);

for (let itr of map2) {
  console.log(itr);
}

let obj10 = {
  sample: 1,
  sample2: true,
  sample1: {
    sample0: "ritik",
  },
};
// Onject.entries(obj) is inbuilt function to make object as iterable array. [[key, value]]
let map1 = new Map(Object.entries(obj10));

for (let itr of map1) {
  console.log(itr);
}

console.log(map1.get("sample"));
console.log(map1.has("sample0"));
console.log(map1.has("sample1"));
map1.delete("sample1");

for (let itr of map1) {
  console.log(itr);
}
map1.clear();

let set = new Set();

set.add("Ritik");
set.add(" Jain");
set.add(" is ");
set.add(" is "); // " is " not added in the set. Cause set stores unique values
set.add("a funny guy.");

let s = "";
for (let itr of set) {
  s += itr;
}
console.log(s);

