# React Native Agenda (CRNA)

![agenda](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_611,w_350/v1502435557/agenda/agenda.jpg)

### Create App

    create-react-native-app agenda

### Create folder app & folder components

    e:\>workspace\app\components 

### import components from react-native library 

    TextInput, ScrollView, TouchableOpacity 

### Create container & header

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Agenda Hari Ini</Text>
      </View>        
    </View>

### Create style element

    const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      header: {
        backgroundColor: '#3B5998',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
      }
    })  

### Create ScrollView

    <ScrollView style={styles.scrollContainer}>
    
    </ScrollView>

### Create Footer

    <View style={styles.footer}>
           
    </View>

### Tambahkan Button dengan component TouchableOpacity didalam Footer

    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>    

### Tambahkan TextInput didalam Footer, dibawah Button

    <TextInput style={styles.textInput}
      placeholder='> Catatan penting...'
      placeholderTextColor='white'
      underlineColorAndroid='transparent'
    >
    </TextInput>        

### Tambahkan pada style element yang sudah ada

    scrollContainer: {
      flex: 1,
      marginBottom: 100
    },
    footer: {
      position: 'absolute',
      alignItems: 'center',
      bottom: 0,
      left: 0,
      right: 0
    },
    addButton: {
      backgroundColor: '#3B5998',
      width: 90,
      height: 90,
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
      fontSize: 50
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

### Hasil akhirnya App.js seperti ini:

    <View style={styles.container}>
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
    </View>

### Create Component Note

    e:\>workspace\app\components\Note.js

### Masukan code pada file Note.js seperti dibawah ini

    import React from 'react';
    import { 
      StyleSheet, 
      Text, 
      View,
      TouchableOpacity
    } from 'react-native';

    export default class Note extends React.Component {
      render() {
        return (
          <View style={styles.note}>
            
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      
    });
    
### Create layout dan styleSheet

    note: {
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed'
    }

### Didalam <View> buat Text dan props yang akan di inherited dari parent nanti.

    <Text style={styles.noteText}>{this.props.val.date}</Text>
    <Text style={styles.noteText}>{this.props.val.note}</Text>

### Tambahkan style

    noteText: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#E91E63'
    }

### Create Delete Button

    <TouchableOpacity
      style={styles.noteDelete} 
      onPress={this.props.deleteMethod} 
    >
      <Text style={styles.noteDeleteText}>D</Text>
    </TouchableOpacity>

### Tambahkan style

    noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#a6c0f4',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
      borderRadius: 20
    },
    noteDeleteText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500'
    } 

### Import Note.js ke App.js

    import Note from './app/components/Note';

### Define initial state di App.js

    export default class App extends React.Component {
      state = {
        noteArray: [],
        noteText: ''
      }

### Loop notes dengan map

    let notes = this.state.noteArray.map((val, key) => {
      
    });     

### Dan return component dan lewatkan props ke dalam component

    let notes = this.state.noteArray.map((val, key) => {
      return <Note 
        key={key} 
        keyval={key} 
        val={val} 
        deleteMethod={ () => this.deleteNote(key) } 
      />
    });

### Kembali ke file Note.js dan tambahkan key props pada component

    key={this.props.keyval}

Menjadi:    

    <View key={this.props.keyval} style={styles.note}>
      <Text style={styles.noteText}>{this.props.val.date}</Text>
      <Text style={styles.noteText}>{this.props.val.note}</Text>

### Kembali ke App.js update ScrollView menjadi:

    <ScrollView style={styles.scrollContainer}>
      { notes }
    </ScrollView>

### Tambahkan test pada noteArray secara manual

    state = {
      noteArray: [{'date': 'Testdate', 'note': 'Catatan penting 1'}]    

### Tambahkan onPress event pada Button TouchableOpacity

    <View style={styles.footer}>
      <TouchableOpacity 
        onPress={this.addNote.bind(this)} 
        
### Tambahkan event onChange pada TextInput

    <TextInput style={styles.textInput}
      onChangeText={(noteText) => this.setState({noteText})}
      value={this.state.noteText}

### Buat helper method addNote dan test alert

    addNote() {
      alert(this.state.noteText); 
    }

### Dan tambahkan menjadi sbb:

    addNote() { 
      if (this.state.noteText) {
        var d = new Date();
        this.state.noteArray.push( {
          'date': (d.getDate() + 1) + 
          "/" + (d.getMonth() + 1) + 
          "/" + d.getFullYear(), 
          'note': this.state.noteText} );
        this.setState({ noteArray: this.state.noteArray })
        this.setState({ noteText: '' }); 
      }
    }

### Menambahkan function untuk delete record

    deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray });
    }
