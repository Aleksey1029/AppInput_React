export const Option = props => {
	const { labelText, inputType, id } = props
	return (
		<li className='variant-wrapper'>
			<input required type={inputType} name={id} id={id} />
			<label htmlFor={id}>{labelText}</label>
		</li>
	)
}
