import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, ActivityIndicator,
TouchableOpacity
 } from "react-native";

const FetchApiHook2 = () => {

	const[data, setData] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
	    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	    const json = await response.json();
	    setData(json);
      setIsLoading(false);
  };

    return (
          <View style={styles.container}>
          {isLoading ? <ActivityIndicator size="large" /> : (
            <FlatList
              data={data}
              keyExtractor={(x, i) => i.toString()}
              renderItem={({ item }) =>
              <TouchableOpacity onPress={() => alert(item.body)}>
                <Text>
                  {`${item.id}: ${item.title} ${isLoading}` }
                </Text>
              </TouchableOpacity>}
            />
            )}
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

export default FetchApiHook2;