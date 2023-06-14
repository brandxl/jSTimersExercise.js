//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countDown(num){
   let counter = setInterval(function(){num--;
     if(num <= 0){
       clearInterval(counter);
       console.log('DONE!');
     }
     else {
       console.log(counter);
     }
 
   },1000)
 }
  //Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.
 function randomGame(){
   let n;
   let count = 0;
   let duration = setInterval(function(){
      n = Math.random();
    count++ //<===Messed up here not including count within set uuuughh...lol
     if(n > .75) {
       clearInterval(duration);
       console.log("Attempted Tries: " + count );
      } },1000)
 }