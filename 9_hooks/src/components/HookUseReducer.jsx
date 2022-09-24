import { useReducer } from 'react';

const HookUserReducer = () => {

	// 1 - começando com o useReducer
	const [number, dispatch] = useReducer((state, action) => {

		return Math.random(state);
	});

	return (
		<>
			<h3>Use Reducer</h3>
			<p>Número: {number}</p>
			<button onClick={dispatch}>Alterar número</button>
		</>
	)
}

export default HookUserReducer;