// // components/ExpenseChart.js
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { VictoryPie } from "victory-native";

// export default function ExpenseChart({ expenses }) {
//   const categoriesTotal = expenses.reduce((acc, expense) => {
//     const { category, amount } = expense;
//     const categoryName = category?.name || "Uncategorized";
//     acc[categoryName] = (acc[categoryName] || 0) + amount;
//     return acc;
//   }, {});

//   const chartData = Object.keys(categoriesTotal).map((category) => ({
//     x: category,
//     y: categoriesTotal[category],
//   }));

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Expenses by Category</Text>
//       <VictoryPie
//         data={chartData}
//         colorScale="qualitative"
//         style={{ labels: { fontSize: 12, fill: "white" } }}
//         innerRadius={50}
//         labelRadius={({ innerRadius }) => innerRadius + 15}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { alignItems: "center", marginTop: 20 },
//   title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
// });
