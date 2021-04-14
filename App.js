import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const App = () => {

  const [getPlayer, setPlayer] = useState({player: 1, symbol: 'X'});

  const changePlayer = () => {
    if(getPlayer.player == 1){
      setPlayer({player: 2, symbol: '0'})
    } else {
      setPlayer({player: 1, symbol: 'X'})
    }
  }

  return(
    <View style = {styles.container}>
      <Text style = {styles.paragraph}>Player {getPlayer.player} : {getPlayer.symbol}</Text>

      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          {({pressed}) => (
            <Text>{pressed ? '0': '__'}</Text>
          )}
        </Pressable>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          <Text style = {styles.text}>__</Text>
        </Pressable>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          <Text style = {styles.text}>__</Text>
        </Pressable>

      </View>

      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          <Text style = {styles.text}>__</Text>
        </Pressable>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          <Text style = {styles.text}>__</Text>
        </Pressable>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          <Text style = {styles.text}>__</Text>
        </Pressable>

      </View>

      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          <Text style = {styles.text}>__</Text>
        </Pressable>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          <Text style = {styles.text}>__</Text>
        </Pressable>

        <Pressable style = {styles.button} onPress = {changePlayer}>
          <Text style = {styles.text}>__</Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  text : {
    fontWeight: 'bold',
    padding: 3,
    fontSize: 15
  },
  button : {
    width: 60,
    backgroundColor: '#f4f4f4',
    height: 40,
    alignItems: 'center',
    margin: 2
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
