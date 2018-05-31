import React, { Component } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        width: 300,
    },
    boxTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    boxInput: {
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 40,
        borderRadius: 3
    },
    buttomContainer: {
        flexDirection: 'row',
        marginTop: 10,
        height: 40
    },
    buttom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    submitButtom: {
        backgroundColor: '#00b300',
        marginLeft: 5
    },
    cancelButtom: {
        backgroundColor: '#ff4d4d',
        marginRight: 5
    },
    buttomText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default NewRepoModal;