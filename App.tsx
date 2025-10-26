import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, Text, View } from "react-native";
import City from "./app/City";
import UpcomingWeather from "./app/UpcomingWeather";
import Weather from "./app/Weather";
import useGetWeather from "./app/hooks/useGetWeather";
import { WeatherType } from "./app/utils/weatherType";

// Define types for your weather data structure
export interface WeatherItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: WeatherType; // Changed from string to WeatherType
    description: string;
    icon: string;
  }>;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  pop: number;
  dt_txt: string;
}

export interface CityData {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  list: WeatherItem[];
  city: CityData;
}

// Type for tab navigation
type RootTabParamList = {
  Weather: undefined;
  Upcoming: undefined;
  City: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const App: React.FC = () => {
  const [loading, errorMsg, weather] = useGetWeather();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator color={"purple"} size={"large"} />
      </View>
    );
  }

  if (errorMsg !== "") {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-red-600 text-md">{errorMsg}</Text>
      </View>
    );
  }

  if (!weather || !weather.list || weather.list.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>No weather data available</Text>
      </View>
    );
  }

  const typedWeather = weather as WeatherData;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "lightblue",
          },
        }}
      >
        <Tab.Screen
          name="Weather"
          options={{
            tabBarIcon({ focused }: { focused: boolean }) {
              return (
                <Feather
                  name="droplet"
                  color={focused ? "tomato" : "black"}
                  size={25}
                />
              );
            },
          }}
        >
          {() => <Weather weatherData={typedWeather.list[0]} />}
        </Tab.Screen>

        <Tab.Screen
          name="Upcoming"
          options={{
            tabBarIcon({ focused }: { focused: boolean }) {
              return (
                <Feather
                  name="clock"
                  color={focused ? "tomato" : "black"}
                  size={25}
                />
              );
            },
          }}
        >
          {() => <UpcomingWeather weatherData={typedWeather.list} />}
        </Tab.Screen>

        <Tab.Screen
          name="City"
          options={{
            tabBarIcon({ focused }: { focused: boolean }) {
              return (
                <Feather
                  name="home"
                  color={focused ? "tomato" : "black"}
                  size={25}
                />
              );
            },
          }}
        >
          {() => <City weatherData={typedWeather.city} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;