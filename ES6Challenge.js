// Dados los siguientes arreglos de objetos completas la misión:

// cons courses = [
//   { _id: 1, title: "JavaScript I" },
//   { _id: 2, title: "HTML y CSS I" },
// ]

// const students = [
//   { _id: 1, name: "Pedro Perez" },
//   { _id: 2, name: "Maria Gomez" },
// ]

// const enrollments = [
//   { course_id: 1, student_id: 1 },
//   { course_id: 2, student_id: 1 },
//   { course_id: 2, student_id: 2 }
// ]

// Imprimir los cursos y los estudiantes de cada curso con el siguiente format:
// - JavaScript I
//   * Pedro Perez
// - HTML y CSS I
//   * Pedro Perez
//   * Maria Gomez

const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
]
const [{_id: course1Id, title: course1Title}, { _id: course2Id, title: course2Title}] = courses;
console.log(course1Id);


const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]

const [{_id: student1Id, name: student1Name}, { _id: student2id, name: student2name}] = students;

  
const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]
console.log(`- ${course1Title}
    * ${student1Name}
-${course2Title}
    ${student1Name}
    ${student2name}`);

console.log(`- ${student1Name}
    * ${course1Title}
    * ${course2Title}
- ${student2name}
    * ${course1Title}`);