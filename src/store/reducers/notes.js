import { LOAD_NOTES, REMOVE_NOTE, UPDATE_NOTE } from '../actionTypes'

export const notes = (state=[], action) => {
	switch(action.type) {
		case LOAD_NOTES:
			return [...action.notes]
		case REMOVE_NOTE:
			return state.filter(note => note._id !== action.id)
		case UPDATE_NOTE:
			return state.filter(note => note._id !== action.id)
		default:
			return state
	}
}