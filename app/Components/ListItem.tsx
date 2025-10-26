import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import { propy } from "../UpcomingWeather";
import { getDayName, getFormattedTime } from "../utils/dateFormatter";
import { weatherType } from "../utils/weatherType";

const ListItem = (props: propy) => {
  const { dt_txt, max, min, condition } = props;

  const day = getDayName(dt_txt);
  const time = getFormattedTime(dt_txt);
  const bg = weatherType[condition].backgroundColor;
  const icon = weatherType[condition].icon as keyof typeof Feather.glyphMap;

  return (
    <View
      className="py-4 px-4 flex-row justify-between items-center mx-4 my-2 border border-white/30 rounded-2xl"
      style={{ backgroundColor: bg }}
    >
      <Feather name={icon} color="white" size={40} />

      <View className="flex-col items-start flex-1 ml-4">
        <Text className="text-white font-bold text-lg">{day}</Text>
        <Text className="text-white/80 text-sm">{time}</Text>
      </View>

      <View className="flex-col items-center">
        <Text className="text-white font-semibold text-base mb-1">
          {condition}
        </Text>
        <View className="flex-row gap-2">
          <Text className="text-white/90 text-sm">L: {Math.round(min)}°</Text>
          <Text className="text-white font-bold text-base">
            H: {Math.round(max)}°
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
