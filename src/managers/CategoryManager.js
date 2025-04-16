// managers/CategoryManager.js
import Category from "../models/Category";

export default class CategoryManager {
  #categories = [];

  constructor() {
    this.#categories = [
      new Category("Food", "🍔"),
      new Category("Travel", "🚗"),
    ];
  }

  addCategory(category) {
    const exists = this.#categories.find((c) => c.name === category.name);
    if (!exists) this.#categories.push(category);
  }

  deleteCategory(name) {
    this.#categories = this.#categories.filter((c) => c.name !== name);
  }

  getAll() {
    return [...this.#categories];
  }

  findByName(name) {
    return this.#categories.find((c) => c.name === name);
  }

  toJSON() {
    return this.#categories.map((c) => c.toJSON());
  }

  loadFromJSON(jsonArr) {
    this.#categories = jsonArr.map(Category.fromJSON);
  }
}
