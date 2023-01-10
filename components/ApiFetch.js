import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import Hyperlink from "react-native-hyperlink";

// get data from this URL!
const movieURL = "https://api.jsonbin.io/v3/b/63bcd60915ab31599e32591b";

const ApiFetch = () => {
  // managing state with 'useState'
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [topic, setTopic] = useState([]);
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);
  const [guest, setGuest] = useState([]);
  const [description, setDescription] = useState([]);

  //TITLE, TOPIC, DATE, TIME, GUEST, YOUTUBE
  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setData(json.record.shows);
        setTitle(json.record.title);
        setTopic(json.record.topic);
        setDate(json.record.date);
        setTime(json.record.time);
        setGuest(json.record.guest);
        setDescription(json.record.description);
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(movieURL);
      let json = await response.json();
      setData(json.shows);
      setTitle(json.title);
      setTopic(json.topic);
      setDate(json.date);
      setTime(json.time);
      setGuest(json.guest);
      setDescription(json.description);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 40,
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
        >
          {/* Title from URL */}
          <Text style={{ fontWeight: "900" }}>{title}</Text>
          {/* Display each movie */}
          <View></View>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ borderBottomWidth: 1, borderColor: "#891c61" }}>
                <Text
                  style={{
                    marginBottom: "2%",
                    textAlign: "center",
                    paddingTop: 20,
                  }}
                >
                  {item.topic}
                </Text>
                <Text style={{ marginBottom: "2%", textAlign: "center" }}>
                  {item.date}
                </Text>
                <Text style={{ marginBottom: "2%", textAlign: "center" }}>
                  {item.time}
                </Text>
                <Text style={{ marginBottom: "2%", textAlign: "center" }}>
                  {item.guest}
                </Text>
                <Hyperlink linkDefault={true}>
                  <Text
                    style={{
                      marginBottom: "2%",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: 14,
                      color: "#891c61",
                    }}
                  >
                    {item.youtube}
                  </Text>
                </Hyperlink>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  movieText: {
    fontSize: 18,
    fontWeight: "600",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginBottom: 18,
    fontWeight: "200",
    color: "green",
  },
});

export default ApiFetch;
