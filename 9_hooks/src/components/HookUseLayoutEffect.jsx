import { useState, useEffect, useLayoutEffect } from 'react';

const HookUseLayoutEffect = () => {

	const [name, setName] = useState('Jack');

	useEffect(() => {

		console.log('2');
		setName('Dexter Morgan');

	}, [])

	useLayoutEffect(() => {

		console.log('1');
		setName('Brian Mooser');

	}, [])

	console.log(name);

	return (
		<>
			<hr />
			<h3>useLayoutEffect</h3>
			<p>Nome: {name}</p>
		</>
	)
}

export default HookUseLayoutEffect;