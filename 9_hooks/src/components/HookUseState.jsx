import { useState } from 'react';

const HookUseState = () => {

	// 1 - Principal uso do hook useState
	let userName = 'Dexter Morgan';
	const [name, setName] = useState('Jack Crawford');

	const changeNames = () => {

		userName = 'Hannibal Lecter';
		setName('Will Graham');

		console.log(userName, name);
	}

	// console.log(name);

	// 2 - useState e inputs
	const [age, setAge] = useState(18);

	const handleSubmit = (e) => {

		e.preventDefault();

		// Ex: Envio a uma API
		console.log(age);
	}

	return (
		<>
			{/* 1 */}
			<h3>Use State</h3>
			<p>Variável comum nome: {userName}</p>
			<p>useState nome: {name}</p>

			<button onClick={changeNames}>Trocar Nomes</button>
			<hr />

			{/* 2 */}
			<h3>Use State e inputs</h3>
			<p>Digite sua idade: </p>
			<form onSubmit={handleSubmit}>
				<label>
					Idade:
					<input 
						type="number"
						required
						value={age} 
						onChange={(e) => {setAge(e.target.value)}} 
					/>
				</label>
				<input type="submit" value="Enviar" />
			</form>
			<p>Você tem: {age} anos!</p>
		</>
	)
}

export default HookUseState;