import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button.component'
import { connect } from 'react-redux'

class DeckView extends Component {
  render() {
    const { decks } = this.props
   
    const { deckTitle } = this.props.route.params
    const deck = decks[deckTitle]
    return (
      <View>
    
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} {deck.questions.length > 1 ? 'Cards' : 'Card'} </Text>
       


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
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks,
})

export default connect(mapStateToProps)(DeckView)
