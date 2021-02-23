import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function BackButton({ color, onPress }) {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      color={color}
      style={{ marginVertical: 16 }}
      onPress={onPress}
    />
  )
}
