import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Chip({ icon, text, value, backgroundColor, width }) {
  return (
    <View style={{ ...styles.chip, width }}>
      <View style={styles.titleContainer}>
        <View style={styles.titleIcon}>{icon}</View>
        <Text style={styles.titleText}>{text}</Text>
      </View>
      <View style={{ ...styles.valueContainer, backgroundColor }}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#fcfcfc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    marginHorizontal: 8,
  },
  titleText: {
    fontSize: 12,
  },
  valueContainer: {
    borderRadius: 24,
    minWidth: 24,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    opacity: 0.6,
  },
  valueText: {
    fontSize: 12,
  }
})
