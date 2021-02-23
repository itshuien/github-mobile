import React from 'react';
import { StyleSheet, StatusBar, Text, View, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import { THEME_COLOR } from '../constants';

import BackButton from '../components/BackButton';
import HorizontalLine from '../components/HorizontalLine';
import Chip from '../components/Chip';
import Languages from '../components/Languages';

export default function Repository({ route, navigation }) {
  const { repository } = route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeAreaView edges={['right', 'left', 'top']} style={styles.topContainer}>
        <BackButton color="#ccc" onPress={() => navigation.pop()} />

        <Text style={styles.organization}>{repository.owner.login}</Text>
        <Text style={styles.name}>{repository.name}</Text>
        <Text style={styles.description}>{repository.description}</Text>
      </SafeAreaView>

      <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.bottomContainer}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Text style={styles.subheader}>Details</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Chip
              icon={<AntDesign name="star" size={16} color="#fcba03" />}
              text="Stars"
              value={repository.stargazers_count}
              backgroundColor="#f5e8c4"
              width="48%"
            />

            <Chip
              icon={<AntDesign name="eye" size={16} color="#e3820b" />}
              text="Watchers"
              value={repository.watchers_count}
              backgroundColor="#fae4c8"
              width="48%"
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Chip
              icon={<AntDesign name="exclamationcircleo" size={16} color="#1ea61e" />}
              text="Open Issues"
              value={repository.forks_count}
              backgroundColor="#d2f0c5"
              width="48%"
            />
            <Chip
              icon={<AntDesign name="fork" size={16} color="#e03f3f" />}
              text="Forks"
              value={repository.forks_count}
              backgroundColor="#fad9d9"
              width="48%"
            />
          </View>

          <HorizontalLine />

          <Text style={styles.subheader}>Languages</Text>

          <Languages repoFullName={repository.full_name} />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: THEME_COLOR.backgroundDark,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  bottomContainer: {
    flex: 1,
  },
  organization: {
    color: THEME_COLOR.secondary,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  name: {
    color: THEME_COLOR.primary,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 36,
  },
  updatedAt: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 36,
  },
  subheader: {
    color: '#555',
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    marginBottom: 16,
  }
})
