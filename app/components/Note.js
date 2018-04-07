import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Note extends React.Component {
  render() {
    return (

        <View key={this.props.keyval} style={styles.note}>

            <Text style={styles.noteTxt}>{this.props.val.date}</Text>
            <Text style={styles.noteTxt}>{this.props.val.note}</Text>

            <TouchableOpacity onPress={this.props.delMethod} style={styles.noteDel}>
                <Text style={styles.noteDelTxt}>Delete</Text>
            </TouchableOpacity>

        </View>

    );
  }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteTxt: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    noteDel: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDelTxt: {
        color: 'white',
    }
});
