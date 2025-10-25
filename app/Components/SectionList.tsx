import { SectionList, Text, View } from "react-native";

const Sectionlist = () => {
  const INFO = [
    {
      header: "A",
      data: ["Abhinav", "Abhishek"],
    },
    {
      header: "B",
      data: ["Bishal", "bindra"],
    },
    {
      header: "C",
      data: ["Chomu"],
    },
  ];

  return (
    <SectionList
    //   sections={INFO.map(section => ({...section, data: section.arr}))}
    sections={INFO}
      renderItem={({ item }) => (
        <View>
          <Text className="text-neutral-600 font-semibold text-2xl">{item}</Text>
        </View>
      )}
      renderSectionHeader={({section : {header}}) => <View>
          <Text className="text-black font-bold text-4xl">{header}</Text>
        </View>}
    />
  );
};
export default Sectionlist;
