interface Bird {
  fly(): void;
  layEggs(): void;
}

class Duck {
  fly() {
    console.log("Flying");
  }

  layEggs() {
    console.log("Laying eggs");
  }
}

// This works because Duck has the same shape as Bird
const bird: Bird = new Duck();

bird.fly(); // Output: Flying
bird.layEggs(); // Output: Laying eggs
