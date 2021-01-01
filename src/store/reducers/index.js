import { combineReducers } from 'redux'
import currentUser from './currentUser'
import error from './error'
import { notes } from './notes'

const rootReducer = combineReducers({
	currentUser,
	error,
	notes
})

export default rootReducer