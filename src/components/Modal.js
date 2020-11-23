import React from "react";
import { Modal, View, StyleSheet, Text } from "react-native";

export default ({ children, visibility }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalView: {
    backgroundColor: "white",
    width: "60%",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    justifyContent: "center",
    alignItems: "center",
  },
});
