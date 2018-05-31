import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform
} from 'react-native';

import Repo from '@components/Repo';

class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        avatar: 'https://avatars0.githubusercontent.com/u/5003309?s=460&v=4',
        title: 'git-api',
        author: 'roniewill',
      },
      {
        id: 2,
        avatar: 'https://avatars1.githubusercontent.com/u/6841591?s=400&v=4',
        title: 'node-php-fpm',
        author: 'ivansfl',
      },
      {
        id: 3,
        avatar: 'https://avatars0.githubusercontent.com/u/20171863?s=400&v=4',
        title: 'react-native-redux',
        author: 'kaueDM',
      }
    ]
  }

  render() {

    const listRepos = this.state.repos.map( repo => <Repo key={ repo.id } /> );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Welcome to Mini App GitApi!
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { listRepos }
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
});

export default App;