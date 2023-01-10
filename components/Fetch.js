import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
  Linking,
} from "react-native";
import Hyperlink from "react-native-hyperlink";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
import ApiFetch from "./ApiFetch";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const todoref = firebase.firestore().collection("todos");

  useEffect(() => {
    todoref.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { title, heading, date, time, guest, text, youtube } = doc.data();
        users.push({
          id: doc.id,
          title,
          heading,
          date,
          time,
          guest,
          text,
          youtube,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <View>
      <Image
        style={{
          width: "100%",
          height: "48%",
          marginLeft: "auto",
          marginRight: "auto",
          borderWidth: 3,
          borderColor: "#000",
        }}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/testone-4f378.appspot.com/o/thumbnail_Love%20and%20Victory%20Show%20Logos%20(2)%20-%20Edited.png?alt=media&token=f89690e7-0b4e-4730-9cbf-423ce4ad611b",
        }}
      />
      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          padding: 20,
          alignItems: "center",
          backgroundColor: "#fff",
          width: "90%",
          height: "auto",
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#000",
          shadowOffset: { width: -8, height: 4 },
          shadowOpacity: 0.7,
          shadowRadius: 4,
          shadowColor: "#000",
          elevation: 20,
        }}
      ></View>
    </View>
  );
};

export default Fetch;
