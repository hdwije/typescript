"use strict";
class Duck {
    fly() {
        console.log("Flying");
    }
    layEggs() {
        console.log("Laying eggs");
    }
}
// This works because Duck has the same shape as Bird
const bird = new Duck();
bird.fly(); // Output: Flying
bird.layEggs(); // Output: Laying eggs
