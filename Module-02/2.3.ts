{
  //! generic type (generic=generalize)

  // type GenericArray = Array<number>;
  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 5, 6];
  // const rollNumbers: Array<number> = [3, 5, 6];
  const rollNumbers: GenericArray<number> = [3, 5, 6];

  // const mentors: string[] = ["mr.x", "mr.y", "mr.z"];
  // const mentors: Array<string> = ["mr.x", "mr.y", "mr.z"];
  const mentors: GenericArray<string> = ["mr.x", "mr.y", "mr.z"];

  // const boolArray: boolean[] = [true, false, true];
  // const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Nabiur",
      age: 24,
    },
    {
      name: "Jhankar",
      age: 120,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];
  // const Man: [string, string] = ["Mr.X", "Mr.Y"];
  const Man: GenericTuple<string, string> = ["Mr.X", "Mr.Y"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "Nabiur", email: "nabil@gmail.com" },
  ];

  //
}
