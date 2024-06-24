export default function createReportObject(employeesList) {
  const departments = () => Object.keys(employeesList).length;
  return { allEmployees: employeesList, departments };
}
