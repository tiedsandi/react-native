import { FlatList, StyleSheet, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { useState } from "react";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prevState) => {
      return [
        ...prevState,
        { text: enteredGoalText, id: Math.random().toString() },
      ];
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
