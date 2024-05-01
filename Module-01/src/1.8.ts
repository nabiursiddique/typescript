{
  // Destructuring

  //* object destructuring (Explicit type declare not needed)
  const user = {
    id: 345,
    name: {
      firstName: "Nabiur",
      middleName: "Siddique",
      lastName: "Nabil",
    },
    contactNo: "01203721727",
    address: "Naogaon",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  //*  Array destructuring
  const myFriends = ["Zisan", "Rohit", "Utsab", "Rafi", "Xhuvo"];
  const [, , bestFriend, ...rest] = myFriends;
}
