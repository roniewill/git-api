import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

import Repo from '@components/Repo';

class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        image: 'https://avatars0.githubusercontent.com/u/5003309?s=460&v=4',
        title: 'git-api',
        author: 'roniewill',
      },
      {
        id: 2,
        image: 'https://avatars1.githubusercontent.com/u/6841591?s=400&v=4',
        title: 'node-php-fpm',
        author: 'ivansfl',
      },
      {
        id: 3,
        image: 'https://avatars0.githubusercontent.com/u/20171863?s=400&v=4',
        title: 'react-native-redux',
        author: 'kaueDM',
      }
    ]
  }

  render() {

    const listRepos = this.state.repos.map( repo => <Repo key={ repo.id } repo={repo} /> );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Welcome to Mini App GitApi!
          </Text>

          <TouchableOpacity onpress={ () => {} }>
            <Text style={styles.btnAdd}>+</Text>
          </TouchableOpacity>
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
    backgroundColor: '#737373',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 30 : 0,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
  },
  repoList:{ 
    padding: 20 
  },
  btnAdd: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default App;