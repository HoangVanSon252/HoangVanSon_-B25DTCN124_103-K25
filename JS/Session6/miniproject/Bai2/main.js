let arr = [100, 200, 300, 400];
for (const element of arr) {
    console.log(element);
}
for (const index in arr) {
    console.log(`Vị trí của ${arr[index]} là ${index}`);    
}
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        sum += arr[i];
    }
}
console.log(`Tổng các phần tử trong mảng có chỉ số index chẵn là ${sum}`);
