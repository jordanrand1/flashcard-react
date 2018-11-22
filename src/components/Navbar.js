import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted fixed='top'>
          <Link to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Menu position="right">
            <Link to="/login">
              <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default Navbar;