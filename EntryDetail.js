import React from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { styles } from './Styles';

export class EntryDetailScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Entry Details</Text>
          </View>
        <View style={styles.bodyContainer}>
          <Input
            multiline={true}
            placeholder="What's new?"
            inputContainerStyle={styles.largeInput}
            containerStyle={{justifyContent: 'flex-start'}}
          />
        </View>
        <View style={styles.footerContainer}>
          <Button
            title='Cancel'
            containerStyle={styles.mediumButtonContainer}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Button
            title='Save'
            containerStyle={styles.mediumButtonContainer}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  }

}