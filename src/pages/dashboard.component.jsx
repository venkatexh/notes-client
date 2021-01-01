import React from 'react'
import NotesList from '../components/notes-list.component'

const Dashboard = ({currentUser}) => {
	
	if(currentUser.isAuthenticated) {
		return (
			<div>
				<h2>Your notes</h2>
				<NotesList />
			</div>
		)	
	} else {
		return (
			<div>
				<h2>Please log in first.</h2>
			</div>
		)
	}
}


export default Dashboard