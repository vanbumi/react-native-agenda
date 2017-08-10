import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity

} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello Fest!</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <Text>tesst</Text>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
            placeholder='> Catatan...'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
          >
          </TextInput>     
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'lightblue',
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
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
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#E91E64',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 15,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 22,
    borderTopColor: '#ededed'
  }

});
