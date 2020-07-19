import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button.component'
import { connect } from 'react-redux'
import DefaultStyle from '../utils/style'
class DeckView extends Component {
  render() {
    const { decks } = this.props

    const { deckTitle } = this.props.route.params
    const deck = decks[deckTitle]
    return (
      <View style={DefaultStyle.main}>
        <View style={DefaultStyle.deckItem}>
          <View>
            <Text style={DefaultStyle.deckInfoTitle}>{deck.title}</Text>
            <Text style={DefaultStyle.deckInfoDetail}>
              {deck.questions.length} cards
            </Text>
            <View style={DefaultStyle.buttonsContainer}>
              <Button
                title='Add Card'
                onPress={() =>
                  this.props.navigation.navigate('NewCard', {
                    deckTitle: deck.title,
                  })
                }
              />
              <Button
                title='Start Quiz'
                onPress={() =>
                  this.props.navigation.navigate('QuizView', {
                    deckTitle: deck.title,
                  })
                }
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks,
})

export default connect(mapStateToProps)(DeckView)
