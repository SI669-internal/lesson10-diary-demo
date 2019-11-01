import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { styles } from './Styles';


export class MainScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <Button
          title='See Details'
          onPress={() => {
            this.props.navigation.navigate('Details');
          }}
        />
      </View>
    );
  }

}