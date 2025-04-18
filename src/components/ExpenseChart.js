// components/ExpenseChart.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function ExpenseChart({ expenses }) {
  if (!Array.isArray(expenses) || expenses.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No expenses to display</Text>
      </View>
    );
  }

  // Group expenses by category
  const categoriesTotal = expenses?.reduce((acc, expense) => {
    const categoryName = expense?.category?.name || "Uncategorized";
    acc[categoryName] = (acc[categoryName] || 0) + expense.amount;
    return acc;
  }, {});

  // Create pie chart data
  const chartData = Object.entries(categoriesTotal).map(
    ([name, amount], index) => ({
      value: amount,
      color: getColor(index),
      text: name,
    })
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses by Category</Text>
      <PieChart
        data={chartData}
        showText
        textColor="white"
        textSize={12}
        innerRadius={40}
        radius={100}
        focusOnPress
      />
    </View>
  );
}

// Simple color generator (you can customize this)
const getColor = (index) => {
  const colors = [
    "#277DA1",
    "#90BE6D",
    "#F94144",
    "#F3722C",
    "#577590",
    "#F9844A",
  ];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: { alignItems: "center", marginVertical: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
