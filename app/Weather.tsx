// Weather.tsx
import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WeatherItem } from "@/App";
import { weatherType } from "./utils/weatherType";




const Weather = ({ weatherData }: {weatherData: WeatherItem}) => {
  const {
    main: { feels_like, temp, temp_max, temp_min },
    weather: [{ main }],
  } = weatherData;

  const icon = weatherType[main].icon as keyof typeof Feather.glyphMap;
  const msg = weatherType[main].message;
  const bg = weatherType[main].backgroundColor;

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: bg }}>
      <View className="flex-1 items-center justify-center">
        <Feather name={icon} color="white" size={100} />
        <Text className="font-bold text-4xl tracking-wide text-white">
          Temperature: {Math.round(temp)}°
        </Text>
        <Text className="font-semibold text-3xl text-white">
          Feels Like: {Math.round(feels_like)}°
        </Text>
        <View className="flex-row gap-5">
          <Text className="font-bold text-2xl text-white">
            High: {Math.round(temp_max)}°
          </Text>
          <Text className="font-bold text-2xl text-white">
            Low: {Math.round(temp_min)}°
          </Text>
        </View>
      </View>
      <View className="flex-col justify-end ml-2 mb-2 gap-y-1">
        <Text className="text-4xl text-white">{main}</Text>
        <Text className="text-3xl text-white">{msg}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Weather;