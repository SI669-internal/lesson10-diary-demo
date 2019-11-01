import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './Styles';
import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASbJPUAfjRZRtc5qpvsRhs609f8o-B9jc",
  authDomain: "lesson10-diary.firebaseapp.com",
  databaseURL: "https://lesson10-diary.firebaseio.com",
  projectId: "lesson10-diary",
  storageBucket: "lesson10-diary.appspot.com",
  messagingSenderId: "719297828921",
  appId: "1:719297828921:web:3ef7d4908643806e7255e8"
};

export class MainScreen extends React.Component {

  constructor(props) {
    super(props);
    let now = new Date(Date.now());
    console.log(now.toLocaleString());
    let theList = [
      {
        text: 'Hello',
        timestamp: now,
        key: '1223',
      },
      { 
        text: 'Goodbye',
        timestamp: now,
        key: '2244'
      }
    ];
    this.state = {
      entries: theList,
    }
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    this.entriesRef = db.collection('entries'); 
    this.entriesRef.get().then(queryRef=>{
      let newEntries = [];
      queryRef.forEach(docRef=>{
        let docData = docRef.data();
        let newEntry = {
          text: data.text,
          timestamp: data.timestamp.toDate(),
          key: docRef.id
        }
        newEntries.push(newEntry);
      })
      this.setState({entries: newEntries});
    });
  }

  addEntry(newEntry) {
    // add to Firebase
    this.entriesRef.add(newEntry).then(docRef=> {
      newEntry.key = docRef.id;
      let newEntries = this.state.entries.slice(); // clone the list
      newEntries.push(newEntry);
      this.setState({entries: newEntries});
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Diary</Text>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            data={this.state.entries}
            renderItem={
              ({item}) => {
                return (
                  <View style={styles.bodyListItem}>
                    <View style={styles.bodyListItemLeft}>
                      <Text style={styles.bodyListItemDate}>{item.timestamp.toLocaleString()}</Text>
                      <Text style={styles.bodyListItemText}>{item.text}</Text>
                    </View>
                    <View style={styles.bodyListItemRight}>
                      <Button
                        title='Delete'
                        containerStyle={styles.mediumButtonContainer}
                        titleStyle={styles.mediumButtonTitle}
                        onPress={()=>{this.handleDelete(item)}}
                      />
                      <Button
                        title='Edit'
                        containerStyle={styles.mediumButtonContainer}
                        titleStyle={styles.mediumButtonTitle}
                      />
                    </View>

                  </View>
                );
              }} 
          />
        </View>
        <View style={styles.footerContainer}>
          <Button
            title='Add Entry'
            onPress={() => {
              this.props.navigation.navigate('Details', {mainScreen: this});
            }}
          />
        </View>
      </View>
    );
  }

}