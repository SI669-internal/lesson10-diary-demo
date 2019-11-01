import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import {styles} from './Styles';


export class EntryDetailScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Entry Details</Text>
        <Button
          title='Go Back'
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }

}