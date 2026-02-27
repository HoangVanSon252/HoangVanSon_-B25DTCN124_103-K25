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
      deleteRecord();
      break;
    case 6:
      complianceVerification();
      break;
    case 7:
      academicStatistics();
      break;
    case 8:
      dataNormalization();
      break;
    case 0:
      alert("Exiting the system. Goodbye!");
      break;
  }
} while (choice !== 0);
