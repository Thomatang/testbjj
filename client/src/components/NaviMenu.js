import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

class NaviMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu secondary>
              <Menu.Item as={Link} to='/' name='Icono' active={activeItem === 'Icono'} onClick={this.handleItemClick} />
              <Menu.Item
                as={Link}
                to="/classroom"
                name='Classroom'
                active={activeItem === 'Classroom'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to="/addprofile"
                name='New Profile'
                active={activeItem === 'New Profile'}
                onClick={this.handleItemClick}
              />
        </Menu>
      )
    }
}



export default NaviMenu;
