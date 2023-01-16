import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../Menu";

const Home = () => {
  return (
    <View style={[Styles.container, Styles.home]}>
      <Image
        style={Styles.img}
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/004/865/921/original/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg",
        }}
      />
      <Text style={{ ...Styles.title, marginTop: -15, fontSize: 24 }}>
        {" "}
        welcome to{" "}
      </Text>
      <Text style={{ ...Styles.title, color: "red", letterSpacing: 2 }}>
        ⚡ Code Help ⚡{" "}
      </Text>
      <Text style={Styles.about}>
        {"["} Hello and welcome again to
        <Text style={Styles.para}> CODE HELP </Text> Here You will learn
        programming in a new and exciting way. Expert will guide and train you.
        by__ <Text style={Styles.para}>LOVE BABBAR</Text> {"   ]"}
      </Text>

      <Menu />
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "azure",
    padding: 20,
    height: "100%",
    width: "100%",
  },
  img: {
    marginTop: 20,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    fontSize: 30,
    color: "darkblue",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 1,
    marginVertical: 5,
  },
  about: {
    fontSize: 16,
    color: "rgb(14, 42, 60)",
    marginTop: 18,
    paddingHorizontal: 30,
    textAlign: "justify",
    padding: 5,
    lineHeight: 26,
  },
  para: {
    color: "red",
    letterSpacing: 1,
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
});
