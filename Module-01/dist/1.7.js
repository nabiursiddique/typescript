"use strict";
{
    // Spread operator
    // Rest operator
    // destructuring
    //! Learn Spread operator
    //* Spread operator for array
    const bros1 = ["Mir", "Firoz", "Mizan"];
    const bros2 = ["Tonmoy", "Nahid", "Rahat"];
    bros1.push(...bros2);
    //* Spread operator for object
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        nextjs: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //! Learn Rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abdul", "Kabul", "Babul");
}
