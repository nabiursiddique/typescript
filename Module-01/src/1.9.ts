{
  // Type Alias in object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: string;
    address: string;
  };

  const student1: Student = {
    name: "Nabil",
    age: 24,
    gender: "Male",
    contact: "01700000000",
    address: "Naogaon",
  };

  const student2: Student = {
    name: "Mir",
    age: 35,
    gender: "Male",
    address: "Dhaka",
  };

  const student3: Student = {
    name: "Mir",
    age: 35,
    gender: "Male",
    address: "Dhaka",
  };

  //  Type Alias in string
  type UserName = string;
  type IsAdmin = boolean;

  const username: UserName = "Nabiur Siddique";
  const isAdmin: IsAdmin = true;

  //   Type Alias for function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
