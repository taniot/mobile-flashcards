import React, { Component } from 'react'
import { View, Text, Alert, TextInput, StyleSheet } from 'react-native'
import Button from '../components/Button.component'
import { connect } from 'react-redux'
import { storeDeck } from '../actions/decks'
import { saveDeckTitle } from '../utils/api'
import DefaultStyle from '../utils/style'
import { main, primary } from '../utils/colors'
class NewDeck extends Component {
  state = { title: '' }

  handleTextChange = (e) => {
    this.setState({ title: e })
  }

  onSubmit = () => {
    this.props.dispatch(storeDeck({ title: this.state.title, questions: [] }))
    saveDeckTitle(this.state.title, { title: this.state.title, questions: [] })
    Alert.alert('Well done!', 'You created a new deck!')
    this.props.navigation.navigate('DeckView', { deckTitle: this.state.title })
  }

  render() {
    return (
      <View style={DefaultStyle.main}>
        <Text style={localStyle.title}>New Deck</Text>
        <TextInput
          onChangeText={this.handleTextChange}
          placeholder='Title'
          value={this.state.title}
          style={DefaultStyle.inputField}
        />

        <Button
          onPress={this.onSubmit}
          title='Add Deck'
          disabled={this.state.title.length === 0}
        />
      </View>
    )
  }
}

const localStyle = StyleSheet.create({
  title: {
    fontSize: 20,
    color: main,
    marginBottom: 10,
    fontWeight: 'bold',
  },
})

export default connect()(NewDeck)
