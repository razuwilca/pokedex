import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { capitalize, map } from "lodash";

const Stats = (props) => {
  const { stats } = props;

  const barStyles = (num) => {
    //console.log("num: ", num);
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={style.content}>
      <Text style={style.title}>Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={style.block}>
          <View style={style.blockTitle}>
            <Text style={style.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={style.blockInfo}>
            <Text style={style.number}>{item.base_stat}</Text>
            <View style={style.bgBar}>
              <View style={[style.bar, barStyles(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Stats;

const style = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
