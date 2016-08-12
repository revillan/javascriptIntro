Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]];
        sorted = false;
      }
    }
  }
return this;
};

String.prototype.substrings = function () {
  let substring = [];
  for (let i = 0; i < this.length; i++){
    for (let j = i+1; j < this.length + 1; j++) {
      let sub = this.slice(i,j);
      if (substring.indexOf(sub) === -1) {
        substring.push(sub);
      }
    }
  }
  return substring;
};

console.log("cata".substrings());
