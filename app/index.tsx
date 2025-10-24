import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Weather from "./Weather";
import CurrentWeather from "./CurrentWeather";

export default function Index() {
  return (
    <View className="flex-1">
      <CurrentWeather />
    </View>
  );
}
