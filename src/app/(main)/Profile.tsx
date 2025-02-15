import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "@/src/components/ProfileHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import LottieView from "lottie-react-native";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Animation from "@/src/constant/Animation";
const Profile = () => {
  const animation = useRef<LottieView>(null);

  return (
    <SafeAreaView className="w-full h-full bg-[#212121]">
      <View className="w-full h-full bg-white">
        <ProfileHeader />
        <View className="w-full relative top-[-70]   flex px-10 items-center justify-center">
          <View className="w-full bg-zinc-100 rounded-xl px-4 flex gap-10 py-3">
            <TouchableOpacity className="w-full flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <AntDesign name="edit" size={24} color="black" />
                <Text>Edit Profile Name</Text>
              </View>
              <View>
                <Feather name="arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="w-full flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <SimpleLineIcons name="menu" size={24} color="black" />
                <Text>List Property</Text>
              </View>
              <View>
                <Feather name="arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="w-full flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <Entypo name="lock-open" size={24} color="black" />
                <Text>Change Password</Text>
              </View>
              <View>
                <Feather name="arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="w-full flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <Ionicons name="people" size={24} color="black" />
                <Text>Customer Care</Text>
              </View>
              <View>
                <Feather name="arrow-right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="w-full flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="logout" size={24} color="red" />
                <Text className="text-red-500">Log Out</Text>
              </View>
              <View>
                <Feather name="arrow-right" size={24} color="red" />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 200,
                height: 200,
                backgroundColor: "white",
              }}
              // Find more Lottie files at https://lottiefiles.com/featured
              source={Animation.Security}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
