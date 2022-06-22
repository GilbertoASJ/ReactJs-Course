import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Home = () => {

	const { counter, setCounter } = useContext(CounterContext)

	return (
		<>
			<h2>Home</h2>
			<p>Valor do contador: {counter}</p>
		</>
	)
}

export default Home;