// models/Transaction.js

export default class Transaction {
  constructor(amount, date = new Date()) {
    this.amount = parseFloat(amount);
    this.date = new Date(date); // Supports string -> Date
  }

  getDetails() {
    return `Amount: $${this.amount} on ${this.date.toDateString()}`;
  }

  toJSON() {
    return {
      amount: this.amount,
      date: this.date.toISOString(),
    };
  }

  static fromJSON(json) {
    return new Transaction(json.amount, new Date(json.date));
  }
}
