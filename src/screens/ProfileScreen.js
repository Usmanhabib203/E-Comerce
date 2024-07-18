import React, { useEffect, useState, useContext } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { UserType } from "../../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const ProfileScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Initialize user state with null
  const navigation = useNavigation();
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userDoc = await db.collection("users").doc(userId).get();
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser(userData);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersSnapshot = await db
          .collection("orders")
          .where("userId", "==", userId)
          .get();
        const ordersData = ordersSnapshot.docs.map((doc) => doc.data());
        setOrders(ordersData);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchOrders();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation.replace("Login");
  };

  if (user === null) {
    return <Text>Loading user profile...</Text>; // Render loading state while user data is being fetched
  }

  return (
    <ScrollView style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Welcome {user.name}</Text>

      {/* Rest of the code remains the same */}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
