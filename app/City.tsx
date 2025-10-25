import { ImageBackground, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatherIcon from "./Components/FeatherIcon";
const City = ({weatherData}: {weatherData: object | null}) => {
  return (
    
      <ImageBackground
        className="flex-1 opacity-80"
        style={{marginTop: StatusBar.currentHeight || 0}}
        source={require("../assets/images/cityBg.jpg")}
      >
        <SafeAreaView className="flex-1 items-center">
          <Text className="text-3xl font-bold text-rose-600">London</Text>
          <Text className="text-2xl font-semibold text-rose-600">UK</Text>
          <View className="flex-1 justify-center items-center">
            <FeatherIcon iconName="user" color="black" size={75} text="8000" />
          </View>
        </SafeAreaView>
        <View className="flex-1 flex-row gap-x-[50px] items-start justify-center">
          <View className="flex-col items-center">
            <FeatherIcon
              iconName="sunrise"
              color="white"
              size={50}
              text="05:00:00"
            />
          </View>
          <View className="flex-col items-center">
            <FeatherIcon
              iconName="sunset"
              color="white"
              size={50}
              text="17:00:00"
            />
          </View>
        </View>
      </ImageBackground>
  );
};
export default City;
