import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, TouchableNativeFeedback, Text } from "react-native";
import { Map, Modal, Panel, Input, List } from "./src/components";

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState("new_punto");
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibility, setVisibility] = useState({});
  const [markers, setMarkers] = useState("Ocultar");
  const [pointsFilter, setPointsFilter] = useState(true);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_punto");
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (str) => {
    setNombre(str);
  };

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre("");
  };

  const handleCancel = () => {
    setNombre("");
    setVisibility("");
  };

  const handleLista = () => {
    setVisibilityFilter("all_puntos");
    setVisibility(true);
  };

  const handleShow = () => {
    markers === "Mostrar" ? setMarkers("Ocultar") : setMarkers("Mostrar");
    markers === "Mostrar" ? setPointsFilter(true) : setPointsFilter(false);
  };

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        puntos={puntos}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressLeft={handleLista}
        textLeft="Lista"
        onPressRight={handleShow}
        textRight={markers}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_punto" ? (
          <>
            <Input
              title="Nombre"
              placeholder="Nombre del punto..."
              onChangeText={handleChangeText}
            />
            <View style={styles.botonera}>
              <TouchableNativeFeedback
                onPress={handleSubmit}
                style={styles.button}
              >
                <Text style={styles.textButton}>Aceptar</Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={handleCancel}
                style={styles.button}
              >
                <Text style={styles.textButton}>Cancelar</Text>
              </TouchableNativeFeedback>
            </View>
          </>
        ) : (
          <List puntos={puntos} closeModal={() => setVisibility(false)} />
        )}
      </Modal>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  botonera: {
    flexDirection: "row",
    marginTop: 10,
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
 