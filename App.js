import React, { useState } from 'react';
import { Text, View, Modal, StyleSheet, Pressable } from 'react-native';

const App = () => {
  const [getPlayer, setPlayer] = useState({ player: 1, symbol: 'X' });
  const [getPress1, setPress1] = useState(false);
  const [getPress2, setPress2] = useState(false);
  const [getPress3, setPress3] = useState(false);
  const [getPress4, setPress4] = useState(false);
  const [getPress5, setPress5] = useState(false);
  const [getPress6, setPress6] = useState(false);
  const [getPress7, setPress7] = useState(false);
  const [getPress8, setPress8] = useState(false);
  const [getPress9, setPress9] = useState(false);
  const [getCount, setCount] = useState(0);
  const [showModal, setModal] = useState(false);

  const Winner = () => {
    if (getCount == 6) {
      if (
        (getPress1 == '0' && getPress5 == '0' && getPress9 == '0') ||
        (getPress4 == '0' && getPress5 == '0' && getPress6 == '0')
      ) {
        setModal(true);
        return true;
      } else {
        setModal(true);
        return false;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Player {getPlayer.player} : {getPlayer.symbol}
      </Text>

      <View>
        <Modal style={styles.modalStyle} visible={showModal} animationType={'slide'} transparent={false}>
          <View>
            <Text>{Winner ? 'Player 2 Won!' : 'Player 1 Won!'}</Text>
          </View>
          <View>
            <Pressable
              style={styles.playAgain}
              onPress={() => {
                setCount(0);
                setPress1(false);
                setPress2(false);
                setPress3(false);
                setPress4(false);
                setPress5(false);
                setPress6(false);
                setPress7(false);
                setPress8(false);
                setPress9(false);
                setModal(false);
                setPlayer({ player: 1, symbol: 'X' });
              }}>
              <Text style={{ color: 'white', padding: 4 }}>Play Again</Text>
            </Pressable>
          </View>
        </Modal>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress1(true);
                Winner;
                setCount((count) => count + 1);
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress1(true);
                setCount((count) => count + 1);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress1 ? '0' : '__'}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress2(true);
                setCount((count) => count + 1);
                Winner;
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress2(true);
                setCount((count) => count + 1);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress2 ? 'X' : '__'}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress3(true);
                setCount((count) => count + 1);
                Winner;
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress3(true);
                setCount((count) => count + 1);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress3 ? 'X' : '__'}</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress4(true);
                setCount((count) => count + 1);
                Winner;
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress4(true);
                setCount((count) => count + 1);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress4 ? '0' : '__'}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress5(true);
                setCount((count) => count + 1);
                Winner;
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress5(true);
                setCount((count) => count + 1);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress5 ? '0' : '__'}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress6(true);
                setCount((count) => count + 1);
                Winner;
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress6(true);
                setCount((count) => count + 1);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress6 ? '0' : '__'}</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress7(true);
                setCount((count) => count + 1);
                Winner;
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress7(true);
                setCount((count) => count + 1);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress7 ? '0' : '__'}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress8(true);
                setCount((count) => count + 1);
                Winner;
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress8(true);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress8 ? 'X' : '__'}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => {
            if (getCount < 6) {
              if (getPlayer.player == 1) {
                setPlayer({ player: 2, symbol: '0' });
                setPress9(true);
                setCount((count) => count + 1);
                Winner;
              } else {
                setPlayer({ player: 1, symbol: 'X' });
                setPress9(true);
                setCount((count) => count + 1);
                Winner;
              }
            }
          }}>
          <Text style={styles.text}>{getPress9 ? '0' : '__'}</Text>
        </Pressable>
      </View>

      <View style={{ padding: 20 }}>
        <Pressable
          style={styles.playAgain}
          onPress={() => {
            setModal(true);
          }}>
          <Text style={{ color: 'white', padding: 4 }}>Check Result</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    padding: 3,
    fontSize: 15,
  },
  button: {
    width: 60,
    backgroundColor: '#f4f4f4',
    height: 40,
    alignItems: 'center',
    margin: 2,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  playAgain: {
    width: 100,
    backgroundColor: 'green',
    height: 30,
    alignItems: 'center',
    margin: 2,
  },
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  }
});

export default App;
