import React from 'react'

const FormInput = ({handleChange, label, ...otherProps}) => (
	<div className='form-group'>
		<label htmlFor={label}>{label}</label>
		<input className='form-control' {...otherProps} />
	</div>
)

export default FormInput