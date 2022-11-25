// Hooks
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';

// Context
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';

const Home = () => {

	const { contextValue } = useContext(SomeContext);

	return (
		<>
			<HookUseState />
			<HookUseReducer />
			<HookUseEffect />

			<hr />
			<h3>useContext</h3>
			<p>Valor do contexto: {contextValue}</p>
		</>
	)
}

export default Home;