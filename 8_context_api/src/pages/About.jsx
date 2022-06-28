import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

import ChangeCounter from '../components/ChangeCounter'

const About = () => {

	const { counter } = useContext(CounterContext)

	return (
		<>
			<h2>Sobre nós</h2>
			<p>Valor do contador: {counter}</p>
		</>
	)
}

export default About;