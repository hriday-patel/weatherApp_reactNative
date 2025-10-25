import { WEATHER_API_KEY } from "@env";
import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import City from "./City";
import UpcomingWeather from "./UpcomingWeather";
import Weather from "./Weather";

const Tab = createBottomTabNavigator();

export default function Index() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getWeather = async (latitude: number, longitude: number) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      setErrorMsg("Failed to fetch weather data");
      console.error(error);
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        setLoading(true);

        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission Denied!");
          setLoading(false);
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        await getWeather(latitude, longitude);
      } catch (error) {
        setErrorMsg("Error getting location");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator color={"purple"} size={"large"} />
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View className="flex-1 bg-white justify-center items-center">
        <Text className="text-red-500 text-lg">{errorMsg}</Text>
      </View>
    );
  }

  if (weatherData) {
    console.log(weatherData);
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={24}
              color={focused ? "tomato" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={24}
              color={focused ? "tomato" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "tomato" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
