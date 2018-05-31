import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

class Repo extends Component {
    render () {
        return (
            <View style={styles.repo}>
                <Image source={{ uri: '' }} style={ styles.repoImage } />
                <View style={ styles.repoInfo }>
                    <Text style={ styles.repoTitle }>Title of the repo</Text>
                    <Text style={ styles.repoAuthor }>This is author</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    repo: {
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    repoImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    repoInfo: {
        marginLeft: 10
    },
    repoTitle: {
        fontWeight: 'bold',
        color: '#333'
    },
    repoAuthor: {
        fontSize: 12,
        color: '#999'
    }
});

export default Repo;