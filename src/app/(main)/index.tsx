import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/Header";
import MainCard from "@/src/components/MainCard";
import AxiosInstance from "@/src/utils/axios/AxiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userContext } from "@/src/context/ContextApi";

const index = () => {
  const [data, setdata] = useState(null);
  const { user, setuser } = userContext();
  const authSync = async () => {
    const auth = await AsyncStorage.getItem("auth");
    setuser(JSON.parse(auth));
  };
  useEffect(() => {
    authSync();
    AxiosInstance.post("fetch/product")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <SafeAreaView className="bg-[#212121]">
      <ScrollView>
        <View className="w-full   bg-white ">
          <Header />
          <View className="w-full mt-24 px-2 gap-5 flex items-center justify-center mb-36">
            <MainCard data={data} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
