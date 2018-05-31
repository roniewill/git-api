import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import styles from './styles';

class Repo extends Component {
    render () {
        return (
            <View style={styles.repo}>
                <Image source={{ uri: this.props.repo.image }} style={ styles.repoImage } />
                <View style={ styles.repoInfo }>
                    <Text style={ styles.repoTitle }>{ this.props.repo.title }</Text>
                    <Text style={ styles.repoAuthor }>{ this.props.repo.author }</Text>
                </View>
            </View>
        );
    }
}

export default Repo;