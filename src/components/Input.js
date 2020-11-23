import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default ({ title, ...rest }) => {
  return (
    <View style={styles.wraper}>
      <Text>{title}</Text>
      <TextInput {...rest} textAlignVertical="center" autoFocus={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    height: 40,
    width: "90%",
    paddingBottom: 10,
    justifyContent: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});
