import { CityData } from "@/App";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatherIcon from "./components/FeatherIcon";
import { getFormattedTime } from "./utils/dateFormatter";
const City = ({ weatherData }: { weatherData: CityData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  const sunriseTime = getFormattedTime(sunrise * 1000);
  const sunsetTime = getFormattedTime(sunset * 1000);
  return (
    <ImageBackground
      className="flex-1 opacity-80"
      style={{ marginTop: StatusBar.currentHeight || 0 }}
      source={require("../assets/images/cityBg.jpg")}
    >
      <SafeAreaView className="flex-1 items-center">
        <Text className="text-3xl font-bold text-rose-600">{name}</Text>
        <Text className="text-2xl font-semibold text-rose-600">{country}</Text>
        <View className="flex-1 justify-center items-center">
          <FeatherIcon
            iconName="user"
            color="black"
            size={75}
            text={`Population: ${population}`}
          />
        </View>
      </SafeAreaView>
      <View className="flex-1 flex-row gap-x-[50px] items-start justify-center">
        <View className="flex-col items-center">
          <FeatherIcon
            iconName="sunrise"
            color="black"
            size={50}
            text={`Sunrise: ${sunriseTime}`}
          />
        </View>
        <View className="flex-col items-center">
          <FeatherIcon
            iconName="sunset"
            color="black"
            size={50}
            text={`Sunset: ${sunsetTime}`}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default City;
