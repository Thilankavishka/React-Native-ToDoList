import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays Task*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTtitle}>Today's Task</Text>

        <View style={styles.item}>
          {/*This is tasks*/}

          <Task task="task1"></Task>
          <Task task="task2"></Task>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTtitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    marginTop: 30,
  },
});
