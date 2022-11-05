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