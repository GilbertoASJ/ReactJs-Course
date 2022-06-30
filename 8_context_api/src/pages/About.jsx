// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'

import useCounterContext from '../hooks/useCounterContext'
import useTitleColorContext from '../hooks/useTitleColorContext'

import ChangeCounter from '../components/ChangeCounter'

const About = () => {

	// const { counter } = useContext(CounterContext)
	const { counter } = useCounterContext()

	// Contexto mais complexo
	const { color } = useTitleColorContext()

	return (
		<>
			<h2 style={{ color: color }}>Sobre nós</h2>
			<p>Valor do contador: {counter}</p>
		</>
	)
}

export default About;