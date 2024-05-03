{
  // conditional type
  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; //conditional type

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  //   checking if sheikh have car / bike / ship / tractor
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type hasBike = CheckVehicle<"car">;
  type hasTractor = CheckVehicle<"tractor">;

  //
}
