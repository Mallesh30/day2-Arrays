//problem statemt

var arr = [1, 2, 3, 4, 5];

// Using custom methods
console.log(arr.customSlice(1, 3)); // Output: [2, 3]
console.log(arr.customSplice(2, 0, 6)); // Output: [1, 2, 6, 3, 4, 5]
console.log(arr.customPush(6, 7)); // Output: 7 (new length of the array)
console.log(arr.customPop()); // Output: 5 (removed element)

// Using custom higher-order functions
console.log(arr.customMap((x) => x * 2)); // Output: [2, 4, 6, 8, 10]
console.log(arr.customFilter((x) => x % 2 === 0)); // Output: [2, 4]
console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 15

Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.customFilter = function (predicate) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.customReduce = function (reducer, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = reducer(accumulator, this[i], i, this);
  }

  return accumulator;
};

var arr = [1, 2, 3, 4, 5];

// Using custom higher-order functions
console.log(arr.customMap((x) => x * 2)); // Output: [2, 4, 6, 8, 10]
console.log(arr.customFilter((x) => x % 2 === 0)); // Output: [2, 4]
console.log(arr.customReduce((acc, cur) => acc + cur, 0)); // Output: 15

//--------------------------------------

Array.prototype.customSlice = function (start, end) {
  const result = [];
  start = start < 0 ? this.length + start : start || 0;
  end = end < 0 ? this.length + end : end === undefined ? this.length : end;

  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }

  return result;
};

Array.prototype.customSplice = function (start, deleteCount, ...items) {
  const removedItems = this.slice(start, start + deleteCount);
  const remainingItems = this.slice(start + deleteCount);

  this.length = start; // Truncate the array

  for (let item of items) {
    this.push(item);
  }

  for (let item of remainingItems) {
    this.push(item);
  }

  return removedItems;
};

Array.prototype.customPush = function (...items) {
  for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }
  return this.length;
};

Array.prototype.customPop = function () {
  const lastElement = this[this.length - 1];
  this.length = this.length - 1;
  return lastElement;
};
