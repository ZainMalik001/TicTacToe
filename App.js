import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const App = () => {

  const [getPlayer, setPlayer] = useState({player: 1, symbol: 'X'});
  const [getPress1, setPress1] = useState(false);
  const [getPress2, setPress2] = useState(false);
  const [getPress3, setPress3] = useState(false);
  const [getPress4, setPress4] = useState(false);
  const [getPress5, setPress5] = useState(false);
  const [getPress6, setPress6] = useState(false);
  const [getPress7, setPress7] = useState(false);
  const [getPress8, setPress8] = useState(false);
  const [getPress9, setPress9] = useState(false);

  const changePlayer = (btn) => {
    if(getPlayer.player == 1){
      setPlayer({player: 2, symbol: '0'})
      pBtn = 'press'+ btn;
    } else {
      setPlayer({player: 1, symbol: 'X'})
      setPress(!press);
    }
  }

  return(
    <View style = {styles.container}>
      <Text style = {styles.paragraph}>Player {getPlayer.player} : {getPlayer.symbol}</Text>

      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>

        <Pressable
         style = {styles.button}
         onPress = {() => {
           if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress1(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress1(true)
          }
        }}
        >
          <Text style ={styles.text}>{getPress1 ? '0': '__'}</Text>
        </Pressable>

        <Pressable 
          style = {styles.button}
          onPress = {() => {
            if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress2(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress2(true)
          }
          }}
        >
          <Text style = {styles.text}>{getPress2 ? 'X': '__'}</Text>
        </Pressable>

        <Pressable 
          style = {styles.button}
           onPress = {() => {
            if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress3(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress3(true)
          }
          }}
        >
          <Text style = {styles.text}>{getPress3 ? 'X': '__'}</Text>
        </Pressable>

      </View>

      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>

        <Pressable 
          style = {styles.button}
          onPress = {() => {
            if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress4(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress4(true)
          }
          }}
        >
          <Text style = {styles.text}>{getPress4 ? 'X': '__'}</Text>
        </Pressable>

        <Pressable 
          style = {styles.button}
           onPress = {() => {
            if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress5(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress5(true)
          }
          }}
        >
          <Text style = {styles.text}>{getPress5 ? '0': '__'}</Text>
        </Pressable>

        <Pressable 
          style = {styles.button}
           onPress = {() => {
            if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress6(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress6(true)
          }
          }}
        >
          <Text style = {styles.text}>{getPress6 ? 'X': '__'}</Text>
        </Pressable>

      </View>

      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>

        <Pressable 
          style = {styles.button}
           onPress = {() => {
            if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress7(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress7(true)
          }
          }}
        >
          <Text style = {styles.text}>{getPress7 ? '0': '__'}</Text>
        </Pressable>

        <Pressable 
          style = {styles.button}
           onPress = {() => {
            if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress8(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress8(true)
          }
          }}
        >
          <Text style = {styles.text}>{getPress8 ? 'X': '__'}</Text>
        </Pressable>

        <Pressable 
          style = {styles.button}
           onPress = {() => {
            if(getPlayer.player == 1){
            setPlayer({player: 2, symbol: '0'})
            setPress9(true)
          } else {
            setPlayer({player: 1, symbol: 'X'})
            setPress9(true)
          }
          }}
        >
          <Text style = {styles.text}>{getPress9 ? '0': '__'}</Text>
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
