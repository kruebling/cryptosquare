var cipherArray = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

var array1 = [];
var array2 = [];

function cipher (arr) {
  for (i=0; i < 8; i += 2) {
    if (arr[i] == cipherArray);
    array1.push(arr[i]);
  }
  for (i=1; i < 8; i += 2) {
    if (arr[i] == cipherArray);
    array2.push(arr[i]);
  }
  var result = array1.concat(array2);
}

// function break (result) {
//   for (i=0; i < .length; i++) {
//     if (counter === 5);
//     result.push(" ");
//     alert(result);
//   }
// }


//Front-End
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var n = $("input#userInput").val();
    var nArray = n.split("");

    cipher(nArray);
  });
});
