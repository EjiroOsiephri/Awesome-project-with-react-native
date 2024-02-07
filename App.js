import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View } from "react-native";

const PlaceholderImage = require("./assets/images/b.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.container}>
        This is my first react native project
      </Text>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
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
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 340,
    height: 440,
    borderRadius: 14,
  },
});

const textStyles = StyleSheet.create({
  container: {
    color: "#fff",
    position: "absolute",
    bottom: 0,
  },
});
