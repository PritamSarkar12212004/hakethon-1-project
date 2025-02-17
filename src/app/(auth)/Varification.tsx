import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { OtpInput } from "react-native-otp-entry";
import { userContext } from "@/src/context/ContextApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Verification = () => {
  const router = useRouter();
  const { otp, number } = userContext();

  const [numberError, setNumberError] = useState(false);
  const [otps, setOtp] = useState("");

  const authSeter = () => {
    AsyncStorage.setItem("number", number);
    AsyncStorage.setItem("temp", "true");
    router.replace("/(setup)");
  };
  const handleVerification = () => {
    console.log(otps, otp);
    if (otps.length !== 6) {
      setNumberError(true);
      console.log("not ok");
    } else if (otps === otp) {
      authSeter();
    } else {
      setNumberError(true);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4 pb-5">
        <View className="flex-1 pt-10">
          {/* Header */}
          <Text className="text-5xl font-extrabold leading-tight">
            <Text className="text-[#7d73e6cc]">V</Text>erify your Account
          </Text>
          <Text className="mt-2 font-semibold">
            Enter OTP to verify your account
          </Text>

          {/* OTP Input */}
          <View className="w-full mt-6 relative">
            <View className="absolute top-9 left-3">
              <AntDesign
                name="idcard"
                size={24}
                color={numberError ? "red" : "#7c73e6"}
              />
            </View>
            <OtpInput
              numberOfDigits={6}
              focusColor="#7c73e6"
              autoFocus
              hideStick
              blurOnFilled
              type="numeric"
              onTextChange={setOtp}
              theme={styles.otpTheme}
            />
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            onPress={() => handleVerification()}
            className="w-full h-16 bg-[#7c73e6] flex items-center justify-center rounded-2xl mt-10"
            activeOpacity={0.8}
          >
            <Text className="text-xl text-white font-semibold">Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  otpTheme: {
    containerStyle: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
    },
    pinCodeContainerStyle: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingVertical: 10,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F7F9FC",
    },
    pinCodeTextStyle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#333",
    },
    focusStickStyle: {
      backgroundColor: "#7c73e6",
      height: 2,
      width: "100%",
    },
    focusedPinCodeContainerStyle: {
      borderColor: "#7c73e6",
      borderWidth: 2,
    },
    filledPinCodeContainerStyle: {
      borderColor: "#34D399",
    },
    disabledPinCodeContainerStyle: {
      borderColor: "#ccc",
      backgroundColor: "#E5E7EB",
    },
    placeholderTextStyle: {
      color: "#A1A1AA",
    },
  },
});
