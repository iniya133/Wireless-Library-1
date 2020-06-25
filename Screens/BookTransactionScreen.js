import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class TransactionScreen extends React.Component {
    render() {
        return (
            <View style = {{flex : 1 , alignItems: "center", justifyContent:"center"}}>
                <Text>Issue or Return</Text>
            </View>
        )
    }
}