let student = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" },
];

const danhSach = (studentsArray) => {
  const listStudents = studentsArray.filter((student) => student.score >= 8);
  if (listStudents.length === 0) {
    alert("Không có sinh viên nào đạt yêu cầu.");
    return;
  }
  let studentList = "Danh sách sinh viên đạt yêu cầu:\n";
  listStudents.forEach((student) => {
    studentList += `ID: ${student.id} | Name: ${student.name} | Score: ${student.score} | Gender: ${student.gender}\n`;
  });
  console.log(studentList);
};
danhSach(student);

const diemTrungBinh = (studentsArray) => {
  const isSome = studentsArray.some((student) => student.score < 4);
  if (isSome) {
    console.log("Có sinh viên yếu");
    return;
  } else {
    console.log("Không có sinh viên yếu");
  }
};
diemTrungBinh(student);

const chuanHoa = (studentsArray) => {
  const studentLabels = studentsArray.map((el) => {
    return `Tên: ${el.name} - Điểm: ${el.score}`;
  });
  console.log(studentLabels);
};

chuanHoa(student);
