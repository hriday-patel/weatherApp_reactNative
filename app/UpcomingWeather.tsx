import { WeatherItem } from "@/App";
import { FlatList, ImageBackground, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "./components/ListItem";
import { WeatherType } from "./utils/weatherType";

export interface propy {
  dt_txt: string;
  min: number;
  max: number;
  condition: WeatherType;
}

const renderItem = ({ item }: { item: WeatherItem }) => {
  return (
    <ListItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );
};

const Empty = () => {
  return (
    <View className="flex-1 justify-center items-center p-8">
      <Text className="text-white text-xl font-semibold">
        No weather data available
      </Text>
    </View>
  );
};

const UpcomingWeather = ({ weatherData }: { weatherData: WeatherItem[] }) => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingTop: StatusBar.currentHeight || 0 }}
    >
      <ImageBackground
        source={require("../assets/images/bgImage.jpg")}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 pt-4">
          <Text className="text-white font-bold text-3xl text-center tracking-wide mb-4">
            Upcoming Weather
          </Text>
          <FlatList
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
            ListEmptyComponent={<Empty />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;
