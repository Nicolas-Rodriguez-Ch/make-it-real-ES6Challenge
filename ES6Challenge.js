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

 const loop = () => {
    let message = ``
    for (let i = 0; i < courses.length; i++) {
        for (let j = 0; j < enrollments.length; j++) {
            if (courses[i]._id === enrollments[j].course_id && enrollments[j].student_id === students[i]._id) {
                message += (`- ${courses[i].title}
    * ${students[i].name}`)
            }
        }
    }
    return message
 }
console.log(loop());