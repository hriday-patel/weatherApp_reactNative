import Feather from "@expo/vector-icons/Feather";
import { FlatList, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Item = (props: propy) => {
  const { dt_txt, condition, min, max } = props;
  return (
    <View className="py-6 pl-0 pr-3 flex-row flex-1 justify-around items-center gap-4 mx-4 my-4 border-2 rounded-xl bg-[#B0CE88]/75">
      <Feather name="sun" color="black" size={36} />
      <Text>{dt_txt}</Text>
      <Text className="text-neutral-700 font-semibold text-2xl">{condition}</Text>
      <Text className="text-black font-bold text-2xl">{min}</Text>
      <Text className="text-black font-bold text-2xl">{max}</Text>
    </View>
  );
};

type propy = {
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

const CurrentWeather = () => {
  const renderItem = ({ item }: { item: ItemProps }) => (
    <Item
      condition={item.weather[0].main}
      min={item.main.temp_min}
      max={item.main.temp_max}
      dt_txt={item.dt}
    />
  );
  return (
    <SafeAreaView
      className={`flex-1 bg-[#FFFD8F] my-[${StatusBar.currentHeight || 0}]`}
    >
      <StatusBar barStyle="default" />
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
  );
};
export default CurrentWeather;
