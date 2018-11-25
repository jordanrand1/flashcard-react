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
  Checkbox,
} from 'semantic-ui-react';
import styled from 'styled-components';
import CardForm from './CardForm';

const StyledContainer = styled(Container)`
  margin-top: 100px;
` 

const Space = styled.div`
  display: inline;
  padding: 2%;
`

class Create extends React.Component {

  state = {
    loaded: false,
    title: '',
    numberOfCards: 5,
    cardForms: [],
    cards: [],
    visible: true,
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
            <Segment key={i} style={{borderRadius: '15px'}}>
              <Form.Field>
                <Icon size="big" name="trash alternate" style={{marginTop: '-10px'}}/>
                <TextArea
                  placeholder="Term"
                  name="term"
                  tabIndex={i}
                  rows={1}
                  autoHeight
                  style={styles.card}
                  onChange={this.handleChange}
                >{this.state.cards[i].term}</TextArea>
                <Button circular icon="picture"></Button>
                <Space/>
                <TextArea
                  placeholder="Definition"
                  name="definition"
                  tabIndex={i}
                  rows={1}
                  autoHeight
                  onChange={this.handleChange}
                  style={styles.card}
                >{this.state.cards[i].definition}</TextArea>
                <Button circular icon="picture"></Button>
              </Form.Field>
            </Segment>
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
          <Checkbox slider label="Public?" value={this.state.visible} defaultChecked="true" onClick={() => this.setState({ visible: !this.state.visible })}/>
        </Button.Group>
        { this.state.cardForms.map((value, i) => {
          return(value)
        })}
        { 
          this.state.title === "" ? 
          <></> 
          : 
          <Button circular color="green" fluid icon="plus"></Button>
        }
      </StyledContainer>
    )
  }
}

const styles = {
  card: {
    outline: 'none',
    width: '40%',
    border: '0px',
    marginTop: '10px',
    borderBottom: '2px solid black',
    borderRadius: '0px',
  }
}

export default Create;
