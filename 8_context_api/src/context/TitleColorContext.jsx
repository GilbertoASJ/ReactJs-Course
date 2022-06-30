import { createContext, useReducer } from 'react'

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
	// switch
}

export const TitleColorContextProvider = ({children}) => {

	// O useReducer nos entrega uma maneira de alterar o estado, e ja inicia com um valor
	const [state, dispatch] = useReducer(titleColorReducer, {color: 'red'})
	console.log('Title Color Context:', state)

	return (

		<TitleColorContext.Provider value={{...state}}>
			{children}
		</TitleColorContext.Provider>
	)
}