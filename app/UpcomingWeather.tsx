import { FlatList, ImageBackground, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "./Components/ListItem";

const renderItem = ({ item }: { item: ItemProps }) => {
  return (
    <ListItem
      dt_txt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );
};

export type propy = {
  dt_txt: string;
  condition: string;
  min: number;
  max: number;
};

type ItemProps = {
  dt: string;
  weather: [{ main: string }];
  main: {
    temp_min: number;
    temp_max: number;
  };
};

const Empty = () => {
  return (
    <View>
      <Text className="text-black">Empty List!</Text>
    </View>
  );
};

const DATA: ItemProps[] = [
  {
    dt: "2025-10-23",
    weather: [
      {
        main: "Rain",
      },
    ],
    main: {
      temp_min: 38,
      temp_max: 48,
    },
  },
  {
    dt: "2025-10-25",
    weather: [
      {
        main: "Sun",
      },
    ],
    main: {
      temp_min: 40,
      temp_max: 43,
    },
  },
  {
    dt: "2025-10-24",
    weather: [
      {
        main: "Cloud",
      },
    ],
    main: {
      temp_min: 28,
      temp_max: 39,
    },
  },
];

const UpcomingWeather = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bgImage.jpg")}
      className={`flex-1 mt-[${StatusBar.currentHeight || 0}]`}
    >
      <SafeAreaView className="flex-1">
        <Text className="text-black font-bold text-3xl font-mono text-center tracking-widest">
          Upcoming Weather
        </Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
          ListEmptyComponent={<Empty />}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
export default UpcomingWeather;
