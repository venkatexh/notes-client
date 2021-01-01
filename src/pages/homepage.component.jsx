import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = ({currentUser}) => (
	<div>
		<div>
			<h1>Notes App</h1>
			<h3>Create notes. Save and edit them.</h3>
			
			<Link to='/signin'><button className='btn btn-primary'>Create now!</button></Link>
		</div>
	</div>
)

export default Homepage