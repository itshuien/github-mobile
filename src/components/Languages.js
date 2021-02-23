import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { getRepoLanguages } from '../services/GithubAPI';
import { LANGUAGE_COLORS } from '../constants';

export default function Languages({ repoFullName }) {
  const [languages, setLanguages] = useState({});
  const [totalBytes, setTotalBytes] = useState(0);

  const getLanguageColor = language => {
    return LANGUAGE_COLORS[language]?.original || LANGUAGE_COLORS.Other.original;
  }

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
      {!Object.keys(languages)?.length ? <Text style={styles.notFoundText}>No languages used</Text> : null}

      <View style={styles.languageBar}>
        {Object.entries(languages).map(([language, value]) => (
          <View
            key={language}
            style={{
              ...styles.languageBarFill,
              width: `${value/totalBytes * 100}%`,
              backgroundColor: getLanguageColor(language)
            }}
          />
        ))}
      </View>

      <View style={styles.list}>
        {Object.entries(languages).map(([language, value]) => (
          <View key={language} style={styles.listItem}>
            <View style={{
              ...styles.bullet,
              backgroundColor: getLanguageColor(language)
            }} />
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
    marginBottom: 16,
  },
  languageBar: {
    height: 16,
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  languageBarFill: {
    height: '100%',
    width: '100%',
  },
  bullet: {
    width: 12,
    height: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  list: {
    paddingHorizontal: 4,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  notFoundText: {
    fontSize: 12,
    color: '#aaa',
  }
})
