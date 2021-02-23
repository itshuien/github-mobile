import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LANGUAGE_COLORS } from '../constants';

export default function LanguageLabel({ language }) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.label, backgroundColor: LANGUAGE_COLORS[language]?.light || LANGUAGE_COLORS.Other.light }}>
        <Text style={{ ...styles.text }}>{language}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: 'row',
  },
  label: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  text: {
    fontSize: 10,
    color: '#333'
  }
})
