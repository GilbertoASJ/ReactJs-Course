// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'

import useCounterContext from '../hooks/useCounterContext'
import ChangeCounter from '../components/ChangeCounter'

const About = () => {

	// const { counter } = useContext(CounterContext)
	const { counter } = useCounterContext()

	return (
		<>
			<h2>Sobre nós</h2>
			<p>Valor do contador: {counter}</p>
		</>
	)
}

export default About;