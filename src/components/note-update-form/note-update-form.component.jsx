import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateNote } from '../../store/actions/notes'
import FormInput from '../form-input/form-input.component'
import './note-update-form.css'
import { withRouter } from 'react-router-dom'

class NoteUpdateForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			noteTitle: '',
			noteContent: ''
		}
	}
	
	handleNewNote = e => {
		e.preventDefault()
		this.props.updateNote(this.props.currentUser.user.id, this.props.match.params.note_id , this.state.noteTitle, this.state.noteContent)
		this.setState({noteTitle: '', noteContent: ''})
		this.props.history.push('/dashboard')
	}
	
	render() {
		return (
			<div className='note-update-form'>
				<form onSubmit={this.handleNewNote}>
				
					<FormInput label='title' type="text" name='title' className="form-control" 
						value={this.state.noteTitle}
						onChange={e => this.setState({ noteTitle: e.target.value })}
					/>
					<label htmlFor='content'>note</label>
					<textarea label='note' type="text" name='content' className="form-control" 
						value={this.state.noteContent}
						onChange={e => this.setState({ noteContent: e.target.value })}
					/>
					<button type="submit" className="btn btn-success">
						Update note
					</button>
				</form>
			</div>
			
		)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
	}
}

export default withRouter(connect(mapStateToProps, {updateNote})(NoteUpdateForm))