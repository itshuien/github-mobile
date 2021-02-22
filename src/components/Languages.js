import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { getRepoLanguages } from '../services/GithubAPI';
import { languageColors } from '../constants';

export default function Languages({ repoFullName }) {
  const [languages, setLanguages] = useState({});
  const [totalBytes, setTotalBytes] = useState(0);

  const getLanguages = async () => {
    const data = await getRepoLanguages(repoFullName);
    setLanguages(data);
  }

  useEffect(() => {
    getLanguages();
  }, []);

  useEffect(() => {
    const bytes = Object.values(languages).reduce((a, b) => a + b, 0);
    setTotalBytes(bytes);
  }, [languages]);

  return (
    <View>
      <Text style={styles.title}>Languages</Text>

      {!Object.keys(languages).length ? <Text style={{ fontSize: 12, color: '#aaa' }}>No languages used</Text> : null}

      <View style={styles.languageBar}>
        {Object.entries(languages).map(([language, value]) => (
          <View
            key={language}
            style={{ ...styles.languageBarFill, width: `${value/totalBytes * 100}%`, backgroundColor: languageColors[language] || languageColors.Other }}
          />
        ))}
      </View>

      <View style={{ marginBottom: 16 }}>
        {Object.entries(languages).map(([language, value]) => (
          <View key={language} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <View style={{ ...styles.dot, backgroundColor: languageColors[language] || languageColors.Other }} />
            <Text>{language}: {(value/totalBytes * 100).toFixed(1)}%</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#666',
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
    marginTop: 24,
    marginBottom: 16,
  },
  languageBar: {
    height: 10,
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  languageBarFill: {
    height: '100%',
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 8,
  }
})
