import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './Styles';

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
  }

  addEntry(newEntry) {
    let newEntries = this.state.entries.slice(); // clone the list
    newEntries.push(newEntry);
    this.setState({entries: newEntries});
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