import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchNotes, removeNote} from '../store/actions/notes'
import NoteItem from '../components/note-item/note-item.component'

class NotesList extends Component {
	componentDidMount() {
		this.props.fetchNotes()
		
	}
	
	render() {
		const { notes, removeNote } = this.props
		let notesList = notes.map(note => (
			<NoteItem key={note._id} date={note.createdAt} creator={note.creator} id={note._id} 
				content={note.content} title={note.title} 
				removeNote={removeNote.bind(this, note.creator, note._id)}/>
		))
		return notesList
	}
	
}

function mapStateToProps(state) {
	return {
		notes: state.notes
	}
}

export default connect(mapStateToProps, { fetchNotes, removeNote })(NotesList)