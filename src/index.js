import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  AsyncStorage
} from 'react-native';

import Repo from '@components/Repo';
import Header from '@components/Header';
import NewRepoModal from '@components/NewRepoModal';

class App extends Component {
  state = {
    repos: [],
    modalVisible: false
  }

  async componentDidMount() {
    const repos = JSON.parse( await AsyncStorage.getItem('@GitApi:repositories') ) || [];
    
    this.setState({ repos });
  };

  _addOnRepository = async (newRepoText) => {
      const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`);
      const response = await repoCall.json();

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

      await AsyncStorage.setItem('@GitApi:repositories', JSON.stringify(this.state.repos));
  };

  _modalShow = () => {
    this.setState({ modalVisible: true });
  }

  _modalClose = () => {
    this.setState({ modalVisible: false });
  }

  render() {

    const listRepos = this.state.repos.map( repo => <Repo key={ repo.id } repo={repo} /> );

    return (
      <View style={styles.container}>
        <Header  onShowModal={ this._modalShow } />

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
  repoList:{ 
    padding: 20 
  },
});

export default App;