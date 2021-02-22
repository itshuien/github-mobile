import React from 'react';
import { StyleSheet, View, TextInput, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SearchInput({ searchKeyword, onChangeText }) {
  const resetSearchKeyword = () => {
    onChangeText('');
  }

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={16} style={styles.searchIcon} />

      <TextInput
        value={searchKeyword}
        onChangeText={onChangeText}
        placeholder="Search repositories by name"
        autoCapitalize="none"
        style={styles.searchInput}
      />

      {searchKeyword.length ?
        <AntDesign
          name="closecircle"
          size={16}
          style={styles.closeIcon}
          onPress={resetSearchKeyword}
        />
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
  },
  searchIcon: {
    color: '#888',
  },
  searchInput: {
    flex: 1,
    flexShrink: 1,
    paddingHorizontal: 8,
  },
  closeIcon: {
    color: '#ccc',
  }
})
