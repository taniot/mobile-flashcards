import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Button from '../components/Button.component'
import { connect } from 'react-redux'
import DefaultStyle from '../utils/style'
class QuizView extends Component {
  state = {
    count: 0,
    correctAnwers: 0,
    inCorrectAnswers: 0,
    toggle: true,
  }

  handleGuess = (ans) => {
    const { decks } = this.props
    const deck = decks[this.props.route.params.deckTitle]
    if (ans === 'correct') {
      this.setState({
        count: this.state.count + 1,
        correctAnwers: this.state.correctAnwers + 1,
        toggle: true,
      })
    } else {
      this.setState({
        count: this.state.count + 1,
        inCorrectAnswers: this.state.inCorrectAnwers + 1,
        toggle: true,
      })
    }
    if (this.state.count === deck.questions.length) {
      //clearLocalNotification().then(setLocalNotification);
    }
  }

  questionAndAnswerSwitch = () => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }
  startOverQuiz = () => {
    this.setState({
      count: 0,
      correctAnwers: 0,
      inCorrectAnswers: 0,
    })
  }

  render() {
    const { decks } = this.props
    const { toggle } = this.state
    const deck = decks[this.props.route.params.deckTitle]
    const showQuestion = this.state.count < deck.questions.length ? true : false
    const currentQuestion = deck.questions[this.state.count]

    if (deck.questions.length === 0) {
      return (
        <View style={DefaultStyle.main}>
          <Text style={DefaultStyle.sorryText}>
            Sorry! You cannot take a quiz because there are no cards in the
            deck.
          </Text>
        </View>
      )
    }

    return (
      <View style={DefaultStyle.main}>
        {showQuestion ? (
          <View>
            <Text style={DefaultStyle.answersCounter}>
              Question: {this.state.count + 1} / {deck.questions.length}
            </Text>
            <Text style={DefaultStyle.questionText}>{currentQuestion.question}</Text>
            {!toggle && (
              <Text style={DefaultStyle.answerText}>
                {currentQuestion.answer}
              </Text>
            )}
            <Button
              title={toggle ? 'Show Answer' : 'Hide Answer'}
              onPress={this.questionAndAnswerSwitch}
            />
            {!toggle && (
              <View>
              <Text>What do you think?</Text>

              <View style={DefaultStyle.buttonsContainer}>
             
                <Button
                  title='Correct'
                  onPress={() => this.handleGuess('correct')}
                />
                <Button
                  title='Incorrect'
                  onPress={() => this.handleGuess('inCorrect')}
                />
              </View>
              </View>
            )}
          </View>
        ) : (
          <View>
            <Text style={DefaultStyle.answersCounter}>
              Correct Answers: {this.state.correctAnwers} out of {deck.questions.length}
            </Text>
            <View style={DefaultStyle.buttonsContainer}>
            <Button title='Restart Quiz' onPress={this.startOverQuiz} />
            <Button
              title='Back to Deck'
              onPress={() =>
                this.props.navigation.navigate('DeckView', {
                  deckTitle: deck.title,
                })
              }
            />
            </View>
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks,
})

export default connect(mapStateToProps)(QuizView)
