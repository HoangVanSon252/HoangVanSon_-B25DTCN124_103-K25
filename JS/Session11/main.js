let choice;
const students = [
  { name: "Lin Dan", age: 20, gpa: 8.5, status: "active" },
  { name: "Lee Choong Way", age: 22, gpa: 7.2, status: "inactive" },
  { name: "ChenLong", age: 19, gpa: 9.0, status: "active" },
];
const addStudent = (name, age, gpa, status, studentsArray) => {
  status = status === 1 ? "active" : "inactive";
  const student = { name, age, gpa, status };
  studentsArray.push(student);
  alert("Student added successfully!");
};

const readStudents = (studentsArray) => {
  if (studentsArray.length === 0) {
    alert("No students found.");
    return;
  }
  let studentList = "Student List:\n";
  studentsArray.forEach((student, index) => {
    studentList += `ID: ${index + 1} | Name: ${student.name} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}\n`;
  });
  alert(studentList);
};

const filterScholarshipCandidates = (studentsArray) => {
  const candidates = studentsArray.filter((student) => student.gpa > 8.0);
  if (candidates.length === 0) {
    alert("No scholarship candidates found.");
    return;
  }
  let candidateList = "Scholarship Candidates (GPA > 8.0):\n";
  candidates.forEach((student, index) => {
    candidateList += `ID: ${index + 1} | Name: ${student.name} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}\n`;
  });
  alert(candidateList);
};

const updateStudentProfile = (studentsArray) => {
  const id = parseInt(prompt("Enter student ID to update:"));
  const studentIndex = studentsArray.findIndex(
    (student, index) => index === id - 1,
  );
  if (studentIndex === -1) {
    alert("No student found with ID: " + id);
  }
  alert(`
    Found:
    ID: ${studentIndex + 1} | Name: ${studentsArray[studentIndex].name} | Age: ${studentsArray[studentIndex].age} | GPA: ${studentsArray[studentIndex].gpa} | Status: ${studentsArray[studentIndex].status}

    Leave blank to keep current value.
    `);
  const name = prompt(
    `New name (current: ${studentsArray[studentIndex].name}):`,
  );
  const gpa = prompt(`New GPA (current: ${studentsArray[studentIndex].gpa}):`);

  alert(`
    Student updated successfully!
    ID: ${studentIndex + 1} | Name: ${name || studentsArray[studentIndex].name} | Age: ${studentsArray[studentIndex].age} | GPA: ${gpa || studentsArray[studentIndex].gpa} | Status: ${studentsArray[studentIndex].status}
    `);
  studentsArray[studentIndex].name = name || studentsArray[studentIndex].name;
  studentsArray[studentIndex].gpa = gpa || studentsArray[studentIndex].gpa;
};

const deleteRecord = (studentsArray) => {
  let id = parseInt(prompt("Enter student ID to delete:"));
  let xacNhan;
  const studentIndex = studentsArray.findIndex(
    (student, index) => index === id - 1,
  );
  if (studentIndex === -1) {
    alert("No student found with ID: " + id);
    return;
  } else {
    xacNhan = prompt(`
      Are you sure you want to delete?
      ID: ${studentIndex + 1} | Name: ${studentsArray[studentIndex].name} | Age: ${studentsArray[studentIndex].age} | GPA: ${studentsArray[studentIndex].gpa} | Status: ${studentsArray[studentIndex].status}

      Type "yes" to comfirm:
      `);
    if (xacNhan.toLowerCase() !== "yes") {
      alert(`Student ${studentsArray[studentIndex].name} has been deleted.`);
      return;
    }
  }
  studentsArray.splice(studentIndex, 1);
  alert("Student deleted successfully!");
};

const complianceVerification = (studentsArray) => {
  const minors = studentsArray.filter((s) => s.age < 18);

  const inactiveStudents = studentsArray.filter((s) => s.status !== "active");

  const hasMinors = minors.length > 0;
  const allActive = inactiveStudents.length === 0;

  const minorNames = minors.map((s) => `${s.name} (Age: ${s.age})`).join(", ");
  const inactiveNames = inactiveStudents
    .map((s) => `${s.name} (Status: ${s.status})`)
    .join(", ");

  alert(`========== COMPLIANCE VERIFICATION ==========
  Has at least one student under 18: ${hasMinors ? "Yes" : "No"}
  Minors found:
  -> ${hasMinors ? minorNames : "None"}
  
  All students have "active" status: ${allActive ? "Yes" : "No"}
  Inactive students: 
  -> ${!allActive ? inactiveNames : "None"}`);
};
const academicStatistics = (studentsArray) => {
  if (studentsArray.length === 0) return alert("Danh sách trống!");

  let totalGPA = studentsArray.reduce((sum, student) => sum + student.gpa, 0);
  let averageGPA = (totalGPA / studentsArray.length).toFixed(2);

  // Khởi tạo max/min bằng phần tử đầu tiên
  let highestStudent = studentsArray.reduce(
    (max, s) => (s.gpa > max.gpa ? s : max),
    studentsArray[0],
  );
  let lowestStudent = studentsArray.reduce(
    (min, s) => (s.gpa < min.gpa ? s : min),
    studentsArray[0],
  );

  alert(`========== ACADEMIC STATISTICS ==========
  Average GPA: ${averageGPA}
  Highest GPA: ${highestStudent.name} (${highestStudent.gpa});
  Lowest GPA: ${lowestStudent.name} (${lowestStudent.gpa})`);
};

const dataNormalization = (studentsArray) => {
  let studentList = "";
  studentsArray.forEach((student, index) => {
    studentList += `ID: ${index + 1} | Name: ${student.name.toUpperCase()} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}\n`;
  });
  alert(`========== DATA NORMALIZATION ==========
    ---------------------------------------------
    ${studentList}
    ---------------------------------------------
    Total: ${studentsArray.length} students`);
};
do {
  choice = parseInt(
    prompt(`
    ===== STUDENT MANAGEMENT SYSTEM =====
    1. Add Student
    2. Read all Students
    3.Filter Scholarship Candidates(GPA > 8.0)
    4. Update Student Profile
    5. Delete Record
    6.Compliance Verification
    7. Academic Statistics
    8. Data Normalization
    0. Exit
    ====================================
    Enter your choice:
    `),
  );
  switch (choice) {
    case 1:
      const name = prompt("Enter student name:");
      const age = parseInt(prompt("Enter student age:"));
      const gpa = parseFloat(prompt("Enter student GPA:"));
      const status = +prompt("Enter student status (1(active), 0(inactive)):");
      addStudent(name, age, gpa, status, students);
      break;
    case 2:
      readStudents(students);
      break;
    case 3:
      filterScholarshipCandidates(students);
      break;
    case 4:
      updateStudentProfile(students);
      break;
    case 5:
      deleteRecord(students);
      break;
    case 6:
      complianceVerification(students);
      break;
    case 7:
      academicStatistics(students);
      break;
    case 8:
      dataNormalization(students);
      break;
    case 0:
      alert("Exiting the system. Goodbye!");
      break;
  }
} while (choice !== 0);
