import React from 'react';
import { Input, TextArea, Form } from 'semantic-ui-react';
import styled from 'styled-components';
import CardForm from './CardForm';

const StyledInput = styled(Input)`
  margin-top: 100px;
` 

class Create extends React.Component {

  state = {
    title: '',
    numberOfCards: 5,
    cardForms: [],
    cards: [],
  }

  handleChange = (e) => {
    console.log(e)
    const { value, name, tabIndex } = e.target
    console.log(this.state.cards[tabIndex])
    if (name === 'term' || name === 'definition') {
      const { key, term, definition } = this.state.cards[tabIndex]
      [name] = value
    }
    this.setState({
      [name]: value,
    })
  }

  getCardFormState = (cardFormState) => {
    console.log(cardFormState)
  }

  render() {
    const { title, numberOfCards, cardForms, cards } = this.state
    for (var i = 0; i < numberOfCards; i++) {
      cards.push({key: i, term: '', definition: ''})
      cardForms.push(
        <Form key={i}>
        <TextArea
          placeholder="Term"
          name="term"
          tabIndex={i}
          rows={2}
          autoHeight
          value={this.state.cards[i].term}
          onChange={this.handleChange}
        />
        <TextArea
          placeholder="Definition"
          name="definition"
          tabIndex={i}
          rows={2}
          autoHeight
          value={this.state.cards[i].definition}
          onChange={this.handleChange}
        />
        </Form>
      )
    }
    return (
      <>
        <StyledInput
          placeholder="Title"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        { cardForms.map((value, i) => {
          return(value)
        })}
      </>
    )
  }
}

const styles = {
  title: {
    marginTop: '100px',
  }
}

export default Create;
