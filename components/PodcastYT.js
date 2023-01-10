// Libraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import IframeRenderer from "@native-html/iframe-plugin";
import RenderHTML, {
  HTMLElementModel,
  HTMLContentModel,
} from "react-native-render-html";
import WebView from "react-native-webview";

const renderers = {
  iframe: IframeRenderer,
};

function PodcastYT() {
  const contentWidth = Dimensions.get("screen");

  return (
    <View>
      <WebView
        source={{
          uri: "https://www.youtube.com/watch?v=YQHsXMglC9A&list=PL-Ib9oOPR7OE72Or7c15d54P5Q2xOQ3rQ",
        }}
        style={{
          marginTop: -40,
          height: 50,
          width: 375,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: "blue",
    borderBottomWidth: 1,
    padding: 20,
    backgroundColor: "white",
  },
  informations: {
    flexDirection: "row",
    alignItems: "center",
  },

  date: {
    color: "grey",
  },
  content: {
    marginTop: 10,
  },
});

export default PodcastYT;
