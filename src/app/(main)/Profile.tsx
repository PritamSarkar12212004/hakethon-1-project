import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import ImageCon from "@/src/constant/ImageCon";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Entypo, Feather } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-4">
        {/* Header */}
        <View className="items-center py-6">
          <Text className="text-3xl font-bold text-gray-900">Profile</Text>
        </View>

        {/* Profile Info */}
        <View className="flex-row items-center bg-gray-100 p-4 rounded-3xl shadow-md">
          <Image
            source={ImageCon.Profile}
            className="w-28 h-28 rounded-2xl"
            resizeMode="cover"
          />
          <View className="ml-4 flex-1">
            <Text className="text-2xl font-semibold text-gray-900">
              Pritam Sarkar
            </Text>
            <Text className="text-lg text-gray-600">Land Owner</Text>
            <View className="flex-row items-center mt-2 space-x-2">
              <MaterialIcons name="verified" size={20} color="green" />
              <Text className="text-lg text-gray-700">Verified</Text>
            </View>
            <View className="flex-row items-center mt-2 space-x-2">
              <Entypo name="location-pin" size={20} color="red" />
              <Text className="text-lg text-gray-700">Nagpur</Text>
            </View>
            <View className="flex-row items-center mt-2 space-x-2">
              <Feather name="smartphone" size={20} color="blue" />
              <Text className="text-lg text-gray-700">7796419792</Text>
            </View>
          </View>
        </View>

        {/* Documents */}
        <View className="bg-white p-5 rounded-3xl shadow-md mt-6">
          <Text className="text-xl font-bold text-gray-900 mb-3">
            📄 Listed Documents
          </Text>
          {['Aadhar Card', 'PAN Card', 'Ownership Proof'].map((doc, index) => (
            <View key={index} className="flex-row items-center space-x-2 mb-2">
              <Text className="text-lg font-medium text-gray-700">{index + 1}.</Text>
              <Text className="text-lg font-medium text-gray-700">{doc}</Text>
            </View>
          ))}
        </View>

        {/* Listed Lands */}
        <View className="bg-gray-900 p-6 rounded-3xl mt-8 shadow-lg">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-white">Listed Lands</Text>
            <TouchableOpacity>
              <Text className="text-xl font-bold text-blue-400">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="h-40 bg-gray-800 rounded-2xl flex items-center justify-center">
            <Text className="text-gray-400">No lands listed yet</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
