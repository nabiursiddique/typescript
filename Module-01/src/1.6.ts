{
  //TODO: Learning Function
  // 1.Normal Function
  // 2.Arrow Function

  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }

  add(2, 3);

  const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  // A function in a object is called method
  // object --> function ---> method

  const poorUser = {
    name: "Nabiur Siddique",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is: ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 3, 10];
  const newArr: number[] = arr.map(
    (element: number): number => element * element
  );
}
