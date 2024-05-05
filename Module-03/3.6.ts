{
  // getter & setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //* setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //* getter
    get balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goriberAccount = new BankAccount(111, "Mr.Gorib", 50);

  //   goriberAccount.deposit = 20;
  //   goriberAccount.addDeposit(500);
  goriberAccount.deposit = 500;

  //   const myBalance = goriberAccount.getBalance();
  //   console.log(myBalance);
  const myBalance = goriberAccount.balance;
  console.log(myBalance);

  //
}
