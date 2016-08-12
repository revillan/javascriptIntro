function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}


let curie = new Cat('curie', 'Ned Ruggeri');
let markov = new Cat('markov', 'Ned Ruggeri');
let impaler = new Cat('the impaler', 'Kush Patel');

Cat.prototype.cuteStatement = function() {
 return (`Everyone loves ${this.name}`);
};
Cat.prototype.meow = function() {
 return (`meow.  meow.  MEOW. meowmeow.`);
};

curie.meow = function() {
  return "meowwwwwww?";
};


console.log(impaler.meow());
console.log(curie.meow());
console.log(curie.cuteStatement());
console.log(markov.cuteStatement());
