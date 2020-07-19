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
  },
  sorryText: {
    fontSize: 15,
    color: main,
    marginBottom: 20,
    fontWeight: 'bold',
    lineHeight:25
  },
 answersCounter: {
    fontSize: 15,
  
    fontWeight:"bold",
    backgroundColor: backGround,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20


  },
  questionText: {
    fontSize: 20,
    color: main,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 15,
    color: primary,
    marginBottom: 20,
    fontWeight: 'bold',
  },
})

export default DefaultStyle
