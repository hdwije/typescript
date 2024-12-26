type Add = (a: number, b: number) => number;

// Works because `x` and `y` match `a` and `b` in type
const sum: Add = (x, y) => x + y;

console.log(sum(3, 4)); // Output: 7
