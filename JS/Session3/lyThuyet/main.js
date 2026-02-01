
for (let i = 1; i <= 10; i++) {
    let temp = i;
    while (temp > 1) {
        temp = temp - 2;
    }

    if (temp === 0) {
        console.log(i + " là số chẵn");
    } else {
        console.log(i + " là số lẻ");
    }
}