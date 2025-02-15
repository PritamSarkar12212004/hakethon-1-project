import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigate from "@/src/components/view/MainNavigate";
import Entypo from "@expo/vector-icons/Entypo";
import * as ImagePicker from "expo-image-picker";

const index = () => {
  const [image, setImage] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);
  const [image3, setImage3] = useState<string | null>(null);
  const [image4, setImage4] = useState<string | null>(null);
  const [image5, setImage5] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage2(result.assets[0].uri);
    }
  };
  const pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage3(result.assets[0].uri);
    }
  };
  const pickImage4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage4(result.assets[0].uri);
    }
  };
  const pickImage5 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage5(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <ScrollView>
        <View className="w-full  px-3">
          <MainNavigate title={"Upload"} />
        </View>
        <View className="w-full flex justify-center items-center px-3 gap-5 mt-5">
          <TouchableOpacity
            onPress={() => pickImage()}
            activeOpacity={0.8}
            className="w-full h-64 rounded-3xl bg-[#ffebbb] flex items-center justify-center"
          >
            {image ? (
              <Image
                source={{ uri: image }}
                className="w-full h-full rounded-3xl"
              />
            ) : (
              <View className="flex items-center justify-center gap-5">
                <Entypo name="images" size={50} color="black" />
                <Text>Upload your photo</Text>
              </View>
            )}
          </TouchableOpacity>
          <View className="w-full flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => pickImage2()}
              activeOpacity={0.8}
              className="w-[48%] h-52 rounded-3xl bg-[#a2a8d3] flex items-center justify-center"
            >
              {image2 ? (
                <Image
                  source={{ uri: image2 }}
                  className="w-full h-full rounded-3xl"
                />
              ) : (
                <View className="flex items-center justify-center gap-5">
                  <Entypo name="images" size={50} color="black" />
                  <Text>Upload your photo</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage3()}
              activeOpacity={0.8}
              className="w-[48%]  h-52 rounded-3xl bg-[#fdffcd] flex items-center justify-center"
            >
              {image3 ? (
                <Image
                  source={{ uri: image3 }}
                  className="w-full h-full rounded-3xl"
                />
              ) : (
                <View className="flex items-center justify-center gap-5">
                  <Entypo name="images" size={50} color="black" />
                  <Text>Upload your photo</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View className="w-full flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => pickImage4()}
              activeOpacity={0.8}
              className="w-[48%] h-52 rounded-3xl bg-[#a2a8d3] flex items-center justify-center"
            >
              <View className="flex items-center justify-center gap-5">
                <Entypo name="images" size={40} color="black" />
                <Text>Upload your photo</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage5()}
              activeOpacity={0.8}
              className="w-[48%]  h-52 rounded-3xl bg-[#fdffcd] flex items-center justify-center"
            >
              {image5 ? (
                <Image
                  source={{ uri: image5 }}
                  className="w-full h-full rounded-3xl"
                />
              ) : (
                <View className="flex items-center justify-center gap-5">
                  <Entypo name="images" size={40} color="black" />
                  <Text>Upload your photo</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full px-3 mt-5 mb-96">
          <Text className="text-2xl font-semibold">Details</Text>
          <View className="w-full flex gap-5">
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Name of the Property Owner"
              keyboardType="default"
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Rent of the property"
              keyboardType="numeric"
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Owner Contact Number"
              keyboardType="numeric"
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Property Full Address"
              keyboardType="default"
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Pin Code"
              keyboardType="number-pad"
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Soil Type"
              keyboardType="default"
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Facilities"
              keyboardType="default"
            />
            <View style={{ padding: 10 }}>
              <TextInput
                placeholder="Enter description..."
                multiline
                numberOfLines={4}
                style={{
                  height: 120, // Adjust height as needed
                  borderWidth: 1,
                  borderColor: "#ccc",
                  padding: 10,
                  borderRadius: 5,
                  textAlignVertical: "top", // Ensures text starts from the top
                }}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              className="w-full bg-blue-500 rounded-3xl"
            >
              <Text className="text-center text-white font-bold text-lg py-5">
                Upload Kand
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
