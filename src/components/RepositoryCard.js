import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import LanguageLabel from '../components/LanguageLabel';

export default function RepositoryCard({ repository, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.name}>{repository.name}</Text>
      <Text style={styles.description}>{repository.description}</Text>
      {repository.language ? <LanguageLabel language={repository.language} /> : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
  }
})
