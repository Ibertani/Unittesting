 
 
 function greet(name = "there!") {
  
    if (name.constructor === String && name === name.toUpperCase()) {
     return "HELLO" + " " + name + "!";
   } else if (
     name.constructor === Array) {
     return "Hello" + "," + name[0] + "," + name[1];
   } else {
     return "Hello" + " " + name;
   }
 }

 module.exports = greet;