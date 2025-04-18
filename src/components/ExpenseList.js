import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../theme/Colors";

export default function ExpenseList({ expenses, onDeleteExpense }) {
  const RenderItem = ({ item }) => {
    // {"amount": 100, "category": {"icon": "🍔", "name": "Food"}, "date": "2025-04-17T18:53:15.956Z", "description": "Lunch"}

    return (
      <View style={styles.itemContainer}>
        {/* Icon */}
        <Text style={styles.icon}>{item.category.icon}</Text>

        {/* Main content */}
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{item.getDetails()}</Text>
          <Text style={styles.category}>
            {item.category?.name || "Uncategorized"}
          </Text>
        </View>

        {/* Price and delete */}
        <View style={styles.rightSection}>
          <Text style={styles.amount}>৳{item.amount}</Text>
          <Pressable
            onPress={() => onDeleteExpense(item)}
            style={styles.deleteBtn}
          >
            <Text style={styles.deleteText}>🗑️</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.topContainer}>
      <Text style={styles.title}>Recent Expenses</Text>
      <FlatList
        scrollEnabled={false}
        data={expenses}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <RenderItem item={item} />}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  topContainer: {
    marginVertical: 10,
  },
  container: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    alignItems: "stretch",
    gap: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  category: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.primaryDark,
    fontSize: 14,
    color: "#fff",
    alignSelf: "flex-start",
    borderRadius: 5,
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 4,
  },
  deleteBtn: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  deleteText: {
    fontSize: 18,
    color: "#D9534F",
  },
});
