import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center px-4 h-full">
          {/* <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          /> */}
          <Text className="font-pblack  text-white text-4xl">StreamBox</Text>
          <Image
            source={images.cards}
            className="max-w--[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">StreamBox</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[146px] h-[15px] absolute -bottom-1 -right-0"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 font-pregular  text-center text-sm mt-7">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with StreamBox
          </Text>
          <CustomButton
            title={"Continue with Email"}
            handlePress={() => {}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
