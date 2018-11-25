import React from 'react';
import { 
  Input, 
  TextArea, 
  Form, 
  Segment, 
  Container, 
  Button, 
  Header,
  Icon,
  Label,
} from 'semantic-ui-react';
import styled from 'styled-components';
import CardForm from './CardForm';

const StyledContainer = styled(Container)`
  margin-top: 100px;
` 

const StyledLabel = styled(Label)`
padding-bottom: 14px;
`

class Create extends React.Component {

  state = {
    loaded: false,
    title: '',
    numberOfCards: 5,
    cardForms: [],
    cards: [],
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
            <Icon size="big" name="trash alternate"/>
            <TextArea
              placeholder="Term"
              name="term"
              tabIndex={i}
              rows={1}
              autoHeight
              style={styles.card}
              onChange={this.handleChange}
            >{this.state.cards[i].term}</TextArea>
            <Label pointing='below'>Term</Label>
            
            <TextArea
              placeholder="Definition"
              name="definition"
              tabIndex={i}
              rows={1}
              autoHeight
              onChange={this.handleChange}
              style={styles.card}
            >{this.state.cards[i].definition}</TextArea>
            </Form>
          )
        }
      })
    }
    
  }

  render() {
    return (
      <StyledContainer>
        {this.createCardForms(true)}
        <Header as="h2">Create New Set</Header>
        <Input
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Button.Group floated='right'>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
        { this.state.cardForms.map((value, i) => {
          return(<Segment>{value}</Segment>)
        })}
      </StyledContainer>
    )
  }
}

const styles = {
  card: {
    width: '35%',
    paddingTop: '2em',
    border: '0px',
    borderBottom: '2px solid black',
    borderRadius: '0px',
  }
}

export default Create;
