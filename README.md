# 💰 Expense Tracker (React Native + OOP)

A mobile expense tracker built with **React Native**, focused on applying **JavaScript OOP concepts** with modern UI, persistent storage, and data visualization.

---

## ✨ Features

- 🔁 Built with **JavaScript OOP** principles
- 📊 Expense chart with `react-native-gifted-charts`
- 📂 Add & delete categories (2 demo categories included)
- 💾 Persistent data using `AsyncStorage`
- 📅 Show expenses by date
- 🔃 Custom `useStorage` hook
- 📱 Clean and user-friendly UI

---
## 💡 OOP Concepts Used

✅ **Class-Based Structure**  
Used dedicated classes like `ExpenseManager`, `CategoryManager`, `Transaction`, and `Expense` to manage the core logic of the app in an organized, reusable way.

✅ **Encapsulation**  
Internal state and methods (e.g., managing expenses, categories) are encapsulated within classes, exposing only necessary public methods like `addExpense()` and `getCategories()`.

✅ **Abstraction**  
The UI components interact with these classes through simple method calls, without needing to understand internal logic — promoting clear separation of concerns.

✅ **Inheritance**  
`Expense` class extends the base `Transaction` class, reusing shared functionality between transaction types — demonstrating classic inheritance in practice.

✅ **Composition**  
Built with focused, reusable components (`ExpenseForm`, `ExpenseList`, `CategoryManager`, etc.) and composed them to build a clean, interactive UI.

✅ **Single Responsibility Principle (SRP)**  
Each class (e.g., `ExpenseManager`, `CategoryManager`) and component has one clearly defined responsibility, keeping code modular and maintainable.

✅ **Clean and Modular Architecture**  
Project is organized into folders like `managers/`,`models/`, `hooks/`, `components/`, and `utils/` — separating logic, UI, and helpers for better scalability and structure.

---

## 🖼️ Screenshots

| Home Screen | Add Expenses | Add Categories |
|-------------|------------|------------|
| ![home](./screenshot/home.png) | ![addExpenses](./screenshot/expenses.png) | ![addCategories](./screenshot/categories.png) |

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/expense-tracker-oop.git
cd expense-tracker-oop
npm install
npx expo run:android (for android)
npx expo run:ios (for ios)

```

---

Made with ❤️ by Shakib


