const items = [
  { key: "item1", data: "data0" },
  { key: "item2", data: "data2" },
  { key: "item1", data: "data2" },
  { key: "item1", data: "data2" },
  { key: "item5", data: "data1" },
  { key: "item2", data: "data2" },
  { key: "item4", data: "data2" },
  { key: "item2", data: "data1" },
  { key: "item1", data: "data2" },
  { key: "item3", data: "data4" },
];

let output = {};

items.forEach((item) => {
  if (!output[item.key]) {
    output[item.key] = [];
  }
  output[item.key].push(item.data);
});

//   console.log(output)

//Object Reference vs Copy
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;

// const obj1 = { a: 1 };
// const obj2 = obj1;
// JSON.parse(JSON.stringify(obj2));

// console.log(obj1.a);

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const dog = new Dog("Max");
// console.log(dog.speak());



const obj3 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: { A: 1, B: 2, C: 3, D: { Z: 1, X: 2, C: 3 } },
};

const out={}
function flat(obj, prefix = '') {
    Object.entries(obj).map(([key, value]) => {
      const newKey = prefix ? `${prefix}.${key}` : key;
  
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        flat(value, newKey); 
      } else {
        out[newKey] = value;
      }
    });
  }
  
  flat(obj3);
  console.log(out)
