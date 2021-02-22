import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function BackButton({ onPress }) {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      style={{ marginVertical: 16 }}
      onPress={onPress}
    />
  )
}
