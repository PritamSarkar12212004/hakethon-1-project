import { View, Text } from "react-native";
import React from "react";
import "../../global.css";
import { Stack } from "expo-router";
import { ContextProvider } from "../context/ContextApi";

const _layout = () => {
  return (
    <ContextProvider>
      <MainLayout />;
    </ContextProvider>
  );
};
const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default _layout;
