import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Header extends Component {
    render () {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Welcome to Mini App GitApi!
                </Text>

                <TouchableOpacity onPress={ this.props.onShowModal }>
                    <Text style={styles.btnAdd}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Header;