import { useState, useEffect } from 'react';

const HookUseEffect = () => {

	// 1 - useEffect sem dependências
	useEffect(() => {

		console.log('Estou sendo executado!')
		console.log(number)
	})

	const [number, setNumber] = useState(1);

	const incrementNumber = () => {

		setNumber(number + 1)
	}

	// 2 - useEffect com array de dependências vazio
	useEffect(() => {

		console.log('Serei executado apenas uma vez, ao carregar da página');

	}, [])

	return (
		<>
			<hr />
			<h3>Use Effect</h3>
			<h4>Número: {number}</h4>
			<button onClick={incrementNumber}>Incrementar número</button>
		</>
	)
}

export default HookUseEffect;