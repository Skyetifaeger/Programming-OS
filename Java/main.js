var hello = 'hello world';
var value = 3;
var value2 = 0;
console.log(value2);
var adds = 3 + value2

console.log(hello);

//adds 3 to value 2
console.log(3 + value2);
console.log(value == adds, 'if value2 is equal to adds');

if (value === adds){
    console.log('woah');
} else {
    console.log('not woah');
}

switch( value2 ) {
    case 0:
        console.log(value);
        break;
    case 2:
        console.log(value);
        break;
}

hello = 'goodbye world';

alert(hello);