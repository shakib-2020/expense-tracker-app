// models/Category.js

export default class Category {
  constructor(name, icon = "🧾") {
    this.name = name;
    this.icon = icon;
  }

  toJSON() {
    return {
      name: this.name,
      icon: this.icon,
    };
  }

  static fromJSON(json) {
    return new Category(json.name, json.icon);
  }
}
