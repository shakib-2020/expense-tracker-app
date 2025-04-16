// managers/ExpenseManager.js
import Expense from "../models/Expense";

export default class ExpenseManager {
  #expenses = [];

  addExpense(expense) {
    this.#expenses.push(expense);
  }

  getAll() {
    return [...this.#expenses];
  }

  getTotal() {
    return this.#expenses.reduce((sum, e) => sum + e.amount, 0);
  }

  getByCategory(categoryName) {
    return this.#expenses.filter((e) => e.category?.name === categoryName);
  }

  getByDate(dateStr) {
    return this.#expenses.filter(
      (e) => e.date.toDateString() === new Date(dateStr).toDateString()
    );
  }

  clearAll() {
    this.#expenses = [];
  }

  toJSON() {
    return this.#expenses.map((exp) => exp.toJSON());
  }

  loadFromJSON(jsonArr) {
    this.#expenses = jsonArr.map(Expense.fromJSON);
  }
}
