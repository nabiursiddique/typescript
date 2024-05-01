// Reference type --> Object

const user: {
  school: "KD school"; //type --> literal Types
  readonly firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  school: "KD school",
  firstName: "Nabiur",
  middleName: "Siddique",
  lastName: "Nabil",
  isMarried: false,
};

console.log(user.school);

// we can not change value if it is readonly or literal type but we can change value if it's declared type is just string or any other data type
