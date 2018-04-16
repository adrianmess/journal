export function Entry(title, body) {
  this.title = title;
  this.body = body;

}
var vowels = ['a','e','i','o','u'];

Entry.prototype.wordCount = function() {
  var splitter = this.body.split(' ');
  var counter = 0;
  splitter.forEach(function(){
    counter++;
  });
  return counter;
};

Entry.prototype.vowelCount = function() {
  var splitter = this.body.split('');
  var vowelsCounter = 0;
  splitter.forEach(function(char) {
    vowels.forEach(function(vowel) {
      if(char === vowel) {
        vowelsCounter++;
      }
    });
  });
  return vowelsCounter;
}


Entry.prototype.consCount = function() {
  var splitter = this.body.split('');
  var consCounter = 0;
  splitter.forEach(function(char) {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char ===" ") {
      return;
    } else {
      consCounter++;
    }
  });
  return consCounter;
}

Entry.prototype.returnWord = function(){
  var splitter = this.body.split(' ');
  splitter.splice(8);
  var teaser = splitter.join(" ");
  return teaser;
};
