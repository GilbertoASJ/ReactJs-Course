import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

import ChangeCounter from '../components/ChangeCounter'

const Home = () => {

	const { counter } = useContext(CounterContext)

	return (
		<>
			<h2>Home</h2>
			<p>Valor do contador: {counter}</p>

			{/* Alterando valor do contexto */}
			<ChangeCounter />
		</>
	)
}

export default Home;