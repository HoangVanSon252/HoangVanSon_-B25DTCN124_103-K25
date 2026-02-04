let students = ['Nam', 'Lan', 'Hùng', 'Nam'];
console.log(students);
let studentsNguoc = students.reverse();
console.log(studentsNguoc);
//không thay dổi độ dày chuỗi


for (let i = 0; i < students.length; i++) {
    if (students.includes('Lan')) {
        console.log('Tên Lan tôn tại trong mảng');
        break;
    }
    else{
        console.log('Tên lan không tồn tại trong mảng');
    }
}

for (let i = 0; i < students.length; i++) {
    if (students.includes('Nam')) {
        console.log('Tên Nam tôn tại trong mảng');
        console.log(students.indexOf('Nam'));
        break;
    }
    else{
        console.log('Tên Nam không tồn tại trong mảng');
    }
}