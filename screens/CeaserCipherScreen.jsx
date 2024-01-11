import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function HomeScreen() {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(1);
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const plus10Opacity = useSharedValue(0);

  const showPlus10 = () => {
    plus10Opacity.value = withTiming(1, { duration: 500 });
    setTimeout(() => {
      plus10Opacity.value = withTiming(0, { duration: 500 });
    }, 500);
  };

  const caesarCipher = (text, shift) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (alphabet.includes(char)) {
          const index = (alphabet.indexOf(char) - shift + 26) % 26;
          return alphabet[index];
        } else {
          return char;
        }
      })
      .join('');
  };

  const handleEncrypt = () => {
    setScore((prevScore) => prevScore + 10);
    showPlus10();

    const encryptedText = caesarCipher(text, shift);
    setModalVisible(true);
  };

  const plus10Style = useAnimatedStyle(() => ({
    opacity: plus10Opacity.value,
    transform: [{ translateY: withSpring(-30) }],
  }));

  const CeaserModal = ({ visible, onRequestClose }) => (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Encrypted Text</Text>
          <Text>{caesarCipher(text, shift)}</Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.encryptContainer}>
          <View style={styles.padding}>
            <Text>Score: {score}</Text>
          </View>

          <Animated.View style={[styles.popUpScore, plus10Style]}>
            <Text style={{ color: 'green', fontWeight: 'bold' }}>+10</Text>
          </Animated.View>
          <View style={styles.padding}>
            <TextInput
              placeholder="Enter text"
              style={styles.encryptInput}
              value={text}
              onChangeText={setText}
            />
          </View>
          <TextInput
            placeholder="Enter shift"
            value={shift.toString()}
            style={styles.encryptInput}
            onChangeText={(value) => setShift(parseInt(value) || 0)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.encryptButtonContainer}>
          <TouchableOpacity style={styles.encryptButton} onPress={handleEncrypt}>
            <CeaserModal
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            />

            <Text style={styles.encryptText}>Calculate</Text>
          </TouchableOpacity>
          {/* Add other UI components and actions as needed */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#1d9bf1',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  encryptButton: {
    backgroundColor: '#1d9bf1',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 24,
  },
  encryptText: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  encryptButtonContainer: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popUpScore: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  encryptContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  encryptInput: {
    backgroundColor: '#DCF2F1',
    color: 'black',
    borderRadius: 5,
  },
  padding: {
    paddingBottom: 5,
  },
});
