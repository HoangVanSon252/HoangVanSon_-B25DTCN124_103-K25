let n = -2;

if (n % 2 === 0) {
    console.log(`Số ${n} là số chẵn`);
}
else{
    console.log(`Số ${n} là số lẻ`);
}

if (n === 0) {
    console.log(`Số  ${n} = 0`);
}else if (n > 0) {
    console.log(`Số  ${n} là số dương`);
    console.log('Vì n > 0 nên các số từ 1 đến n là:');
    
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}else{
    console.log(`Số  ${n} là số âm`);
    console.log('Vì n < 0 nên: giá trị n không hợp lệ để tạo dãy số');
    
}
