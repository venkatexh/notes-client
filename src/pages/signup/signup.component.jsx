import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import FormInput from '../../components/form-input/form-input.component.jsx'
import './signup.css'

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			username: '',
			firstName: '',
			lastName: '',
			password: '',
			confirmPassword: ''
		}
	}
	
	handleSubmit = e => {
		e.preventDefault()
		this.props.onAuth('signup', this.state)
		.then(() => {
			this.props.history.push('/dashboard')
		})
		.catch(err => {
			return
		})
	}
	
	handleChange = e => {
		const { value, name } = e.target
		this.setState({[name]: value})
	}
	
	render() {
		const { error } = this.props
		return (
			<div>
				<h1>Sign up to create notes.</h1>
				<div className='signup'>
					{ error.message && <div className='alert alert-danger'>{error.message}</div> }
					<form className='' onSubmit={this.handleSubmit}>
						<FormInput label='first name' type='text' name='firstName' value={this.state.firstName} 
						onChange={this.handleChange}/>
						<FormInput label='last name' type='text' name='lastName' value={this.state.lastName}
						onChange={this.handleChange} />
						<FormInput label='username' type='text' name='username' value={this.state.username}
						onChange={this.handleChange} />
						<FormInput label='email' type='email' name='email' value={this.state.email} 
						onChange={this.handleChange}/>
						<FormInput label='password' type='password' name='password' value={this.state.password}
						onChange={this.handleChange} />
						<FormInput label='confirm password' type='password' name='confirmPassword' 
							value={this.state.confirmPassword}
							onChange={this.handleChange} />
						<button className='btn btn-primary' type='submit'>Sign up</button>
					</form>
				</div>
					
				<h3>Already a member?</h3>
				<Link to='/signin'>Sign in</Link>
			</div>
		)
	}
}

export default withRouter(Signup)