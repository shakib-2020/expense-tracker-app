// models/Expense.js
import Transaction from "./Transaction";

export default class Expense extends Transaction {
  constructor(description, amount, category, date = new Date()) {
    super(amount, date);
    this.description = description;
    this.category = category;
  }

  getDetails() {
    return `${this.description} | $${this.amount} | ${
      this.category?.name || "Uncategorized"
    } on ${this.date.toDateString()}`;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      description: this.description,
      category: this.category,
    };
  }

  static fromJSON(json) {
    return new Expense(
      json.description,
      json.amount,
      json.category,
      new Date(json.date)
    );
  }
}
