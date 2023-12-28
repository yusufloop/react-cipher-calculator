import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

export default function NewTweet() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.tweetName}>Yusuf</Text>
            <Text style={styles.tweetHandle}>@Yusuf</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.tweetContentContainer}>
        <Text style={styles.tweetContainer}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta
          doloremque corporis eveniet! Dicta, iure quibusdam. Fugiat accusantium
          nisi tempora.
        </Text>
      </View>
      <View style={styles.tweetEngagement}>
        <View style={styles.flexRow}>
          <Text style={styles.tweetEngagementNumber}>43643</Text>
          <Text style={styles.tweetEngagementLabel}>Retweet</Text>
        </View>
        <View style={[styles.flexRow, styles.ml4]}>
          <Text style={styles.tweetEngagementNumber}>443</Text>
          <Text style={styles.tweetEngagementLabel}>Qoute Tweet</Text>
        </View>
        <View style={[styles.flexRow, styles.ml4]}>
          <Text style={styles.tweetEngagementNumber}>3,523</Text>
          <Text style={styles.tweetEngagementLabel}>Likes</Text>
        </View>
      </View>
      <View style={[styles.tweetEngagement, styles.spaceAround]}>
        <TouchableOpacity>
          <EvilIcons
            name="comment"
            size={32}
            color="grey"
            style={{ marginRight: 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons
            name="retweet"
            size={32}
            color="grey"
            style={{ marginRight: 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons
            name="heart"
            size={32}
            color="grey"
            style={{ marginRight: 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons
            name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
            size={22}
            color="grey"
            style={{ marginRight: 2 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexRow: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 25,
  },
  tweetName: {
    fontWeight: 'bold',
    color: '#222222',
  },
  tweetHandle: {
    color: 'gray',
    marginTop: 4,
  },
  tweetContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tweetContent: {
    fontSize: 20,
    lineHeight: 30,
  },
  tweetEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tweetEngagementNumber: {
    fontWeight: 'bold',
  },
  tweetEngagementLabel: {
    color: 'gray',
    marginLeft: 6,
  },
  spaceAround:{
    justifyContent: 'space-around',
  },
  ml4: {
    marginLeft: 16,
  },
});
