
function employeeDetails() {

    var employeeName = "John";
    let employeeAge = 25;
    const company = "Testleaf";

    console.log("Employee Name:", employeeName);
    console.log("Employee Age:", employeeAge);
    console.log("Company:", company);
}

employeeDetails();

// Variables declared inside the function
// cannot be accessed outside it.

// console.log(employeeName); // ReferenceError
// console.log(employeeAge);  // ReferenceError
// console.log(company);      // ReferenceError
