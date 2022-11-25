// Context
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';

const About = () => {

	const { contextValue } = useContext(SomeContext);

	return (
		<>
			<h2>About</h2>

			<h3>useContext</h3>
			<p>Valor do contexto: {contextValue}</p>
			<hr />
		</>
	)
}

export default About;