// components/ExpenseForm.js
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "../theme/Colors";
export default function ExpenseForm({ categories, onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.name || ""
  );

  const handleSubmit = () => {
    if (!description || !amount) return;

    const categoryObj = categories.find((c) => c.name === selectedCategory);
    onAddExpense(description, parseFloat(amount), categoryObj);

    setDescription("");
    setAmount("");
    setSelectedCategory(categories[0]?.name || "");
  };

  return (
    <View style={styles.container}>
      <Text>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <Text>Amount:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text>Category:</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value)}
        style={styles.input}
      >
        {categories.map((cat) => (
          <Picker.Item
            label={`${cat.icon} ${cat.name}`}
            value={cat.name}
            key={cat.name}
          />
        ))}
      </Picker>

      <Button
        color={COLORS.primaryDark}
        title="Add Expense"
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, gap: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, borderRadius: 6 },
});
