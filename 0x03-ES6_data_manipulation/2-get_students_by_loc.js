export default function getStudentsByLocation(students, city) {
  return students.filter(({ location }) => location === city);
}