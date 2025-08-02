import { Button, StyleSheet, TextInput, View } from "react-native";

import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoaltext] = useState("");

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoaltext("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={setEnteredGoaltext}
        value={enteredGoalText}
      />
      <Button title="Add goal" color={"red"} onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
