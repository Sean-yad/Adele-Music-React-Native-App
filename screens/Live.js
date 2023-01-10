import * as React from "react";
import { View, Text, Image } from "react-native";
import Fetch from "../components/Fetch";
import ApiFetch from "../components/ApiFetch";

export default function Live({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          headerMode: "screen",
          backgroundColor: "#dbd9d9",
        }}
      ></View>

      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "38%",
            marginLeft: "auto",
            marginRight: "auto",
            borderWidth: 3,
            borderColor: "#000",
          }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/auth-48eeb.appspot.com/o/adele.jpg?alt=media&token=a9ced26c-70f9-4e12-94a4-3c360718b03f",
          }}
        />
        <ApiFetch />
      </View>
    </View>
  );
}
