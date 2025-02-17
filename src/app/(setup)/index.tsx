import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setlocation] = useState("");
  const [image, setImage] = useState(
    "https://i.pinimg.com/736x/4c/60/42/4c6042228823e4a4657dc30425955222.jpg"
  );
  const [uploading, setUploading] = useState(false);

  // Function to pick an image from the device gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Update image state with the selected image's URI
      setImage(result.assets[0].uri);
    }
  };

  // Function to upload the image to Cloudinary using FormData
  const uploadImageToCloudinary = async () => {
    setUploading(true);

    // Create form data to send the image file and preset info
    const data = new FormData();
    data.append("file", {
      uri: image,
      type: "image/jpeg", // Adjust the type if needed (png, etc.)
      name: "profile.jpg",
    });
    data.append("upload_preset", "jaqmy681");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dftt4ow6q/image/upload",
        {
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const result = await response.json();
      console.log("Upload result:", result.secure_url);
      if (result.secure_url) {
        // Optionally update the image state with the Cloudinary URL
        setImage(result.secure_url);
        loginApicall();
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during upload.");
    } finally {
      setUploading(false);
    }
  };

  const mainss = async (res) => {
    await AsyncStorage.removeItem("temp");
    await AsyncStorage.setItem("auth", JSON.stringify(res.data[0]));
    router.replace("/(main)");
  };
  const loginApicall = () => {
    AxiosInstance.post("/user/register", {
      image: image,
      name: name,
      contact: contact,
      location: location,
    })
      .then((res) => {
        mainss(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <View className="flex-1 items-center justify-center space-y-8">
        {/* Profile Image */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={pickImage}
          className="relative"
        >
          <Image
            source={{ uri: image }}
            className="w-32 h-32 rounded-full border-2 border-gray-300 shadow-md"
          />
          <View className="absolute bottom-1 right-1 bg-blue-500 p-2 rounded-full shadow">
            <Feather name="camera" size={18} color="white" />
          </View>
        </TouchableOpacity>

        {/* Input Fields */}
        <View className="w-full space-y-5">
          <View>
            <Text className="text-gray-700 font-medium mb-1">Full Name</Text>
            <TextInput
              className="w-full h-12 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View>
            <Text className="text-gray-700 font-medium mb-1">
              Contact Number
            </Text>
            <TextInput
              keyboardType="numeric"
              className="w-full h-12 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              value={contact}
              onChangeText={setContact}
            />
          </View>

          <View>
            <Text className="text-gray-700 font-medium mb-1">User Address</Text>
            <TextInput
              keyboardType="default"
              className="w-full h-12 bg-gray-100 border border-gray-300 rounded-lg px-4 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              value={location}
              onChangeText={setlocation}
            />
          </View>
        </View>

        {/* Upload Button */}
        <TouchableOpacity
          onPress={uploadImageToCloudinary}
          disabled={uploading}
          className="w-full mt-10 h-14 bg-blue-500 rounded-lg shadow-md items-center justify-center"
        >
          {uploading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text className="text-white text-lg font-semibold">Upload</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
