function scuberGreetingForFeet(someFeet){
  if (someFeet < 400) {
    return 'This one is on me!'
  }
  else if (someFeet < 2000) {
    return "That will be twenty bucks."
  }
  else if (someFeet <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (someFeet > 2500) {
    return "No can do."
  }
}
function ternaryCheckCity(someCity){
  if (someCity === 'NYC') {
    return 'Ok, sounds good.'
  }
  else if (someCity !== 'NYC'){
    return 'No go.'
  }
}
function switchOnCharmFromTip(tipDescription){
  if (tipDescription === "generous") {
    return 'Thank you so much.'
  } 
  else if (tipDescription === "not as generous"){
    return 'Thank you.'
  }
  else {
    return 'Bye.'
  }
}