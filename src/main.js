import { Entry } from './entry.js';
// import wordCount from './entry.js';
import './styles.css';

$(function() {
  $("#post").submit(function(event) {
    event.preventDefault();
    var userTitle = $("#title").val();
    var userBody = $("#body").val().toLowerCase();

    var textEntry = new Entry(userTitle, userBody);
    var words = textEntry.wordCount();
    console.log(words);
    var vowels = textEntry.vowelCount();
    console.log(vowels);
    var consonants = textEntry.consCount();
    console.log(consonants)
    // var returnWords = textEntry.returnWord();
    // console.log(returnWords)
  });
});
