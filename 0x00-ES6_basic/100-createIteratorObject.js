export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }
  return employees;
}
