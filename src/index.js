import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Welcome to Mini App GitApi!
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
          <View style={styles.repo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 30 : 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
  },
  repoList:{ 
    padding: 20 
  },
  repo: {
    padding: 20,
    height: 120,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 5
  }
});

export default App;