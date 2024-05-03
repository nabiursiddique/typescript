{
  //! utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // Pick type
  type Name = Pick<Person, "name">;
  type NameAge = Pick<Person, "name" | "age">;

  // Omit type (bad daua)
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required type (all property will be required)
  type PersonRequired = Required<Person>;

  // Partial type
  type PersonPartial = Partial<Person>;

  // Readonly type (value will be unchangeable)
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "Nabil",
    age: 24,
    contactNo: "01303",
  };

  // Record type

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const emptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  //
}
