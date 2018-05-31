import React, { Component } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import styles from './styles';

class NewRepoModal extends Component {
    render () {
        return (
            <Modal animationType="fade" transparent={true} visible={true} >
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer} >
                        <Text style={styles.boxTitle}>Add New Repository</Text>
                        <TextInput 
                            autoFocus
                            autoCapitalize="none"
                            style={styles.boxInput}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="organization/repo-name"                            
                        />
                        <View style={styles.buttomContainer}>
                            <TouchableOpacity 
                                style={[styles.buttom, styles.cancelButtom]}
                                onPress={ () => {} }
                            >
                                <Text style={styles.buttomText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.buttom, styles.submitButtom]}
                                onPress={ () => {} }
                            >
                                <Text style={styles.buttomText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default NewRepoModal;