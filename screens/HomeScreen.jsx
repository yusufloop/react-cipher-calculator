import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: '4 Item',
    },
    {
      id: '5',
      title: '5 Item',
    },
    {
      id: '6',
      title: '6 Item',
    },
    {
      id: '7',
      title: '7 Item',
    },
    {
      id: '8',
      title: '8 Item',
    },
    {
      id: '9',
      title: '9 Item',
    },
    {
      id: '10',
      title: '10 Item',
    },
    {
      id: '11',
      title: '11 Item',
    },
    {
      id: '12',
      title: '12 Item',
    },
  ];

  function gotoProfile() {
    navigation.navigate('Profile Screen');
  }
  function gotoSingleTweet() {
    navigation.navigate('Tweet Screen');
  }
  function gotoNewTweet() {
    navigation.navigate('New Tweet');
  }

  const renderItem = ({ item }) => (
    <View style={styles.tweetContainer}>
      <TouchableOpacity onPress={() => gotoProfile()}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.flexRow}
          onPress={() => gotoSingleTweet()}
        >
          <Text numberOfLines={1} style={styles.tweetName}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            @yusuf
          </Text>
          <Text>&middot;</Text>
          <Text numberOfLines={1} style={styles.tweetHandle}>
            9m
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tweetContainer}
          onPress={() => gotoSingleTweet()}
        >
          <Text style={styles.tweetContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ab dolor dicta sapiente eum officiis similique ullam illo alias
            itaque.
          </Text>
        </TouchableOpacity>
        <View style={styles.tweetEngagement}>
          <TouchableOpacity style={styles.flexRow}>
            <EvilIcons
              name="comment"
              size={22}
              color="grey"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>456</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow,styles.ml4]}>
            <EvilIcons
              name="retweet"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>56</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow,styles.ml4]}>
            <EvilIcons
              name="heart"
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textGray}>106</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flexRow,styles.ml4]}>
            <EvilIcons
              name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
              size={22}
              color="gray"
              style={{ marginRight: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
      />
      <TouchableOpacity style={styles.floatingButton} onPress={() => gotoNewTweet()}>
        <AntDesign name="plus" size={26} color="white"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  tweetContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  tweetSeparator:{
    borderBottomWidth:1,
    borderBottomColor: '#e5e7eb'
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  flexRow: {
    flexDirection: 'row',
  },
  tweetName: {
    fontWeight: 'bold',
    color: '#222222',
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: 'gray',
  },
  tweetContentContainer: {
    marginTop: 4,
  },
  tweetContent: {
    lineHeight: 20,
  },
  TextGray: {
    color: 'grey',
  },
  tweetEngagement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  ml4:{
    marginLeft:16,
  },
  floatingButton:{
    width: 60,
    height: 60,
    borderRadius:30,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#1d9bf1',
    position:'absolute',
    bottom: 20,
    right: 12,
  }
});
