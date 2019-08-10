function getEmployeeFactory() {
  let employeeNumber = 1;
  return function(name, country) {
    return { employeeNumber: employeeNumber++, name, country };
  };
}

const getEmployee = getEmployeeFactory();

const employeeOne = getEmployee('Robin', 'Germany');
//NOT POSSIBLE WITH CLOSURE
// employeeNumber = 50; 
const employeeTwo = getEmployee('Markus', 'Canada');

const employees = [employeeOne, employeeTwo];

console.log(employees);