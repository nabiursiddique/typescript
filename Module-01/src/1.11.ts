{
  //ternary operator || optional chaining || nullish coalescing operator
  const age: number = 5;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not adult");
  }

  //! Ternary operator
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  //!nullish coalescing operator
  //if we need to make decision based on null and undefined
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest"; //nullish operator (??) works only on null and undefined
  const result2 = isAuthenticated ? isAuthenticated : "Guest"; //ternary operator works on any thing
  console.log({ result1 }, { result2 });

  //! Optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Nabiur Siddique",
    address: {
      city: "Noagoan",
      road: "pani unnoin board",
      presentAddress: "Par Naogaon",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });
}
