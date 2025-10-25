import { Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";


type texty = {
    iconName: keyof typeof Feather.glyphMap,
    color: string, 
    size: number,
    text: string
}

const FeatherIcon = (props: texty) => {
    const {iconName, color, size, text} = props
  return (
    <>
      <Feather name={iconName} color={color} size={size} />
      <Text className="text-black font-bold text-2xl">{text}</Text>
    </>
  );
};
export default FeatherIcon;
