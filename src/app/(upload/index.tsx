import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigate from "@/src/components/view/MainNavigate";
import Entypo from "@expo/vector-icons/Entypo";
import * as ImagePicker from "expo-image-picker";
import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  // Local image states
  const [image, setImage] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);
  const [image3, setImage3] = useState<string | null>(null);
  const [image4, setImage4] = useState<string | null>(null);
  const [image5, setImage5] = useState<string | null>(null);
  // detiles
  const [ownerContactNumber, seownerContactNumber] = useState<string>("");
  const [nameOwner, setnameOwner] = useState<string>("");
  const [rentProduct, setrentProduct] = useState<string>("");
  const [productAddress, setproductAddress] = useState<string>("");
  const [pinCodeProduct, setpinCodeProduct] = useState<string>("");
  const [soilType, setsoilType] = useState<string>("");
  const [productFacility, setproductFacility] = useState<string>("");
  const [productDis, setproductDis] = useState<string>("");

  // Uploading status state
  const [uploading, setUploading] = useState(false);

  // Separate states for uploaded Cloudinary URLs
  const [uploadedUrl1, setUploadedUrl1] = useState<string | null>(null);
  const [uploadedUrl2, setUploadedUrl2] = useState<string | null>(null);
  const [uploadedUrl3, setUploadedUrl3] = useState<string | null>(null);
  const [uploadedUrl4, setUploadedUrl4] = useState<string | null>(null);
  const [uploadedUrl5, setUploadedUrl5] = useState<string | null>(null);

  // Generic image picker function
  const pickImage = async (setImageFn: (uri: string) => void) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImageFn(result.assets[0].uri);
    }
  };
  const fainalCall = async () => {
    const user = await AsyncStorage.getItem("user");
    AxiosInstance.post("/product/upload", {
      ownerContactNumber: ownerContactNumber,
      user: user,
      nameOwner: nameOwner,
      rentProduct: rentProduct,
      productAddress: productAddress,
      pinCodeProduct: pinCodeProduct,
      soilType: soilType,
      productFacility: productFacility,
      productDis: productDis,
      uploadedUrl1: uploadedUrl1,
      uploadedUrl2: uploadedUrl2,
      uploadedUrl3: uploadedUrl3,
      uploadedUrl4: uploadedUrl4,
      uploadedUrl5: uploadedUrl5,
    });
    setUploading(false);
  };

  // Generic Cloudinary upload function
  const uploadImageToCloudinary = async (
    imageUri: string,
    imageName: string
  ): Promise<string | null> => {
    const data = new FormData();
    data.append("file", {
      uri: imageUri,
      type: "image/jpeg", // Adjust if needed
      name: `${imageName}.jpg`,
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
      console.log(`${imageName} upload result:`, result.secure_url);
      if (result.secure_url) {
        return result.secure_url;
      } else {
        alert(`Failed to upload ${imageName}.`);
        return null;
      }
    } catch (error) {
      console.error(`Upload error for ${imageName}:`, error);
      alert(`An error occurred during ${imageName} upload.`);
      return null;
    }
  };

  // Handler for uploading all images to Cloudinary
  const handleUpload = async () => {
    setUploading(true);

    if (image) {
      const url1 = await uploadImageToCloudinary(image, "image1");
      setUploadedUrl1(url1);
    }
    if (image2) {
      const url2 = await uploadImageToCloudinary(image2, "image2");
      setUploadedUrl2(url2);
    }
    if (image3) {
      const url3 = await uploadImageToCloudinary(image3, "image3");
      setUploadedUrl3(url3);
    }
    if (image4) {
      const url4 = await uploadImageToCloudinary(image4, "image4");
      setUploadedUrl4(url4);
    }
    if (image5) {
      const url5 = await uploadImageToCloudinary(image5, "image5");
      setUploadedUrl5(url5);
      fainalCall();
    }
  };

  const varifier = () => {
    if (
      ownerContactNumber &&
      nameOwner &&
      rentProduct &&
      productAddress &&
      pinCodeProduct &&
      soilType &&
      productFacility &&
      productDis
    ) {
      handleUpload();
    } else {
      alert("Please fill in all the fields.");
    }
  };
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <ScrollView>
        <View className="w-full px-3">
          <MainNavigate title={"Upload"} />
        </View>

        <View className="w-full flex justify-center items-center px-3 gap-5 mt-5">
          {/* First Image */}
          <TouchableOpacity
            onPress={() => pickImage(setImage)}
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

          {/* Second & Third Images */}
          <View className="w-full flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => pickImage(setImage2)}
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
              onPress={() => pickImage(setImage3)}
              activeOpacity={0.8}
              className="w-[48%] h-52 rounded-3xl bg-[#fdffcd] flex items-center justify-center"
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

          {/* Fourth & Fifth Images */}
          <View className="w-full flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => pickImage(setImage4)}
              activeOpacity={0.8}
              className="w-[48%] h-52 rounded-3xl bg-[#a2a8d3] flex items-center justify-center"
            >
              {image4 ? (
                <Image
                  source={{ uri: image4 }}
                  className="w-full h-full rounded-3xl"
                />
              ) : (
                <View className="flex items-center justify-center gap-5">
                  <Entypo name="images" size={40} color="black" />
                  <Text>Upload your photo</Text>
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => pickImage(setImage5)}
              activeOpacity={0.8}
              className="w-[48%] h-52 rounded-3xl bg-[#fdffcd] flex items-center justify-center"
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

        {/* Details Section */}
        <View className="w-full px-3 mt-5 mb-96">
          <Text className="text-2xl font-semibold">Details</Text>
          <View className="w-full flex gap-5">
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Name of the Property Owner"
              keyboardType="default"
              onChangeText={(text) => setnameOwner(text)}
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Rent of the property"
              keyboardType="numeric"
              onChangeText={(text) => setrentProduct(text)}
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Owner Contact Number"
              keyboardType="numeric"
              onChangeText={(text) => seownerContactNumber(text)}
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Property Full Address"
              keyboardType="default"
              onChangeText={(text) => setproductAddress(text)}
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Pin Code"
              keyboardType="number-pad"
              onChangeText={(text) => setpinCodeProduct(text)}
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Soil Type"
              keyboardType="default"
              onChangeText={(text) => setsoilType(text)}
            />
            <TextInput
              className="w-full h-14 rounded-xl font-bold bg-white border border-gray-300 px-3"
              placeholder="Facilities"
              keyboardType="default"
              onChangeText={(text) => setproductFacility(text)}
            />
            <View style={{ padding: 10 }}>
              <TextInput
                placeholder="Enter description..."
                multiline
                numberOfLines={4}
                style={{
                  height: 120,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  padding: 10,
                  borderRadius: 5,
                  textAlignVertical: "top",
                }}
                onChangeText={(text) => setproductDis(text)}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => varifier()}
              className="w-full bg-blue-500 rounded-3xl flex items-center justify-center"
            >
              {uploading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text className="text-center text-white font-bold text-lg py-5">
                  Upload
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
