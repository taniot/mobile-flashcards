import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput } from 'react-native'
import Button from '../components/Button.component'
import { connect } from 'react-redux'
import { storeCardToDeck } from '../actions/decks'
import { saveCardToDeck } from '../utils/api'
import DefaultStyle from '../utils/style'
class NewCard extends Component {
  state = { question: '', answer: '' }

  handleChange = (e, prop) => {
    this.setState({ [prop]: e })
  }

  onSubmit = () => {
    const { deckTitle } = this.props.route.params
    this.props.dispatch(storeCardToDeck(this.state, deckTitle))
    saveCardToDeck(deckTitle, this.state)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <KeyboardAvoidingView  style={DefaultStyle.main}>
        <TextInput
          onChangeText={(e) => this.handleChange(e, 'question')}
          placeholder='Question'
          value={this.state.title}
          style={DefaultStyle.inputField}
        />

        <TextInput
          onChangeText={(e) => this.handleChange(e, 'answer')}
          placeholder='Answer'
          value={this.state.title}
          style={DefaultStyle.inputField}
        />

        <Button title='Submit' onPress={this.onSubmit}  disabled={this.state.question.length === 0 || this.state.answer.length === 0} />
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewCard)
