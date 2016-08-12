function range(start, end) {
  if (start === end) {
    return [start];
  } else {
    let temp = range(start,end-1);
    temp.push(end);
    return temp;
  }
}

Array.prototype.sum = function () {
  if (this.length < 1) {
    return 0;
  }
  return this.slice(0,this.length-1).sum() + this[this.length-1];
};

function expo1(b, n) {
  if (n === 0) {
    return 1;
  }
  return expo1(b, n-1) * b;
}

function expo2(b,n) {
  if (n === 0){
    return 1;
  }
  if (n % 2 === 0) {
    let sqr = expo2(b, n / 2);
    return sqr * sqr;
  } else {
    let sqr = expo2(b, (n -1) / 2);
    return b * sqr * sqr;
  }
}

function fibonacci (n) {
  if (n <= 2) {
    return [0,1].slice(0, n);
  }
  let temp = fibonacci(n-1);
  temp.push(temp[temp.length-1] + temp[temp.length-2]);
  return temp;
}

function bsearch (arr, tar) {
  if (arr.length === 0){
    return NaN;
  }
  let pivot = Math.floor((arr.length / 2));
  if (arr[pivot] === tar) {
    return pivot;
  } else if (arr[pivot] > tar) {
    return bsearch(arr.slice(0,pivot),tar);
  } else {
    return bsearch(arr.slice(pivot+1, arr.length),tar) + pivot + 1;
  }
}

function makeChange(num, denoms) {
  if (num === 0) {
    return [];
  }
  let bestchangelength = num;
  let bestchange = [];
  let coins = [];
  for(let i = 0; i < denoms.length; i++) {
    if (denoms[i] <= num) {
      coins.push(denoms[i]);
    }
  }

  coins.forEach( (coin) => {
    let change = makeChange(num - coin, coins);
    change.push(coin);
    if (change.length <= bestchangelength) {
      bestchange = change;
      bestchangelength = change.length;
    }
  });
  return bestchange;
}

Array.prototype.mergeSort = function() {
  if (this.length < 2) {
    return this;
  }
  let pivot = Math.floor((this.length / 2));

  let left = this.slice(0,pivot).mergeSort();
  let right = this.slice(pivot,this.length).mergeSort();

  let returnArr = [];

  while(left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      let thing = left[0];
      left.shift();
      returnArr.push(thing);
    } else {
      let thing = right[0];
      right.shift();
      returnArr.push(thing);
    }
  }
  return returnArr.concat(left.concat(right));
};

Array.prototype.subsets = function() {
  if (this.length  === 0) {
    return [[]];
  }
  let returnArr = [];
  let recurs = this.slice(0, this.length - 1).subsets();
  let otherhalf = this.slice(0, this.length - 1).subsets();
  otherhalf.forEach((el) => {
    el.push(this[this.length - 1]);
  });
  return recurs.concat(otherhalf);
};

console.log([0,1,2,3,4,5].subsets());
