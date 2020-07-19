import { StyleSheet } from 'react-native'
import { primary, backGround, lightBackGround, main } from './colors'
const DefaultStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: lightBackGround,
    padding: 20,
  },
  inputField: {
    backgroundColor: backGround,
    padding: 15,
    color: primary,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: main,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  deckItem: {
    backgroundColor: backGround,
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
})

export default DefaultStyle
