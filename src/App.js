import './App.css';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/header/header.component'
import Homepage from './pages/homepage.component'
import Signin from './pages/signin/signin.component'
import Signup from './pages/signup/signup.component'
import Dashboard from './pages/dashboard.component'
import { authUser } from './store/actions/auth'
import { updateNote } from './store/actions/notes'
import NoteForm from './components/note-form/note-form.component'
import NoteUpdateForm from './components/note-update-form/note-update-form.component'

const App = props => {
	const { authUser, error, currentUser } = props 
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path='/' render={ props => { return <Homepage currentUser={currentUser} />}} />
				
				<Route path='/signin' render={ () => ( currentUser.isAuthenticated ? (<Redirect to='/dashboard' />) : 
					(<Signin onAuth={authUser} error={error} />))} />
				<Route path='/signup' render={ props => 
					{ return (<Signup onAuth={authUser} error={error} />
					)}} />
				<Route path='/dashboard'  render={ props => { return (<Dashboard currentUser={currentUser} />)}} />
				<Route path='/users/:id/notes/new' component={NoteForm} />
				<Route path='/users/:id/note/:note_id/update' render={ props => { return (<NoteUpdateForm />)}} />
			</Switch>
		</div>
)
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		error: state.error,
		id: state.id
	}
}

export default withRouter(connect(mapStateToProps, {authUser, updateNote})(App));
