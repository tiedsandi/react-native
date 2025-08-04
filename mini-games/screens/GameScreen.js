import { StyleSheet, Text, View } from "react-native";

import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Oppent's Guess</Title>
      <Text>Higher or lower?</Text>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // padding: 26,
    paddingVertical: 42,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
