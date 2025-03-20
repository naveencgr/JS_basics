//state maintance in closure
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`count is incremented to ${count}`);
  }

  function getCounter() {
    return count;
  }

  return { increment, getCounter }; //returning a function
}

const counter = createCounter();
counter.increment();
counter.increment();

console.log(`the counter is ${counter.getCounter()}`);
