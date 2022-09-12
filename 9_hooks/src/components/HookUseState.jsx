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

	console.log(name);

	return (
		<>
			{/* 1 */}
			<h3>Hook Use State</h3>
			<p>Variável comum nome: {userName}</p>
			<p>useState nome: {name}</p>

			<button onClick={changeNames}>Trocar Nomes</button>
			<hr />
		</>
	)
}

export default HookUseState;