export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var splitter = this.body.split(' ');
  var counter = 0;
  splitter.forEach(function(){
    counter++;
  });
  return counter;
};
