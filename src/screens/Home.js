// App.js
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Modal,
  View,
  Pressable,
  Text,
} from "react-native";
import { saveData, loadData } from "../utils/storage";
import ExpenseManager from "../managers/ExpenseManager";
import CategoryManager from "../managers/CategoryManager";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import CategoryManagerView from "../components/CategoryManagerView";
import Expense from "../models/Expense";
import ExpenseChart from "../components/ExpenseChart";
import HomeHeroCard from "../components/HomeHeroCard";
import { COLORS } from "../theme/Colors";

// Initialize managers
const expenseManager = new ExpenseManager();
const categoryManager = new CategoryManager();

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState(categoryManager.getAll());
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [isExpenseModalVisible, setExpenseModalVisible] = useState(false);
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);

  // Load data from AsyncStorage on initial mount
  useEffect(() => {
    const loadAppData = async () => {
      const storedExpenses = await loadData("expenses");
      const storedCategories = await loadData("categories");
      expenseManager.loadFromJSON(storedExpenses || []);
      categoryManager.loadFromJSON(storedCategories || []);
      setExpenses(expenseManager.getAll());
      setCategories(categoryManager.getAll());
      setTotalExpenses(expenseManager.getTotal());
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
    setTotalExpenses(expenseManager.getTotal());
    closeExpenseModal();
  };

  // Delete expense function
  const handleDeleteExpense = (expenseToDelete) => {
    expenseManager.deleteExpense(expenseToDelete);
    setExpenses(expenseManager.getAll());
    setTotalExpenses(expenseManager.getTotal());
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

  // Modal open/close functions
  const openExpenseModal = () => setExpenseModalVisible(true);
  const closeExpenseModal = () => setExpenseModalVisible(false);
  const openCategoryModal = () => setCategoryModalVisible(true);
  const closeCategoryModal = () => setCategoryModalVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <HomeHeroCard
          totalExpenses={totalExpenses}
          addExpenseClick={openExpenseModal}
          addCategoryClick={openCategoryModal}
        />

        {/* Expense Form & Category Manager Modal */}
        <Modal
          visible={isExpenseModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeExpenseModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Expense</Text>
              <ExpenseForm
                categories={categories}
                onAddExpense={handleAddExpense}
              />
              <Pressable onPress={closeExpenseModal} style={styles.closeBtn}>
                <Text style={styles.closeText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Category Manager Modal */}
        <Modal
          visible={isCategoryModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeCategoryModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Manage Categories</Text>
              <CategoryManagerView
                categories={categories}
                onAddCategory={handleAddCategory}
                onDeleteCategory={handleDeleteCategory}
              />
              <Pressable onPress={closeCategoryModal} style={styles.closeBtn}>
                <Text style={styles.closeText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* Expense List */}
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
        {/* chart view */}
        <ExpenseChart expenses={expenses} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.background,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 10,
    textAlign: "center",
  },
  closeBtn: {
    marginTop: 10,
    alignSelf: "center",
    padding: 8,
  },
  closeText: {
    color: COLORS.error,
    fontSize: 16,
  },
});
