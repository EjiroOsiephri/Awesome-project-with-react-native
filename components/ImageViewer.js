import { StyleSheet, Image, View } from "react-native";

const PlaceholderImage = require("../assets/images/b.png");

export default function ImageViewer({ selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : PlaceholderImage;

  return (
    <View style={imageStyles.imageContainer}>
      <Image style={imageStyles.image} source={imageSource}></Image>
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
