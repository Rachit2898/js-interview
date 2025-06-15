// function func() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }

// func();

/* var is function-scoped, not block-scoped.
That means all iterations of the loop share the same i variable.
The setTimeout callback is asynchronous, and runs after 1000ms, by which time the loop has already completed.
At the end of the loop, i = 5. So when each of the 5 setTimeouts finally run, they all reference the same i, which is now 5.


Two approches to print value 1. using let 2. forming closures */

function func() {
  for (var i = 0; i < 5; i++) {
    function print(value) {
      setTimeout(() => {
        console.log(value);
      }, 1000);
    }
    print(i);
  }
}

// func();

function counter(n) {
  let value = n;

  return {
    increment: () => {
      value = value + 1;
      return value;
    },
    decrement: () => {
      value = value - 1;
      return value;
    },
    reset: () => {
      value = n;
      return value;
    },
  };
}

// const response = counter(5)
//A closure is formed when an inner function “remembers” and has access to variables in its outer (enclosing) function even after the outer function has returned.
// console.log(response.increment())
// console.log(response.increment())
// console.log(response.reset())
// console.log(response.decrement())
// console.log(response.increment())
// console.log(response.reset())

// Problem: Build a generic memoize function using closures.

function memoize(fn) {
  const obj = {};
  return function (n) {
    const key = JSON.stringify(n);
    if (obj[key]) {
      return obj[key];
    } else {
      const res = fn(n);
      obj[key] = res;
      return res;
    }
  };
}
const response = memoize((n) => {
  console.log("Calculating...");
  return n * n;
});

// console.log(response(5));
// console.log(response(5));
// console.log(response(5));
// console.log(response(6));
// console.log(response(6));
// console.log(response(7));
