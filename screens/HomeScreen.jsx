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
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Ceaser Cipher:</Text>
        <Text style={styles.textBody}>
        Type: Substitution Cipher
        Method: Each letter in the plaintext is shifted a certain number of places down or up the alphabet.
        Key: The shifting number is the key to encrypt or decrypt the message.
        Example: With a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on.
        </Text>
        <Text style={styles.textTitle}>Pigpen Cipher:</Text>
        <Text style={styles.textBody}>
          Type: Geometric Substitution Cipher Method: Uses a grid or a set of
          symbols to represent each letter. Key: The arrangement of symbols in
          the grid or key chart. Example: The letter 'A' might be represented by
          a dot at the center of a 2x2 grid. Usage: Often used in Freemasonry
          and related secret societies. Variations: There are variations in the
          symbol arrangements, but the basic idea is to encode letters with
          simple geometric shapes.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  textTitle:{
    fontSize:20,
    fontWeight:'bold'
  },
  textBody:{
    fontSize:15,
    paddingBottom:10,
  }
});
