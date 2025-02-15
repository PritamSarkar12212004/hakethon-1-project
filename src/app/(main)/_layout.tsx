import React from "react";
import { Tabs } from "expo-router";
import { Image, StatusBar, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
const _layout = () => {
  return <_layout1 />;
};
const _layout1 = () => {
  return (
    <>
      <StatusBar hidden />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            borderRadius: 30,
            position: "absolute",
            bottom: 40,
            marginHorizontal: 25,
            paddingHorizontal: 20,

            height: 60,
            backgroundColor: "#2C3930",
            borderWidth: 0,
            elevation: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            borderTopColor: "transparent",
            shadowRadius: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon({ focused }) {
              return (
                <View
                  className={`w-12 h-12 rounded-full ${
                    focused ? "bg-[#78A083]" : null
                  } mt-5 flex items-center justify-center`}
                >
                  <Entypo name="home" size={27} color="white" />
                </View>
              );
            },
          }}
        />

        <Tabs.Screen
          name="Search"
          options={{
            tabBarIcon({ focused }) {
              return (
                <View
                  className={`w-12 h-12 rounded-full ${
                    focused ? "bg-[#78A083]" : null
                  } mt-5 flex items-center justify-center`}
                >
                  <AntDesign name="search1" size={24} color="white" />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="Upload"
          options={{
            tabBarIcon({ focused }) {
              return (
                <View
                  className={`w-12 h-12 rounded-full ${
                    focused ? "bg-[#78A083]" : null
                  } mt-5 flex items-center justify-center`}
                >
                  <Feather name="upload-cloud" size={27} color="white" />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon({ focused }) {
              return (
                <View
                  className={`w-12 h-12 rounded-full ${
                    focused ? "bg-[#78A083]" : null
                  } mt-5 flex items-center justify-center`}
                >
                  <MaterialIcons
                    name="admin-panel-settings"
                    size={35}
                    color="white"
                  />
                </View>
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;
