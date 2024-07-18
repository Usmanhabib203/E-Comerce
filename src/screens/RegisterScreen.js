// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Pressable,
//   Image,
//   KeyboardAvoidingView,
//   TextInput,
//   Alert,
// } from "react-native";
// import React, { useState } from "react";
// import { MaterialIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import axios from "axios";

// const RegisterScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const navigation = useNavigation();
//   const handleRegister = () => {
//     const user = {
//       name: name,
//       email: email,
//       password: password,
//     };

//     // send a POST  request to the backend API to register the user
//     axios
//       .post("http://localhost:8000/register", user)
//       .then((response) => {
//         console.log(response);
//         Alert.alert(
//           "Registration successful",
//           "You have been registered Successfully"
//         );
//         setName("");
//         setEmail("");
//         setPassword("");
//       })
//       .catch((error) => {
//         Alert.alert(
//           "Registration Error",
//           "An error occurred while registering"
//         );
//         console.log("registration failed", error);
//       });
//   };
//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: "white", alignItems: "center",marginTop:50  }}
//     >
//       <View>
//         <Image
//           style={{ width: 150, height: 100 }}
//           source={{
//             uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
//           }}
//         />
//       </View>

//       <KeyboardAvoidingView>
//         <View style={{ alignItems: "center" }}>
//           <Text
//             style={{
//               fontSize: 17,
//               fontWeight: "bold",
//               marginTop: 12,
//               color: "#041E42",
//             }}
//           >
//             Register to your Account
//           </Text>
//         </View>

//         <View style={{ marginTop: 70 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 5,
//               backgroundColor: "#D0D0D0",
//               paddingVertical: 5,
//               borderRadius: 5,
//               marginTop: 30,
//             }}
//           >
//             <Ionicons
//               name="ios-person"
//               size={24}
//               color="gray"
//               style={{ marginLeft: 8 }}
//             />
//             <TextInput
//               value={name}
//               onChangeText={(text) => setName(text)}
//               style={{
//                 color: "gray",
//                 marginVertical: 10,
//                 width: 300,
//                 fontSize: name ? 16 : 16,
//               }}
//               placeholder="enter your name"
//             />
//           </View>

//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 5,
//               backgroundColor: "#D0D0D0",
//               paddingVertical: 5,
//               borderRadius: 5,
//               marginTop: 30,
//             }}
//           >
//             <MaterialIcons
//               style={{ marginLeft: 8 }}
//               name="email"
//               size={24}
//               color="gray"
//             />

//             <TextInput
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//               style={{
//                 color: "gray",
//                 marginVertical: 10,
//                 width: 300,
//                 fontSize: password ? 16 : 16,
//               }}
//               placeholder="enter your Email"
//             />
//           </View>
//         </View>

//         <View>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 5,
//               backgroundColor: "#D0D0D0",
//               paddingVertical: 5,
//               borderRadius: 5,
//               marginTop: 30,
//             }}
//           >
//             <AntDesign
//               name="lock1"
//               size={24}
//               color="gray"
//               style={{ marginLeft: 8 }}
//             />

//             <TextInput
//               value={password}
//               onChangeText={(text) => setPassword(text)}
//               secureTextEntry={true}
//               style={{
//                 color: "gray",
//                 marginVertical: 10,
//                 width: 300,
//                 fontSize: email ? 16 : 16,
//               }}
//               placeholder="enter your Password"
//             />
//           </View>
//         </View>

//         <View
//           style={{
//             marginTop: 12,
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <Text>Keep me logged in</Text>

//           <Text style={{ color: "#007FFF", fontWeight: "500" }}>
//             Forgot Password
//           </Text>
//         </View>

//         <View style={{ marginTop: 80 }} />

//         <Pressable
//           onPress={handleRegister}
//           style={{
//             width: 200,
//             backgroundColor: "#FEBE10",
//             borderRadius: 6,
//             marginLeft: "auto",
//             marginRight: "auto",
//             padding: 15,
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               color: "white",
//               fontSize: 16,
//               fontWeight: "bold",
//             }}
//           >
//             Register
//           </Text>
//         </Pressable>

//         <Pressable
//           onPress={() => navigation.goBack()}
//           style={{ marginTop: 15 }}
//         >
//           <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
//             Already have an account? Sign In
//           </Text>
//         </Pressable>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default RegisterScreen;

// const styles = StyleSheet.create({});


import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"; // You can replace 'FontAwesome' with the desired icon set
import { useState } from "react";
import { auth } from "../../FirebaseConfig";
// import axios from 'axios';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigation.navigate("Login");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);

        // ..
      });
  };
  return (
    <View style={styles.body}>
      <Text
        style={{
          marginTop: 100,
          fontSize: 30,
          fontWeight: "700",
          alignSelf: "center",
        }}
      >
        Sign Up now
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 15,
          fontWeight: "500",
          alignSelf: "center",
        }}
      >
        Please sign up to continue{" "}
      </Text>

      <View style={{ margin: 20 }}>
        <TextInput
          placeholder="Username"
          style={{
            width: 335,
            height: 56,
            backgroundColor: "#E5E2E2",
            borderRadius: 15,
            marginBottom: 25,
            paddingLeft: 15,
          }}
        />
        <TextInput
style={{
  width: 335,
  height: 56,
  backgroundColor: "#E5E2E2",
  borderRadius: 15,
  paddingLeft: 15,
  marginBottom: 25,
}}          placeholder=" Enter Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
       <TextInput
style={{
  width: 335,
  height: 56,
  backgroundColor: "#E5E2E2",
  borderRadius: 15,
  paddingLeft: 15,
  // marginTop:10,
}}          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        
      </View>

      <TouchableOpacity
        onPress={handleSignup}
        style={{
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: "red",
          width: 335,
          height: 56,
          borderRadius: 20,
          marginTop: 40,
        }}
      >
        <Text style={{ alignSelf: "center", color: "white" }}>
          {" "}
          Get started
        </Text>
      </TouchableOpacity>
      <View
        style={{ flexDirection: "row", marginTop: 40, alignSelf: "center" }}
      >
        <Text style={{ fontWeight: "500" }}> Already account</Text>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ fontSize: 15, color: "red", fontWeight: "600" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ alignSelf: "center", marginTop: 10 }}>Or connect</Text>
      <View style={styles.Iconcontainer}>
        <TouchableOpacity>
          <Icon name="facebook" size={30} color="blue" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="google" size={30} color="blue" style={styles.icon} />
        </TouchableOpacity>
        {/* <Icon name="instagram" size={30} color="#fff" style={styles.icon} /> */}
        {/* Add more social media icons as needed */}
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignSelf: "center",
  },
  Iconcontainer: {
    flexDirection: "row", // Align icons horizontally
    // backgroundColor: '#3498db',  // Set a colorful background
    padding: 10, // Add padding for better appearance
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 10,
    backgroundColor: "white",
    width: 80,
    height: 50,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
