import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const FetchApiHook = () => {
	const[data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
	    const response = await fetch("https://randomuser.me/api?results=500");
	    const json = await response.json();
	    setData(json.results);
  };

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) =>
            <Text>
              {`${item.name.first} ${item.name.last}`}
            </Text>}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default FetchApiHook;