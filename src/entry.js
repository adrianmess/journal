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
  var counter = 0;
  splitter.forEach(function(char) {
    vowels.forEach(function(vowel) {
      if(char === vowel) {
        counter++;
      }
    });
  });
  return counter;
}

Entry.prototype.consCount = function() {
  var splitter = this.body.split();
  var counter = 0;
  splitter.forEach(function (char) {
    vowels.forEach(function (vowel) {
      if (char !== vowel) {
        counter++;
      }
    });
  });
  return counter;

}
