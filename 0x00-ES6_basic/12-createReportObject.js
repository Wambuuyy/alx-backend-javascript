import employeesList from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
  const departments = Object.keys(employeesList);
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return departments.length;
    },
  };
}
