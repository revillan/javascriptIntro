Array.prototype.uniq = function() {
  let uniqArr = [];
  this.forEach( (el) => {
    if (uniqArr.indexOf(el) === -1) {
      uniqArr.push(el);
    }
  });
  return uniqArr;
};


Array.prototype.twoSum = function() {
  let twoSumArr = [];

  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        twoSumArr.push([i, j]);
      }
    }
  }
  return twoSumArr;
};

function transpose(mat) {
  let trans = [];
  for(let i = 0; i < mat.length; i++) {
    trans.push([]);
  }
  for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat.length; j++) {
      trans[i][j] = mat[j][i];
    }
  }
  return trans;
}

console.log([1,-1,2,0,-2].twoSum());
