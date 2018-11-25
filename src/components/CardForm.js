import React from 'react';
import { Input } from 'semantic-ui-react';

class CardForm extends React.Component {

  state = {
    term: '',
    definition: '',
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {

    const { term, definition } = this.state

    return (
      <>
        <Input
          placeholder="Term"
          name="term"
          value={term}
          onChange={this.handleChange}
        />
        <Input
          placeholder="Definition"
          name="definition"
          value={definition}
          onChange={this.handleChange}
        />
      </>
    )
  }
}

export default CardForm;