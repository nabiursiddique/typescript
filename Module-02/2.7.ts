{
  //generic constrains using key of operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "MR.Persian",
    age: 26,
    address: "ctg",
  };

  const car = {
    model: "Toyota Primio",
    year: 2024,
  };

  // const result = getPropertyValue(user, "emni");
  const result1 = getPropertyValue(car, "model");

  // obj[key]

  //
}
