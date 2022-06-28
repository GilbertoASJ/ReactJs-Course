// Refatorando com hook
import useCounterContext from '../hooks/useCounterContext'
import ChangeCounter from '../components/ChangeCounter'

const Home = () => {

	const {counter} = useCounterContext()

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