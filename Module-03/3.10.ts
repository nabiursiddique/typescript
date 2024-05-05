{
  // Encapsulation
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      console.log(this._balance);
    }
  }

  const goriberAccount = new BankAccount(111, "Mr.Gorib", 20);
  goriberAccount.addDeposit(500);
  const myBalance = goriberAccount.getHiddenMethod();
  console.log(myBalance);

  //
}
