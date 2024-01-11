import React from 'react'
import {  Image, StyleSheet, View, } from 'react-native';




export default function ChallengeScreen() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                source = {require('../Challenges/SoalanReactCalculator.png')}
                >
                </Image>
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        pdf: {
          flex: 1,
          width: '100%',
        },
        image:{
            flex:1,
            width:'100%',
            padding:20,
            margin:20,
            // height:700,
        }
      });

