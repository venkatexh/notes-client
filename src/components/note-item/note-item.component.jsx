import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './note-item.css'

class NoteItem extends Component {

	render() {
	const { title, content, removeNote, currentUser } = this.props
	return(
		<div className='note-item'>
			<div class="card text-center">
			  <div class="card-header">
				{title}
			  </div>
			  <div class="card-body">
				<p class="card-text">{content}</p>
				<button className='btn btn-danger' onClick={removeNote}>DELETE</button>
			  </div>
			  <div class="card-footer text-muted">
				<Link to={`/users/${currentUser.user.id}/note/${this.props.id}/update`} 
					params={{id: this.props.id}}>UPDATE</Link>
			  </div>
			</div>
			
		</div>
	)
	}
}


function mapStateToProps(state){
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, null)(NoteItem)