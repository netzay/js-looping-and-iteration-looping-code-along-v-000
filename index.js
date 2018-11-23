// Code your solutions in this file
function printBadges(names){
  for (let i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.` )
  }
  return names;
}

function tailsNeverFails(){
  return Math.random() >= 0.5;
}
let countdown = 10;
while(tailsNeverFails()){
  console.log('You got 2 tails in a row.')
  
}