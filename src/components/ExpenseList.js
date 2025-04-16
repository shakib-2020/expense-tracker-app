// components/ExpenseList.js
import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

export default function ExpenseList({ expenses, onDeleteExpense }) {
  const RenderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.getDetails()}</Text>
      <Button title="Delete" onPress={() => onDeleteExpense(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      {expenses.map((item, index) => (
        <RenderItem key={index} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
});
