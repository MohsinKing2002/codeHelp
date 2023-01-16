import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate("Students")}>
        <Octicons name="people" size={28} color="darkblue" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Octicons name="info" size={25} color="darkblue" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Course")}>
        <Octicons name="database" size={25} color="darkblue" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
        <FontAwesome name="whatsapp" size={28} color="darkblue" />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    position: "relative",
    top: 145,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 10,
  },
});
