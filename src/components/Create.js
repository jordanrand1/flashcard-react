import React from 'react';
import { Input, TextArea, Form, Segment, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import CardForm from './CardForm';

const StyledInput = styled(Input)`
  margin-top: 100px;
` 

class Create extends React.Component {

  state = {
    loaded: false,
    title: '',
    numberOfCards: 5,
    cardForms: [],
    cards: [],
  }

  handleClick = (e) => {
    var temp = ''
    if (this.node.contains(e.target)) {
      console.log(e.target)
      this.handleChange()
    }
  }

  handleChange = (e) => {
    const { value, name, tabIndex } = e.target
    if (name === 'term') {
      const newCards = this.state.cards
      newCards[tabIndex].term = value
      this.setState({
        cards: newCards
      })
    } else if (name === 'definition') {
      const newCards = this.state.cards
      newCards[tabIndex].definition = value
      this.setState({
        cards: newCards
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  createCardForms = () => {
    if (this.state.loaded === false) {
      this.setState({
        loaded: true
      }, () => {
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
              onChange={this.handleChange}
            >{this.state.cards[i].term}</TextArea>
            <TextArea
              placeholder="Definition"
              name="definition"
              tabIndex={i}
              rows={2}
              autoHeight
              onChange={this.handleChange}
            >{this.state.cards[i].definition}</TextArea>
            </Form>
          )
        }
      })
    }
    
  }

  render() {
    return (
      <Container>
        {this.createCardForms(true)}
        <StyledInput
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        { this.state.cardForms.map((value, i) => {
          return(<Segment>{value}</Segment>)
        })}
      </Container>
    )
  }
}

const styles = {
  title: {
    marginTop: '100px',
  }
}

export default Create;
