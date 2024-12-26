interface Point {
  x: number;
  y: number;
}

const point3D = { x: 10, y: 20, z: 30 };
const point2D: Point = point3D; // Works because `point3D` has at least `x` and `y`

console.log(point2D); // Output: { x: 10, y: 20, z: 30 }
