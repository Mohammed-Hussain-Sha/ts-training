function printStudentInfo(student) {
    if (student.grade) {
        console.log("Name: ".concat(student.name, ", Roll No: ").concat(student.rollNo, " Grade: ").concat(student.grade));
    }
    else {
        console.log("Name: ".concat(student.name, ", Roll No: ").concat(student.rollNo));
    }
}
var s1 = { name: "Rahul", rollNo: 101, grade: "B" };
var s2 = { name: "Anita", rollNo: 102, grade: "A" };
printStudentInfo(s1);
printStudentInfo(s2);
