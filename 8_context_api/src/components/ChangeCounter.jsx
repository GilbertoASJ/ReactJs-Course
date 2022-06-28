import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const ChangeCounter = () => {

	// Os dados do contexto sempre chegam como objeto
	const {counter, setCounter} = useContext(CounterContext)

	return (
		<>
			<button onClick={() => {setCounter(counter + 1)}}>
				Incrementar valor
			</button>
		</>
	)
}

export default ChangeCounter;