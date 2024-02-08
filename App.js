import Button from "./components/Button";
import { StatusBar } from "expo-status-bar";
import ImageViewer from "./components/ImageViewer";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer />
      <View style={styles.footerContainer}>
        <Button label="Choose this photo"></Button>
        <Button label="Use this photo"></Button>
      </View>
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

const textStyles = StyleSheet.create({
  container: {
    color: "#fff",
    position: "absolute",
    bottom: 100,
  },
});
