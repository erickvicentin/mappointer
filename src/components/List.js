import React from "react";
import { FlatList, Text, View, Button, StyleSheet } from "react-native";

export default ({ puntos, closeModal }) => {
  return (
    <>
      <Text style={styles.title}>Lista de Marcadores</Text>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={{ textAlign: "center", fontSize: 15 }}>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  list: {
    height: "45%",
    width: "80%",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    borderLeftColor: "blue",
    borderRightWidth: 6,
    borderBottomEndRadius: 25,
    borderTopLeftRadius: 25,
    borderLeftColor: "grey",
    borderLeftWidth: 6,
    borderTopColor: "grey",
    borderTopWidth: 2,
    marginBottom: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
