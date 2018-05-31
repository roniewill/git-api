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
import NewRepoModal from '@components/NewRepoModal';

class App extends Component {
  state = {
    repos: [],
    modalVisible: false
  }

  _addOnRepository = async (newRepoText) => {
      try {
        const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`);
        const response = await repoCall.json();
      } catch (error) {
        console.log(`Connection error with git api - ${error}`);
      }

      const repository = {
        id: response.id,
        image: response.owner.avatar_url,
        title: response.name,
        author: response.owner.login
      };
      
      this.setState({
        modalVisible: false,
        repos: [
          ...this.state.repos,
          repository
        ]
      });
  };

  _modalClose = () => {
    this.setState({ modalVisible: false });
  }

  render() {

    const listRepos = this.state.repos.map( repo => <Repo key={ repo.id } repo={repo} /> );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Welcome to Mini App GitApi!
          </Text>

          <TouchableOpacity onPress={ () => this.setState({ modalVisible: true }) }>
            <Text style={styles.btnAdd}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { listRepos }
        </ScrollView>

        <NewRepoModal 
          onCancel={ this._modalClose }
          onAdd={ this._addOnRepository }
          visible={this.state.modalVisible}
        />
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