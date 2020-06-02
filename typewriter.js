const sentence = "hello there from lighthouse labs";
const letterDelay = 100; 
let i = 0;
const typewriter = function () {
  if (i < sentence.length) {
    process.stdout.write(sentence.charAt(i));
    i++;
    setTimeout(typewriter, letterDelay);
  } else {
    console.log("");
  }
}
typewriter();