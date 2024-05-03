{
  //Constrains in typescript

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student = addCourseToStudent({
    id: 105,
    name: "Nabil",
    email: "nabil@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 212,
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 320,
    name: "Mr.Y",
    email: "y@gmail.com",
    hasWatch: "Apple watch",
  });

  //
}
