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
    marginBottom: 20,
    fontWeight: 'bold',
  },
  deckItem: {
    backgroundColor: backGround,
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  deckTitle: {
    color: primary,
    fontSize: 15,
    marginBottom: 5,
   fontWeight:"bold"
  },
  deckDetail: {
    color: primary,
    fontSize: 12,
    marginBottom: 5,
  },
  deckInfoTitle: {
    color: primary,
    fontSize: 21,
    marginBottom: 5,
   fontWeight:"bold"
  },
  deckInfoDetail: {
    color: primary,
    fontSize: 15,
    marginBottom: 5,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  }
})

export default DefaultStyle
