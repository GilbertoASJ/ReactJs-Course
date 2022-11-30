import { useCallback, useState } from 'react';

import List from './List';

const HookUseCallback = () => {

	const [counter, setCounter] = useState(0);

	// Simular buscar dados do banco
	const getUsersFromDatabase = useCallback(() => {

		return ['John Doe', 'Cristian', 'Angela', 'Bob'];
	}, [])

	return (
		<>
			<hr />
			<h3>useCallBack</h3>

			<List getUsers={getUsersFromDatabase} />
			<button onClick={() => {setCounter(counter + 1)}}>Alterar componente</button>
			<p>{counter}</p>
		</>
	)
}

export default HookUseCallback;