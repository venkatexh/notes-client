import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import FormInput from '../../components/form-input/form-input.component'
import './signin.css'


class Signin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}
	}
	
	
	
	handleSubmit = e => {
		e.preventDefault()
		this.props.onAuth('signin', this.state)
		.then(() => (
			this.props.history.push('/dashboard')
		))
		.catch( () => { 
			return 
		})
	}
	
	handleChange = e => {
		const { value, name } = e.target
		this.setState({[name]: value})
	}
	
	render() {
		
		const { error } = this.props;
		return (
			<div>
				<h1>Login to create notes.</h1>
				<div className='signin'>
					{ error.message && <div className='alert alert-danger'>{error.message}</div> }
					<form className='' onSubmit={this.handleSubmit}>
						<FormInput label='email' type='email' name='email' value={this.state.email} 
							onChange={this.handleChange}/>
						<FormInput label='password' type='password' name='password' value={this.state.password}
							onChange={this.handleChange} />
						<div className='form-group'>
							<button className='form-control btn btn-primary' type='submit'>Sign in</button>
						</div>
						<h3>Don't have an account?</h3>
						<Link to='/signup'>Sign up</Link>
					</form>
				</div>
				
			</div>
		)
	}
}

export default withRouter(Signin)