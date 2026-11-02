
// var allows re-assignment

var employeeId = 101;
employeeId = 102;

console.log("var:", employeeId);

// let allows re-assignment

let salary = 25000;
salary = 30000;

console.log("let:", salary);

// const does not allow re-assignment

const department = "QA";
// department = "Development"; // TypeError

console.log("const:", department);
