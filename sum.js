 
 
 function greet(name = "there!") {
   if (name.constructor === String && name === name.toUpperCase()) {
     return "HELLO" + " " + name + "!";
   } else if (name.constructor === Array && name.length == 2) {
     return "Hello" + "," + name[0] + "," + name[1];
   } else if (name.constructor === Array && name.length > 2) {
    var sentence = '';
    for (var i = 0; i < name.length; i++) {
       var string = ",";
       
        sentence = sentence + string + name[i];
       
     }
     return "Hello" + sentence;
   } else {
     return "Hello" + " " + name;
   }
 }

 module.exports = greet;