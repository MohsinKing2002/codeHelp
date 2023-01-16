import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import courses from "../apis/Coursesapi";
import React from "react";

const Course = ({ navigation }) => {
  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: "#23527c12",
            }}
          >
            <View style={styles.box}>
              <View>
                <Image
                  style={styles.img}
                  resizeMode="contain"
                  source={{
                    uri: item.image,
                  }}
                />
              </View>
              <Text
                style={{
                  ...styles.para,
                  fontSize: 25,
                  textAlign: "center",
                  marginBottom: 15,
                  marginTop: -30,
                  letterSpacing: 1,
                  lineHeight: 30,
                  color: "darkblue",
                }}
              >
                {item.title}
              </Text>
              <Text style={{ ...styles.para, paddingHorizontal: 10 }}>
                {item.description}
              </Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() =>
                  navigation.navigate("CourseDetails", { id: item.id })
                }
              >
                <Text style={{ ...styles.para, color: "white" }}>
                  Course Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    />
  );
};

export default Course;

const styles = StyleSheet.create({
  box: {
    marginVertical: 5,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  img: {
    marginTop: -45,
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
  para: {
    fontSize: 16,
    color: "midnightblue",
    textAlign: "justify",
    lineHeight: 23,
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
