const sentence = "hello there from lighthouse labs";
const letterDelay = 100; 
let i = 0;
const typewriter = function () {
  if (i < sentence.length) { //makeshift for loop that:
    process.stdout.write(sentence.charAt(i)); //'console logs' sentence at character [i]
    i++; //increases by 1 char
    setTimeout(typewriter, letterDelay); //runs on a delayed timer (function, delay)
  } else {
    console.log("");
  }
}
typewriter();