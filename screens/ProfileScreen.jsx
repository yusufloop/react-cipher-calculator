import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export default function ProfileScreen() {
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

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 20 }}>
      <Text>{item.title}</Text>
    </View>
  );

  const ProfileHeader = () => (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: 'https://source.unsplash.com/landscape-photo-of-mountain-during-nighttime-n_Jb_d8O43Q',
        }}
      />
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.profileName}>Yusuf</Text>
        <Text style={styles.profileHandle}>@Yusuf</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.profileContainerText}>Ceo of hensem Guy</Text>
      </View>
      <View style={styles.locationContainer}>
        <EvilIcons
          name="location"
          size={24}
          color="gray"
          style={{ marginRight: 2 }}
        />
        <Text style={styles.textGray}>Selangor,Malaysia</Text>
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity
          style={styles.linkItem}
          onPress={() => Linking.openURL('https://laracast.com')}
        >
          <EvilIcons name="link" size={24} color="gray" />
          <Text style={styles.linkColor}>laracast.com</Text>
        </TouchableOpacity>
        <View style={[styles.linkItem, styles.ml4]}>
          <EvilIcons name="calendar" size={24} color="gray" />
          <Text style={styles.textGray}>Joined March 2009</Text>
        </View>
      </View>

      <View style={styles.followContainer}>
        <View style={styles.followItem}>
          <Text style={styles.followItemNumber}>633</Text>
          <Text style={styles.followItemLabel}>Following</Text>
        </View>
        <View style={[styles.followItem, styles.ml4]}>
          <Text style={styles.followItemNumber}>3255</Text>
          <Text style={styles.followItemLabel}>Followers</Text>
        </View>
      </View>


      <View style={styles.separator}></View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      ListHeaderComponent={ProfileHeader}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ml4: {
    marginLeft: 16,
  },
  backgroundImage: {
    width: 800,
    height: 120,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    marginTop: -34,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: 'white',
  },
  followButton: {
    backgroundColor: '#0f1418',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  profileHandle: {
    color: 'gray',
    marginTop: 1,
  },
  profileContainer: {
    paddingHorizontal: 10,
    marginTop: 8,
  },
  profileContainerText: {
    lineHeight: 22,
  },
  textGray: {
    color: 'grey',
  },
  locationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 12,
  },
  linkDirection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 4,
  },
  linkContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 12,
  },
  linkColor: {
    color: '#1d9bf1',
  },
  linkItem: {
    flexDirection: 'row',
  },
  followContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  followItem: {
    flexDirection: 'row',
  },
  followItemNumber: {
    fontWeight: 'bold',
  },
  followItemLabel: {
    marginLeft: 4,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
});
