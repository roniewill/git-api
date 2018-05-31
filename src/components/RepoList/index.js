import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import styles from './styles';

class RepoList extends Component {

    _renderRepo = (repos) => repos.map( repo => (
        <View key={ repo.id } style={styles.repo}>
            <Image source={{ uri: repo.image }} style={ styles.repoImage } />
            <View style={ styles.repoInfo }>
                <Text style={ styles.repoTitle }>{ repo.title }</Text>
                <Text style={ styles.repoAuthor }>{ repo.author }</Text>
            </View>
        </View>
    ));

    render () {
        return (
            <ScrollView contentContainerStyle={styles.repoList}>
            { this._renderRepo(this.props.repos) }
            </ScrollView>
        );
    }
}

export default RepoList;