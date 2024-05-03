{
  //
  //! Interface

  // Use of type
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "Nabiur",
    age: 24,
    role: "manager",
  };

  type rollNumber = number;

  interface UserWithRole2 extends User1 {
    role: string;
  }

  // Use of interface
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "Siddique",
    age: 24,
    role: "manager",
  };

  //   js--> object, array-->object,function-->object

  //   use of type of and interface in array
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll1 = [1, 2, 3];
  const rollNumber2: Roll2 = [1, 2, 3];

  // Use of type of and interface in function
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add1 = (num1, num2) => num1 + num2;
  const add1: Add2 = (num1, num2) => num1 + num2;

  //
}
