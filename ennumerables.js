Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
  return this;
};

Array.prototype.myMap = function(callback) {
  let newArr = [];
  this.myEach( (el, idx, arr) => {
    newArr.push(callback(el, idx, arr));
  });
  return newArr;
};

Array.prototype.myInject = function(callback) {
  let accum = this[0];
  this.slice(1,this.length).myEach( (el, idx) => {
      accum = callback(el, accum);
  });
  return accum;
};

// let arr = [1,2,3];
console.log([1,2,3].myInject((el, accum) => (el+accum)));
