interface Student {
  name: string;
  grade: string;
  rollNo: number;
}
function printStudentInfo(student: Student): void {
  if (student.grade) {
    console.log(
      `Name: ${student.name}, Roll No: ${student.rollNo} Grade: ${student.grade}`
    );
  } else {
    console.log(`Name: ${student.name}, Roll No: ${student.rollNo}`);
  }
}
const s1: Student = { name: "Rahul", rollNo: 101, grade: "B" };
const s2: Student = { name: "Anita", rollNo: 102, grade: "A" };
printStudentInfo(s1);
printStudentInfo(s2);
