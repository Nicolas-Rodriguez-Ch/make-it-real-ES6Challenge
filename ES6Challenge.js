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

const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]

const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]

 const courseEnrollment = () => {
    for (let i = 0; i < courses.length; i++) {
        console.log(`- ${courses[i].title}`);

        for(let k = 0; k < students.length; k++){
    
            for (let j = 0; j < enrollments.length; j++) {
                if (enrollments[j].course_id === courses[i]._id && enrollments[j].student_id === students[k]._id) {
                    console.log(` * ${students[k].name}`);
                }
            }

        }
    }
 }
courseEnrollment();

// Imprimir los estudiantes y los cursos a los que están matriculados con el siguiente formato:
// - Pedro Perez
//   * JavaScript I
//   * HTML y CSS I
// - Maria Gomez
//   * HTML y CSS I

const stundentCourse = () => {
    for (let i = 0; i < students.length; i++) {
        console.log(`- ${students[i].name}`);

        for(let k = 0; k < courses.length; k++){
    
            for (let j = 0; j < enrollments.length; j++) {
                if (enrollments[j].course_id === courses[k]._id && enrollments[j].student_id === students[i]._id) {
                    console.log(` * ${courses[k].title}`);
                }
            }

        }
    }
 }
stundentCourse();