import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../theme/Colors";
import { useNavigation } from "@react-navigation/native";
const HomeHeroCard = ({ totalExpenses, addExpenseClick, addCategoryClick }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.heroCard}>
      <Text style={styles.expenseAmount}>৳{totalExpenses.toFixed(2)}</Text>
      <Text style={styles.subText}>Total Expenses This Month</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.addButton} onPress={addExpenseClick}>
          <Text style={styles.addButtonText}>+ Add Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={addCategoryClick}>
          <Text style={styles.addButtonText}>+ Add Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeroCard;

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: COLORS.primaryDark, // vibrant blue
    borderRadius: 20,
    padding: 20,
    alignSelf: "stretch",
  },
  expenseAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.textInverse,
    marginBottom: 8,
  },
  subText: {
    color: "#e0e0e0",
    fontSize: 16,
    marginBottom: 16,
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 5,
  },
  addButton: {
    backgroundColor: COLORS.textPrimary, // lighter blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "semibold",
    fontSize: 16,
  },
});
