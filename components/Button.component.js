import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { main, disabledBackGround, white, secondary } from '../utils/colors'

const Button = ({ onPress, title, disabled = false, type = 'primary' }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={disabled ? localStyle.disabledButton : localStyle.button}
    >
      <Text
        style={disabled ? localStyle.disabledButtonText : localStyle.buttonText}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const localStyle = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: main,
    width: 130,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  disabledButton: {
    padding: 10,
    backgroundColor: disabledBackGround,
    width: 130,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: white,
  },
  disabledButtonText: {
    textAlign: 'center',
    color: secondary,
  },
})

export default Button
