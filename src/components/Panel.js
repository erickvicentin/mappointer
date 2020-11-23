import React from "react";
import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";

export default ({ onPressLeft, textLeft, onPressRight, textRight }) => (
  <View style={styles.panel}>
    <TouchableNativeFeedback onPress={onPressLeft} style={styles.button}>
      <Text style={styles.textButton}>{textLeft}</Text>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={onPressRight} style={styles.button}>
      <Text style={styles.textButton}>{textRight}</Text>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#1990FF",
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});
