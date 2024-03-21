export const AppInput = () => {
	return (
		<label className='input-wrapper' htmlFor='username'>
			Ваше имя
			<input
				required
				type='text'
				name='username'
				id='username'
				placeholder='Ваш ответ'
			/>
			<span id='error-message'>Введите имя</span>
		</label>
	)
}


export const AppInput2 = () => {
	return (
		<label className='input-wrapper' htmlFor='phone'>
			Ваш номер
			<input
				required
				type='tel'
				name='phone'
				id='phone'
				placeholder='+998 9- --- -- -- '
			/>
			<span id='error-message'>Введите номер в правильном формате</span>
		</label>
	)
}