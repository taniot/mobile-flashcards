import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import DefaultStyle from '../utils/style'
class DeckView extends Component {
  render() {
    const { deck } = this.props

    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('DeckView', {
              deckTitle: deck.title,
            })
          }
        >
          <View style={DefaultStyle.deckItem}>
            <View>
              <Text style={DefaultStyle.deckTitle}>{deck.title}</Text>
              <Text style={DefaultStyle.deckDetail}>
                {deck.questions.length} cards
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, { deckTitle, navigation }) => ({
  deck: decks[deckTitle],
  navigation,
})

export default connect(mapStateToProps)(DeckView)
