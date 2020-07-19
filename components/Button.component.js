import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Button = ({ onPress, title, disabled = false, type = 'primary' }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
