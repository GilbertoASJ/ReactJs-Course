// Refatorando com hook
import useCounterContext from '../hooks/useCounterContext'
import useTitleColorContext from '../hooks/useTitleColorContext'

import ChangeCounter from '../components/ChangeCounter'

const Home = () => {

	const {counter} = useCounterContext()

	// Contexto mais complexo
	const { color, dispatch } = useTitleColorContext()

	// Alterando o contexto mais complexo
	const setTitleColor = (color) => {
		
		dispatch({type: color})
	}

	return (
		<>
			<h2 style={{ color: color }}>Home</h2>
			<p>Valor do contador: {counter}</p>

			{/* Alterando valor do contexto */}
			<ChangeCounter />

			<div>
				<button onClick={() => {setTitleColor('BLUE')}}>Azul</button>
				<button onClick={() => {setTitleColor('GREEN')}}>Verde</button>
			</div>		
		</>
	)
}

export default Home;