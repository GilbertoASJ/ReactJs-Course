// Refatorando com hook
import useCounterContext from '../hooks/useCounterContext'
import useTitleColorContext from '../hooks/useTitleColorContext'

import ChangeCounter from '../components/ChangeCounter'

const Home = () => {

	const {counter} = useCounterContext()

	// Contexto mais complexo
	const {color} = useTitleColorContext()

	return (
		<>
			<h2 style={{ color: color }}>Home</h2>
			<p>Valor do contador: {counter}</p>

			{/* Alterando valor do contexto */}
			<ChangeCounter />
		</>
	)
}

export default Home;