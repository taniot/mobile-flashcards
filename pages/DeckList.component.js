import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions/decks'
import { getDecks } from '../utils/api'
import Deck from '../components/Deck.component'
import DefaultStyle from '../utils/style'

class DeckList extends Component {
  componentDidMount() {
   
      getDecks().then((res) => {
        this.props.dispatch(receiveDecks(res))
      })
   
  }


  render() {
    const { decks } = this.props
    return (
      <ScrollView style={DefaultStyle.main}>
        <Text style={DefaultStyle.title}>Decks List</Text>
        {decks ? (
          Object.keys(decks).map((title) => (
            <Deck 
              deckTitle={title}
              navigation={this.props.navigation}
              key={title}
            />
          ))
        ) : (
          <View><Text>Sono qui</Text></View>
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ decks }) => ({
  decks,
})

export default connect(mapStateToProps)(DeckList)
