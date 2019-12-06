import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from '../Menues/SignedInMenu';
import SignedOutMenu from '../Menues/SignedOutMenu';
import { openModal } from '../../modals/modalActions';

const actions = {
  openModal
};

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='/assets/logo.png' alt='logo' />
            Revents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to='/events' name='Events' />
          <Menu.Item as={NavLink} to='/people' name='People' />
          <Menu.Item as={NavLink} to='/test' name='Test' />
          <Menu.Item>
            <Button
              as={Link}
              to='/createEvent'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(null, actions)(NavBar));
