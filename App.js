import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.container}>
        This is my first react native project
      </Text>
      <ImageViewer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});

const textStyles = StyleSheet.create({
  container: {
    color: "#fff",
    position: "absolute",
    bottom: 0,
  },
});
