const array = [12, 50, 100, 15, 16, 20, 25];

const array_map = array.map((arr) => arr * 2);
console.log(array_map);

const filter_map = array.filter((arr) => arr % 10 == 0);
console.log(filter_map);

const sum_result = array.reduce((sum, value) => sum + value, 0);
console.log(sum_result);

array.forEach((arr) => console.log(arr));

function multiple(number) {
  return (double) => number * double;
}

const multiply = multiple(10);
console.log("result is " + multiply(20));

const sort_array = array.sort((a, b) => a - b);
console.log(sort_array);

let value = array.pop();
console.log(array);
array.push(value);
console.log(array);

const array_join = array.join(" ,,");
console.log(array_join);

const array_reverse = array.reverse();
console.log(array_reverse);

const array_shift_right = array.shift();
console.log(array_shift_right);

const array_shift_left = array.shift();
console.log(array_shift_left);

const array_slice = array.slice(0, 2);
console.log(array_slice);

const array_splice = array.splice(0, 1, 222);
console.log(array_splice);
console.log(array);

const array_unshift = array.unshift(2000);
console.log(array_unshift);
console.log(array);

const array_index = array.indexOf(2000);
console.log(array_index);
