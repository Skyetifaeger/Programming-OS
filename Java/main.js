alert('you should guess a number 1-10000000')

var answer = 1.23;
var guess;

for (i=0; i<10000000; i++) {
    guess = prompt('guess, mortal');
    if (answer == guess) {
        alert("I'm surprized, good job")
        break;
    } if (guess < 2.23 && guess > -0.23){
        alert('very close');
    } else {
        alert('wrong');
    }
}