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

	// 3 - item no array de dependências
	const [ageUser, setAgeUser] = useState(0);

	useEffect(() => {

		if(ageUser > 0) {
			console.log('Sou executado quando a idade muda!')
		}

	}, [ageUser])

	return (
		<>
			<hr />
			<h3>Use Effect</h3>
			<h4>Número: {number}</h4>
			<h4>Idade: {ageUser}</h4>
			<button onClick={incrementNumber}>Incrementar número</button>
			<button onClick={() => {setAgeUser(ageUser + 1)}}>Incrementar Idade</button>
		</>
	)
}

export default HookUseEffect;