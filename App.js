import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Note from './app/components/Note';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class App extends React.Component {

  state = {
    noteArray: [{'date': 'Testdate', 'note': 'Catatan penting 1'}],
    noteText: ''
  }

  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note 
          key={key} 
          keyval={key} 
          val={val} 
          deleteMethod={ () => this.deleteNote(key) } 
        />
    });

    return (
      
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>Agenda Hari Ini</Text>
          </View>

          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>

            <TextInput style={styles.textInput}
              onChangeText={(noteText) => this.setState({noteText})}
              value={this.state.noteText}
              placeholder='> Catatan penting...'
              placeholderTextColor='white'
              underlineColorAndroid='transparent'
            >
            </TextInput>     
          </View>
        </KeyboardAwareScrollView>  
      </View>
      
    );
  }

  addNote() {
    //alert(this.state.noteText); 
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push( {
        'date': d.getDate() + 
        "/" + (d.getMonth() + 1) + 
        "/" + d.getFullYear(), 
        'note': this.state.noteText} );
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' }); 
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

// Bagian Style
const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'lightblue',
    flex: 1,
    marginTop: 25
  },
  header: {
    backgroundColor: '#3B5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 20
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
    //backgroundColor: 'lightblue'
  },
  footer: {
    //backgroundColor: 'black',
    //position: 'absolute',
    alignItems: 'center',
    //bottom: 0,
    //left: 0,
    //right: 0,
  },
  addButton: {
    backgroundColor: '#3B5998',
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 15,
    paddingTop: 40,
    backgroundColor: '#3B5998',
    borderTopWidth: 20,
    borderTopColor: '#ededed'
  }

});
