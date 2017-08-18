import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
        super(props);
        this.state = {display: 'none'};
  }

  render() {
      function showText() {
        this.setState({display: this.state.display === 'none' ? 'block' : 'none'})
      }
    return (
      <View style={styles.container}>
        <View style={styles.button} onClick={() => {this.showText()}}>
          <Text style={styles.buttonText}>Show</Text>
        </View>
          <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
        color: 'red',
        fontSize: 18
    },

    button: {
        backgroundColor: 'blue',
        width: 80,
        height: 80,
        borderRadius: 40,
        border: 40
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
    }
});
