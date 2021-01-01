import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../store/actions/notes'
import FormInput from '../form-input/form-input.component'
import './note-form.css'

class NoteForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			noteTitle: '',
			noteContent: ''
		}
	}
	
	handleNewNote = e => {
		e.preventDefault()
		this.props.createNote(this.state.noteTitle, this.state.noteContent)
		this.setState({noteTitle: '', noteContent: ''})
		this.props.history.push('/dashboard')
	}
	
	render() {
		return (
			<div className='note-form'>
				<form onSubmit={this.handleNewNote}>
				
				<FormInput label='title' type="text" name='title' className="form-control" value={this.state.noteTitle}
					onChange={e => this.setState({ noteTitle: e.target.value })}
				/>
				<FormInput label='note' type="text" name='content' className="form-control" value={this.state.noteContent}
					onChange={e => this.setState({ noteContent: e.target.value })}
				/>
				<button type="submit" className="btn btn-success">
					Add note
				</button>
			</form>
			</div>
			
		)
	}
}

function mapStateToProps(state) {
	return {
		errors: state.errors
	}
}

export default connect(mapStateToProps, {createNote})(NoteForm)