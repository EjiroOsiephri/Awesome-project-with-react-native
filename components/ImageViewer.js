import { StyleSheet, Image, View } from "react-native";

const PlaceholderImage = require("../assets/images/b.png");

export default function ImageViewer() {
  return (
    <View style={imageStyles.imageContainer}>
      <Image style={imageStyles.image} source={PlaceholderImage}></Image>
    </View>
  );
}

const imageStyles = StyleSheet.create({
  image: {
    width: 340,
    height: 440,
    borderRadius: 14,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
