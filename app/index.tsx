import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Weather from "./Weather";
import UpcomingWeather from "./UpcomingWeather";
import City from "./City";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from 'expo-location';

export default function Index() {



  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        headerShown: false
      }}>
          <Tab.Screen name="Weather" component={Weather} options={{
            tabBarIcon({focused}) {
                return <Feather name="droplet" size={24} color={focused ? 'tomato': 'black'} />
            },
          }}/>
          <Tab.Screen name="Upcoming" component={UpcomingWeather} options={{
            tabBarIcon({focused}) {
                return <Feather name="clock" size={24} color={focused ? 'tomato': 'black'} />
            },
          }}/>
          <Tab.Screen name="City" component={City} options={{
            tabBarIcon({focused}) {
                return <Feather name="home" size={24} color={focused ? 'tomato': 'black'} />
            },
          }}/>
      </Tab.Navigator>
  );
}
                              