import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
const Weather = () => {
  return (
    <SafeAreaView className="flex-1 bg-rose-400">
      <View className="flex-1 items-center justify-center">
        <Feather name="cloud-rain" color="black" size={100} />
        <Text className="font-bold text-4xl tracking-wide">Temperature: 5</Text>
        <Text className="font-semibold text-3xl ">Feels Like: 6</Text>
        <View className="flex-row gap-5">
          <Text className="font-bold font-2xl">High: 7</Text>
          <Text className="font-bold font-2xl">Low: 4</Text>
        </View>
      </View>
      <View className="flex-col justify-end ml-2 mb-2 gap-y-1">
        <Text className="text-4xl">Its Raining!</Text>
        <Text className="text-3xl">Its Raining cats and dogs!</Text>
      </View>
    </SafeAreaView>
  );
};
export default Weather;
