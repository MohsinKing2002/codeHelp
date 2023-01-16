import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Course from "./src/components/Course";
import CourseDetails from "./src/components/CourseDetails";
import Students from "./src/components/Students";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleAlign: "center",
            title: "About Us",
            headerStyle: { backgroundColor: "skyblue" },
          }}
        />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleAlign: "center",
            title: "Top Courses",
            headerStyle: { backgroundColor: "skyblue" },
          }}
        />

        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleAlign: "center",
            title: "Course Details",
            headerStyle: { backgroundColor: "skyblue" },
          }}
        />

        <Stack.Screen
          name="Students"
          component={Students}
          options={{
            headerTitleAlign: "center",
            title: "Our Students",
            headerStyle: { backgroundColor: "skyblue" },
          }}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleAlign: "center",
            title: "Contact Us",
            headerStyle: { backgroundColor: "skyblue" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
