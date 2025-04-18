import * as React from "react";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { COLORS } from "./src/theme/Colors";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: "Expense tracker",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTitleStyle: {
          fontWeight: "semibold",
        },
        headerShadowVisible: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
