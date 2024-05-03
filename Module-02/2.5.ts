{
  //!Function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<boolean>(true);
  const resGeneric1 = createArrayWithGeneric<string>("Hello");

  //   type User = {
  //     id: number;
  //     name: string;
  //   };

  interface User {
    id: number;
    name: string;
  }

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr.Nabil",
  });

  //-------------------------><-------------------------

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res2 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const resGeneric2 = createArrayWithTuple<string, {}>("Bangladesh", {
    name: "Asia",
  });

  //-------------------------><-------------------------
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "Mr.Y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });

  //
}
