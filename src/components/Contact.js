import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View style={{ padding: 20, backgroundColor: "#23527c12", height: "100%" }}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box}>
            <Text style={styles.title}>
              Hey there, share your Thoughts with us..
            </Text>
            <View>
              <Text style={styles.label}>Name :</Text>
              <TextInput
                value={name}
                onChangeText={(e) => setName(e)}
                style={styles.input}
                placeholder="John Duke"
              />
            </View>
            <View>
              <Text style={styles.label}>Email :</Text>
              <TextInput
                value={email}
                onChangeText={(e) => setEmail(e)}
                style={styles.input}
                placeholder="John@duke.com"
              />
            </View>
            <View>
              <Text style={styles.label}>Mobile No. :</Text>
              <TextInput
                value={phone}
                onChangeText={(e) => setPhone(e)}
                style={styles.input}
                placeholder="9876543210"
              />
            </View>
            <View>
              <Text style={styles.label}>Message / Feedback :</Text>
              <TextInput
                value={message}
                onChangeText={(e) => setMessage(e)}
                numberOfLines={5}
                multiline={true}
                style={{ ...styles.input, lineHeight: 24 }}
                placeholder="Your Message/Feedback/Grivience.."
              />
            </View>

            <TouchableOpacity
              disabled={!name || !email || !phone || !message}
              style={{
                ...styles.btn,
                backgroundColor:
                  name && email && phone && message ? "#40296c" : "#a4aaafba",
              }}
              onPress={() => {
                Alert.alert(`Thank you ${name}\nWe'll be back to you.`) &
                  navigation.navigate("Home");
              }}
            >
              <Text style={{ color: "white" }}>Send Message</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  box: {
    marginVertical: 5,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: "darkblue",
    textAlign: "center",
    letterSpacing: 1,
    marginVertical: 15,
    marginBottom: 40,
  },
  label: {
    fontSize: 17,
    color: "maroon",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightblue",
    padding: 8,
    marginBottom: 16,
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
