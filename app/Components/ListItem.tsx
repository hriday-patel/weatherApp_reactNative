import { propy } from "../CurrentWeather";
import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
const ListItem = (props: propy) => {
    const {dt_txt, max, min, condition} = props;
  return (
    <View className="py-6 pl-0 pr-3 flex-row flex-1 justify-around items-center gap-4 mx-4 my-4 border-2 border-neutral-500/70 rounded-xl bg-[#f2f2b0b5]">
      <Feather name="sun" color="black" size={36} />
      <Text>{dt_txt}</Text>
      <Text className="text-neutral-700 font-semibold text-2xl">
        {condition}
      </Text>
      <Text className="text-black font-bold text-2xl">{min}</Text>
      <Text className="text-black font-bold text-2xl">{max}</Text>
    </View>
  );
};
export default ListItem;
