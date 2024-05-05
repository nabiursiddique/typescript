{
  // Abstraction In OOP
  // We can do abstraction in two ways: 1.By using Interface 2.By using abstraction class

  //** Abstraction using interface **/

  //   idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("Iam starting the car engine");
    }
    stopEngine(): void {
      console.log("Iam stopping the car engine");
    }
    move(): void {
      console.log("Iam moving the car");
    }
    test() {
      console.log("Iam just testing");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //** Abstraction using abstract class */

  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("Iam just testing");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("Iam starting the car engine");
    }
    stopEngine(): void {
      console.log("Iam stopping the car engine");
    }
    move(): void {
      console.log("Iam moving the car");
    }
  }

  //
}
