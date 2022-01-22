import React from 'react'
import { useField } from 'formik'
import classNames from 'classnames'

function MultipleSelect(props) {
	const [field, meta] = useField(props)
	return (
		<div>
			{meta.touched && meta.error ? (
				<div className="invalid-feedback text-right-aligned">{meta.error}</div>
			) : null}
		</div>
	)
}

export default MultipleSelect
