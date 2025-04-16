// App.js
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Button } from "react-native";
import { saveData, loadData } from "./src/utils/storage";
import ExpenseManager from "./src/managers/ExpenseManager";
import CategoryManager from "./src/managers/CategoryManager";
import ExpenseForm from "./src/components/ExpenseForm";
import ExpenseList from "./src/components/ExpenseList";
import CategoryManagerView from "./src/components/CategoryManagerView";
import Expense from "./src/models/Expense";
// import ExpenseChart from "./components/ExpenseChart";

// Initialize managers
const expenseManager = new ExpenseManager();
const categoryManager = new CategoryManager();

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState(categoryManager.getAll());

  // Load data from AsyncStorage on initial mount
  useEffect(() => {
    const loadAppData = async () => {
      const storedExpenses = await loadData("expenses");
      const storedCategories = await loadData("categories");
      expenseManager.loadFromJSON(storedExpenses || []);
      categoryManager.loadFromJSON(storedCategories || []);
      setExpenses(expenseManager.getAll());
      setCategories(categoryManager.getAll());
    };
    loadAppData();
  }, []);

  // Save data to AsyncStorage on any change
  useEffect(() => {
    saveData("expenses", expenseManager.toJSON());
    saveData("categories", categoryManager.toJSON());
  }, [expenses, categories]);

  // Add expense function
  const handleAddExpense = (description, amount, category) => {
    const newExpense = new Expense(description, amount, category);
    expenseManager.addExpense(newExpense);
    setExpenses(expenseManager.getAll());
  };

  // Delete expense function
  const handleDeleteExpense = (expenseToDelete) => {
    expenseManager.deleteExpense(expenseToDelete);
    setExpenses(expenseManager.getAll());
  };

  // Add category function
  const handleAddCategory = (category) => {
    categoryManager.addCategory(category);
    setCategories(categoryManager.getAll());
  };

  // Delete category function
  const handleDeleteCategory = (categoryName) => {
    categoryManager.deleteCategory(categoryName);
    setCategories(categoryManager.getAll());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ExpenseForm categories={categories} onAddExpense={handleAddExpense} />
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
        <CategoryManagerView
          categories={categories}
          onAddCategory={handleAddCategory}
          onDeleteCategory={handleDeleteCategory}
        />
        {/* <ExpenseChart expenses={expenses} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
});
