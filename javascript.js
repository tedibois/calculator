//audioElement.play();
//add
//subtract
//multiply
//divide
function add (...theArgs){
   let total = 0;
   for (const arg of theArgs) {
    total += arg;
   }
   return total
}
function subtract (...theArgs) {
    if (theArgs.length === 0) return 0;

}
function multiply (...theArgs) {
    if (theArgs.length === 0) return 1;
    let total = theArgs[0];
    for (let i = 1; i < theArgs.length; i++){
        total *= theArgs[i];
    }
    return total
}
function divide (...theArgs) {
    return a / b;
}
console.log(add(10,5,5,10))
console.log(multiply(10,5,5,10))