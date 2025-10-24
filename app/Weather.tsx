import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
const Weather = () => {
  return (
    <SafeAreaView className="flex-1 bg-rose-400">
      <View className="flex-1 items-center justify-end">
        <Feather name="cloud-rain" color="black" size={50} />
        <Text>Temperature: 5</Text>
        <Text>Feels Like: 6</Text>
        <View className="flex-row gap-5">
          <Text>High: 7</Text>
          <Text>Low: 4</Text>
        </View>
      </View>
      <View className="flex-1 justify-end">
        <Text>Its Raining!</Text>
        <Text>Its raining cats and dogs!</Text>
      </View>
    </SafeAreaView>
  );
};
export default Weather;
