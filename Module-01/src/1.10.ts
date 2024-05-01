{
  //union types
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "B+" | "AB+";
  //   };

  //   const user1: User = {
  //     name: "Nabiur Siddique",
  //     gender: "male",
  //     bloodGroup: "B+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "ExpressJS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
