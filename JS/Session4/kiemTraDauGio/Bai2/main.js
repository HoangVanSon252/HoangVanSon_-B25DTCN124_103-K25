let number = 50;
let sum = 0;
for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
        sum += i;
    }else if (i % 5 === 0) {
        console.log('Buzz');
    }else{
        console.log(i);
    }
}
console.log(`Tổng các số đã in ra chữ Fizz là: ${sum}`);