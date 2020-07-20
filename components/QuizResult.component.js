import React from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button.component'
import DefaultStyle from '../utils/style'

const QuizResult = ({
  title,
  questions,
  correctAnwers,
  startOverQuiz,
  navigation,
}) => {
  return (
    <View>
      <Text style={DefaultStyle.answersCounter}>
        Correct Answers: {correctAnwers} out of {questions}
      </Text>
      <View style={DefaultStyle.buttonsContainer}>
        <Button title='Restart Quiz' onPress={() => startOverQuiz()} />
        <Button
          title='Back to Deck'
          onPress={() =>
            navigation.navigate('DeckView', {
              deckTitle: title,
            })
          }
        />
      </View>
    </View>
  )
}

export default QuizResult
