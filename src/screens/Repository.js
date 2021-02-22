import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import BackButton from '../components/BackButton';
import Chip from '../components/Chip';
import Languages from '../components/Languages';

export default function Repository({ route, navigation }) {
  const { repository } = route.params;

  return (
    <SafeAreaView style={{ marginHorizontal: 16 }}>
      <BackButton onPress={() => navigation.pop()} />

      <Text style={styles.organization}>{repository.owner.login}</Text>
      <Text style={styles.title}>{repository.name}</Text>
      <Text style={styles.description}>{repository.description}</Text>

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

      <Languages repoFullName={repository.full_name} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  organization: {
    color: '#DB1D5E',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  title: {
    color: '#111A29',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
  },
})
