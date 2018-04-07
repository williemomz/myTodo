import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './Note';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteTxt: '',
        }
    }

  render() {

     let notes = this.state.noteArray.map((val, key) => {
         return <Note key={key} keyval={key} val={val}
                        delMethod={ ()=> this.delNote(key) }  />
     });

    return (
      <View style={styles.container}>

      <View style={styles.header}>
      <Text style={styles.headerTxt}>--NOTE APP--</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {notes}
      </ScrollView>

      <View style={styles.footer}>
            <TextInput style={styles.txtInput}
                        onChangeText={(noteTxt) => this.setState({noteTxt})}
                        value={this.state.noteTxt}
                        placeholder='take note'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
            </TextInput>
      
      </View>

      <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addBtn}>
      <Text style={styles.addBtnTxt}>+</Text>
      </TouchableOpacity>

      </View>
    );
  }

  addNote(){
      if (this.state.noteTxt) {
          var d = new Date();
          this.state.noteArray.push({
              'date': d.getFullYear() + d.getMonth() + d.getDate(),
              'note': this.state.noteTxt
          });
          this.setState({ noteArray: this.state.noteArray })
          this.setState({noteTxt: ''});
      }
  }

  delNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({noteArray: this.state.noteArray})
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  header: {
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
  },
  headerTxt: {
      color: 'white',
      fontSize: 18,
      padding: 26,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
  },
  txtInput:{
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: 'green',
      borderTopWidth: 2,
      borderTopColor: 'yellow',
  },
  addBtn: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: 'purple',
      width: 80,
      height: 80,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
  },
  addBtnTxt: {
      color: '#fff',
      fontSize: 24,
  },   
});
