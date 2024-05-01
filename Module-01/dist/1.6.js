"use strict";
{
    //TODO: Learning Function
    // 1.Normal Function
    // 2.Arrow Function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(2, 3);
    const addArrow = (num1, num2) => {
        return num1 + num2;
    };
    // A function in a object is called method
    // object --> function ---> method
    const poorUser = {
        name: "Nabiur Siddique",
        balance: 0,
        addBalance(balance) {
            return `My new balance is: ${this.balance + balance}`;
        },
    };
    const arr = [1, 3, 10];
    const newArr = arr.map((element) => element * element);
}
