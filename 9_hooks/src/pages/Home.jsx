// Hooks
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffect from '../components/HookUseEffect';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';

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

			<HookUseRef />
			<HookUseCallback />
			<HookUseMemo />
			<HookUseLayoutEffect />
			<HookUseImperativeHandle />
		</>
	)
}

export default Home;