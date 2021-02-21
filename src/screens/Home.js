import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Repository')}>
        <Text>Go to Repository</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})
