import { apiCall } from '../../services/api'
import { addError } from './error'
import { LOAD_NOTES, REMOVE_NOTE, UPDATE_NOTE } from '../actionTypes'

export const loadNotes = notes => ({
	type: LOAD_NOTES,
	notes
})

export const remove = id => ({
	type: REMOVE_NOTE,
	id
})

export const update = id => ({
	type: UPDATE_NOTE,
	id
})

export const removeNote = (user_id, note_id) => {
	return dispatch => {
		return apiCall('delete', `/api/users/${user_id}/notes/${note_id}`)
		.then(dispatch(remove(note_id)))
		.catch(err => dispatch(addError(err.message)))
	}
} 

export const updateNote = (user_id, note_id, title, content) => {
	return dispatch => {
		return apiCall('put', `/api/users/${user_id}/notes/${note_id}`, {title, content})
		.then(dispatch(update(note_id)))
		.catch(err => dispatch(addError(err.message)))
	}
}

export const fetchNotes = () => (dispatch, getState) => {
	let { currentUser } = getState()
	const id = currentUser.user.id
	return apiCall('get', `/api/users/${id}/notes`)
	.then(res => dispatch(loadNotes(res)))
	.catch(err => dispatch(addError(err.message)))
}

export const createNote = (title, content) => (dispatch, getState) => {
	let { currentUser } = getState()
	const id = currentUser.user.id
	return apiCall('post', `/api/users/${id}/notes`, { title, content })
	.then(res => {})
	.catch(err => dispatch(addError(err.message)))
}