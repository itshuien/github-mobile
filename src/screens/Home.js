import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchOrganization, fetchRepositories } from '../actions';

import SearchInput from '../components/SearchInput';
import LanguageLabel from '../components/LanguageLabel';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const organization = useSelector(state => state.organization);
  const repositories = useSelector(state => state.repositories);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    dispatch(fetchOrganization('react-native-community'));
    dispatch(fetchRepositories('react-native-community'));
  }, []);

  useEffect(() => {
    setFilteredRepos(repositories);
  }, [repositories]);

  useEffect(() => {
    const repos = repositories.filter(repo => repo.name.includes(searchKeyword));
    setFilteredRepos(repos);
  }, [searchKeyword]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={{ uri: organization.avatar_url }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 2, }}>{organization.name}</Text>
          <Text style={{ fontSize: 12 }}>{organization.description}</Text>
        </View>
      </View>

      <SearchInput searchKeyword={searchKeyword} onChangeText={value => setSearchKeyword(value)} />

      {searchKeyword.length ? <Text style={styles.searchResultInfo}>{filteredRepos.length} repositories found</Text> : null}

      <FlatList
        data={filteredRepos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Repository', { repository: item })} style={styles.listItem}>
            <Text style={{ fontWeight: '700', marginBottom: 4 }}>{item.name}</Text>
            <Text style={{ fontSize: 12 }}>{item.description}</Text>
            {item.language ? <LanguageLabel language={item.language} /> : null}
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        style={styles.flatList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 16,
  },
  searchResultInfo: {
    marginHorizontal: 16,
    marginBottom: 16,
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
  },
  flatList: {
    paddingHorizontal: 16,
  },
  listItem: {
    backgroundColor: '#fcfcfc',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  }
})
