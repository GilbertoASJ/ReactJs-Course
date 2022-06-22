// Criando contexto
import { createContext, useState } from 'react'

export const CounterContext = createContext()

// Criando provider
export const CounterContextProvider = ({children}) => {

	let [counter, setCounter] = useState(5)

	return (

		<CounterContext.Provider value={{counter, setCounter}}>
			{children}
		</CounterContext.Provider>
	)
}