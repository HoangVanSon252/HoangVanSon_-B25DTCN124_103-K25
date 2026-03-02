let student = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" },
];

console.log("Yêu cầu 1");

const femaleList = (studentList) => {
  const femaleStudents = studentList.filter((s) => {
    return s.gender === "Nữ";
  });
  let maxScore = 0;
  const sortedFemaleStudents = femaleStudents.sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    } else if (a.score < b.score) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(sortedFemaleStudents);
};
femaleList(student);

console.log("Yêu cầu 2");
const listStudent = (studentArr) => {
  const allStudents = studentArr.filter((el) => {
    return el.score > 5;
  });
  console.log(allStudents.map((el) => el.name));
};
listStudent(student);

console.log("Yêu cầu 3");
const trungBinh = (studentList) => {
  const maleStudents = studentList.filter((s) => {
    return s.gender === "Nam";
  });
  const diemTrungBinhNam =
    maleStudents.reduce((acc, curr) => {
      return acc + curr.score;
    }, 0) / maleStudents.length;
  console.log(diemTrungBinhNam.toFixed(1));
};
trungBinh(student);
