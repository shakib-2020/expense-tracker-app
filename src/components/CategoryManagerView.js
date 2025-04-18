// components/CategoryManagerView.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { COLORS } from "../theme/Colors";

export default function CategoryManagerView({
  categories,
  onAddCategory,
  onDeleteCategory,
}) {
  const [categoryName, setCategoryName] = useState("");
  const [categoryIcon, setCategoryIcon] = useState("");

  const handleAddCategory = () => {
    if (categoryName && categoryIcon) {
      const newCategory = { name: categoryName, icon: categoryIcon };
      onAddCategory(newCategory);
      setCategoryName("");
      setCategoryIcon("");
    }
  };

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text
        style={{
          fontSize: 16,
        }}
      >
        {item.icon} {item.name}
      </Text>
      <Pressable
        onPress={() => onDeleteCategory(item.name)}
        style={styles.deleteBtn}
      >
        <Text
          style={{
            fontSize: 18,
          }}
        >
          🗑️
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Category Name"
        value={categoryName}
        onChangeText={setCategoryName}
      />
      <TextInput
        style={styles.input}
        placeholder="Category Icon"
        value={categoryIcon}
        onChangeText={setCategoryIcon}
      />
      <Button
        color={COLORS.primaryDark}
        title="Add Category"
        onPress={handleAddCategory}
      />

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 6 },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
