
const { test, expect } = require('@playwright/test');

test('Grade Classification using if else', async () => {

    let mark = 85;
    let grade;

    if (mark < 0 || mark > 100) {
        grade = "Invalid mark";
    }
    else if (mark >= 90) {
        grade = "Grade A";
    }
    else if (mark >= 80) {
        grade = "Grade B";
    }
    else if (mark >= 70) {
        grade = "Grade C";
    }
    else if (mark >= 60) {
        grade = "Grade D";
    }
    else if (mark >= 50) {
        grade = "Grade E";
    }
    else {
        grade = "Grade F (Fail)";
    }

    console.log("Student Mark:", mark);
    console.log("Student Grade:", grade);

    expect(grade).toBe("Grade B");
});
