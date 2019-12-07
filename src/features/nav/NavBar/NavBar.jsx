import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from '../Menues/SignedInMenu';
import SignedOutMenu from '../Menues/SignedOutMenu';
import { openModal } from '../../modals/modalActions';
import { logout } from '../../auth/authActions';

const actions = {
	openModal,
	logout
};

const mapState = state => ({
	auth: state.auth
});

class NavBar extends Component {
	handleSignIn = () => {
		this.props.openModal('LoginModal');
	};

	handleRegister = () => {
		this.props.openModal('RegisterModal');
	};

	handleSignOut = () => {
		this.props.logout();
		this.props.history.push('/');
	};

	render() {
		const { auth } = this.props;
		const authenticated = auth.authenticated;
		return (
			<Menu inverted fixed='top'>
				<Container>
					<Menu.Item as={NavLink} exact to='/' header>
						<img src='/assets/logo.png' alt='logo' />
						Revents
					</Menu.Item>
					<Menu.Item as={NavLink} exact to='/events' name='Events' />
					{authenticated && (
						<Fragment>
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
						</Fragment>
					)}
					{authenticated ? (
						<SignedInMenu
							signOut={this.handleSignOut}
							currentUser={auth.currentUser}
						/>
					) : (
						<SignedOutMenu
							signIn={this.handleSignIn}
							register={this.handleRegister}
						/>
					)}
				</Container>
			</Menu>
		);
	}
}

export default withRouter(connect(mapState, actions)(NavBar));
