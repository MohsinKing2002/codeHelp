import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import Courses from "../apis/Coursesapi";

const CourseDetails = ({ route }) => {
  const { id } = route.params;

  const course = Courses.find((elem) => {
    return id === elem.id;
  });

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#23527c12",
      }}
    >
      <View style={styles.box}>
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={{
              uri: course.image,
            }}
          />
        </View>
        <Text
          style={{
            ...styles.para,
            fontSize: 25,
            textAlign: "center",
            marginBottom: 18,
            marginTop: -25,
            letterSpacing: 1,
            lineHeight: 30,
            color: "darkblue",
          }}
        >
          {course.title}
        </Text>
        <Text style={{ ...styles.para, paddingHorizontal: 10 }}>
          {course.description}
        </Text>
        <View style={{ padding: 15, marginTop: 10 }}>
          <Text style={{ ...styles.para }}>
            Course Id : {"  "} #{course.id}
          </Text>
          <Text style={{ ...styles.para, marginVertical: 10, fontSize: 20 }}>
            Price : {"  "} {course.price}
          </Text>
          <Text style={{ ...styles.para, fontSize: 20, marginVertical: 12 }}>
            ⏺ What will you learn ?
          </Text>
          <Text style={styles.para}>⚡ {course.course1}</Text>
          <Text style={styles.para}>⚡ {course.course2}</Text>
          <Text style={styles.para}>⚡ {course.course3}</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            Alert.alert("Congratulations !!\nYou're Admitted in the course.")
          }
        >
          <Text style={{ ...styles.para, color: "white" }}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseDetails;

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
    fontSize: 17,
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
