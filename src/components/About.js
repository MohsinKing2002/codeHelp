import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import React from "react";

const About = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ padding: 20, backgroundColor: "#23527c12" }}>
        <View style={styles.box}>
          <Image
            style={{ ...styles.img, width: "40%" }}
            resizeMode="contain"
            source={{
              uri: "https://res.cloudinary.com/codehelp/image/upload/v1667493133/codehelpFinalAssets/ort4cxqmugzj9an4sbae.png",
            }}
          />

          <Text style={{ ...styles.title, color: "red", letterSpacing: 2 }}>
            ⚡ Code Help ⚡{" "}
          </Text>

          <Text
            style={{
              ...styles.para,
              fontSize: 22,
              textAlign: "center",
              marginTop: 25,
            }}
          >
            About Us
          </Text>
          <Text style={{ ...styles.para, marginVertical: 10, padding: 5 }}>
            Hello! Welcome to Code Help! Really happy to see you here. Thinking
            of taking a step towards a mentorship programme? It definitely seems
            a bit daunting at first
          </Text>

          <Text
            style={{
              ...styles.para,
              fontSize: 22,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Your Instructor
          </Text>
          <Image
            style={{ ...styles.img, marginBottom: 20, borderRadius: 10 }}
            source={{
              uri: "https://codehelp.s3.ap-south-1.amazonaws.com/zbsjwp6ddviegs1oyrku_8019379984.jpg",
            }}
          />

          <Text style={{ ...styles.para, padding: 8, marginBottom: 10 }}>
            At Code Help, we aim to provide new students with proper mentorship
            and education for their learning and growth.
          </Text>

          <Text style={{ ...styles.para, padding: 8 }}>
            10K+ students trusted us and got placed in the top MNCs.
          </Text>

          <Button
            title="Meet our students"
            onPress={() => navigation.navigate("Students")}
          />

          <Text style={{ ...styles.para, padding: 8, marginTop: 10 }}>
            We provide 10+ osm courses do check below..
          </Text>
          <Button
            title="Explore our Courses"
            onPress={() => navigation.navigate("Course")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  box: {
    marginVertical: 5,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  student: {
    padding: 10,
    marginVertical: 10,
    borderColor: "lightblue",
    borderWidth: 1,
    borderRadius: 10,
  },
  details: {
    fontSize: 18,
    marginLeft: 10,
    marginVertical: 2,
  },
  img: {
    height: undefined,
    width: "100%",
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
});
