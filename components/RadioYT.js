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

function RadioYT() {
  const contentWidth = Dimensions.get("screen");

  return (
    <View>
      <WebView
        source={{
          uri: "https://www.youtube.com/watch?v=Ri7-vnrJD3k&list=PLmlSk2gw6AEhPEuujAhzqy_I_Ca3KJe4g",
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

export default RadioYT;
