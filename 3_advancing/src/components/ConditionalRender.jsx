import { useState } from 'react'
 
const ConditionalRender = () => {

	const [authUser] = useState(false)

	return (
		<>	
			{/* Condicional simples */}
			<h3>Isso será exibido?</h3>
			{authUser && <p>Se o usuário estiver logado sim!</p>}


			{/* Invertendo o valor
				{!authUser && <p>Se o usuário estiver logado sim!</p>}
			*/}
		</>
	)
}

export default ConditionalRender;