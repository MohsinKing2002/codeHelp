import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Users from "../apis/Usersapi";

const student = ({ item }) => {
  return (
    <View style={styles.student}>
      <Image
        style={{
          ...styles.img,
          marginTop: -30,
          width: "100%",
        }}
        resizeMode="contain"
        source={{
          uri: item.image,
        }}
      />
      <Text
        style={{
          ...styles.para,
          textAlign: "center",
          marginTop: -15,
          marginBottom: 12,
          fontSize: 20,
        }}
      >
        Student {" : "} #0{item.id}
      </Text>
      <Text style={[styles.para, styles.details]}>
        Name {" : "} {item.name}
      </Text>
      <Text style={[styles.para, styles.details]}>
        Email {" : "} {item.email}
      </Text>
      <Text style={[styles.para, styles.details]}>
        Mobile {" : "} {item.mobile}
      </Text>
      <Text style={{ ...styles.para, fontSize: 18, marginVertical: 8 }}>
        ⚡ Enrolled courses :
      </Text>
      <Text style={[styles.para, styles.details]}>{item.courses}</Text>
    </View>
  );
};

const Students = () => {
  return (
    <FlatList
      style={styles.box}
      data={Users}
      keyExtractor={(item) => item.id}
      renderItem={student}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Students;

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    backgroundColor: "#23527c12",
  },
  student: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  details: {
    fontSize: 18,
    marginLeft: 10,
    marginVertical: 2,
  },
  img: {
    height: undefined,
    width: "50%",
    alignSelf: "center",
    aspectRatio: 1,
  },
  title: {
    marginTop: -10,
    fontSize: 25,
    color: "darkblue",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 10,
  },
  para: {
    fontSize: 17,
    color: "midnightblue",
    textAlign: "justify",
    lineHeight: 24,
  },
  btn: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    width: "60%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#40296c",
    borderRadius: 4,
  },
});
