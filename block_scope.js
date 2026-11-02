
{
    var x = 10;
    let y = 20;
    const z = 30;

    console.log("Inside block - x:", x);
    console.log("Inside block - y:", y);
    console.log("Inside block - z:", z);
}

console.log("Outside block - x:", x);

// let and const cannot be accessed outside the block

// console.log(y); // ReferenceError
// console.log(z); // ReferenceError
