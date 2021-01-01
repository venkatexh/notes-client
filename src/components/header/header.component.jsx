import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/auth'
import './header.css'

class Header extends Component {
	logout = e => {
    e.preventDefault();
    this.props.logout();
  }
	render() {
		const currentUser = this.props.currentUser
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light header">
					<div className="container-fluid">
						<Link to='/' className='navbar-brand'>Home</Link>
						{ currentUser.isAuthenticated ? (
							<ul className='navbar-nav nav navbar-right '>
								<li className='nav-item'>
									<Link className='nav-link' to='/dashboard'>Dashboard</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' 
										to={`/users/${this.props.currentUser.user.id}/notes/new`}>New Note</Link>
								</li>
								<li className='nav-item'>
									<button className='link-button nav-link' 
										onClick={this.logout}>Sign out</button>
								</li>
								
							</ul>	
						) : (
							<ul className="nav navbar-nav navbar-right">
								<li className='nav-item'>
								  <Link className='nav-link' to="/signup">Sign up</Link>
								</li>
								<li className='nav-item'>
								  <Link className='nav-link' to="/signin">Sign in</Link>
								</li>
							</ul>
							)
						}
					</div>
				</nav>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {logout})(Header)