function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Both inclusive
console.log(getRandomInt(0, 10));

function addNums(num1, num2) {
    alert(num1 + num2);
}
//????Adds first prompt to the front of the second prompt????
addNums(prompt("1"), prompt("2"));