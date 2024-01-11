import React, { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Modal from 'react-native-modal';

export default function PigPenCipherScreen() {
  const [text, setText] = useState('');
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const plus10Opacity = useSharedValue(0);

  const showPlus10 = () => {
    plus10Opacity.value = withTiming(1, { duration: 500 });
    setTimeout(() => {
      plus10Opacity.value = withTiming(0, { duration: 500 });
    }, 500);
  };
  const plus10Style = useAnimatedStyle(() => ({
    opacity: plus10Opacity.value,
    transform: [{ translateY: withSpring(-30) }],
  }));

  const cipherMap = {
    A: require('../assets/icons/a.png'),
    B: require('../assets/icons/b.png'),
    C: require('../assets/icons/c.png'),
    D: require('../assets/icons/d.png'),
    E: require('../assets/icons/e.png'),
    F: require('../assets/icons/f.png'),
    G: require('../assets/icons/g.png'),
    H: require('../assets/icons/h.png'),
    I: require('../assets/icons/i.png'),
    J: require('../assets/icons/j.png'),
    K: require('../assets/icons/k.png'),
    L: require('../assets/icons/l.png'),
    M: require('../assets/icons/m.png'),
    N: require('../assets/icons/n.png'),
    O: require('../assets/icons/o.png'),
    P: require('../assets/icons/p.png'),
    Q: require('../assets/icons/q.png'),
    R: require('../assets/icons/r.png'),
    S: require('../assets/icons/s.png'),
    T: require('../assets/icons/t.png'),
    U: require('../assets/icons/y.png'),
    V: require('../assets/icons/v.png'),
    W: require('../assets/icons/w.png'),
    X: require('../assets/icons/x.png'),
    Y: require('../assets/icons/y.png'),
    Z: require('../assets/icons/z.png'),
    // Add other mappings as needed
  };

  const CipherModal = ({ visible, onRequestClose, images }) => (
    <Modal isVisible={visible} onBackdropPress={onRequestClose}>
      <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Encrypted Text</Text>
        <View style={styles.imageRow}>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.modalImage} />
          ))}
        </View>
        <Pressable
          style={[styles.modalButton, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
        </View>
      </View>
    </Modal>
  );

  function pigpenCipher(text) {
    return text
      .toUpperCase()
      .split('')
      .map(char => (cipherMap[char] ? cipherMap[char] : char))
      .join('');
  }

  const handleEncrypt = () => {
    setScore(prevScore => prevScore + 10);
    showPlus10();

    const encryptedText = pigpenCipher(text);
    setModalVisible(true);
    // Alert.alert('Encrypted Text', encryptedText);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PigPen Cipher</Text>
      <View style={styles.padding}>
        <Text>Score: {score}</Text>
      </View>

      <Animated.View style={[styles.popUpScore, plus10Style]}>
        <Text style={{ color: 'green', fontWeight: 'bold' }}>+10</Text>
      </Animated.View>
      <TextInput
        placeholder="Enter Text"
        style={styles.encryptInput}
        value={text}
        onChangeText={setText}
      ></TextInput>

      <TouchableOpacity style={styles.encryptButton} onPress={handleEncrypt}>
        <Text style={styles.encryptText}>Calculate</Text>
      </TouchableOpacity>
      <CipherModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        images={text
          .toUpperCase()
          .split('')
          .map(char => cipherMap[char] || null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  encryptInput: {
    backgroundColor: '#DCF2F1',
    color: 'black',
    borderRadius: 5,
  },
  encryptText: {
    color: 'white',
    fontWeight: 'bold',
  },
  encryptButton: {
    backgroundColor: '#1d9bf1',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 24,
  },
  popUpScore: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 30,
    height: 30,
    margin: 5,
  },
  imageRow: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
