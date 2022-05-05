import { useState } from 'react'
 
const ConditionalRender = () => {

	const [authUser] = useState(true)
	const [userName, setUserName] = useState('Fulano de tal')

	return (
		<>	
			<div>
				{/* Condicional simples */}
				<h3>Isso será exibido?</h3>
				{authUser && <p>Se o usuário estiver logado sim!</p>}


				{/* Invertendo o valor
					{!authUser && <p>Se o usuário estiver logado sim!</p>}
				*/}
			</div>

			<div>
				{/* Condicional If/Else no JSX */}
				{userName === 'John Doe' ? (

					<div>
						<p>O nome do usuário é John Doe</p>
					</div>
					
				) : (

					<div>
						<p>Nome do usuário não informado</p>
					</div>
				)}

				<button onClick={() => {setUserName('John Doe')}}>
					Alterar nome
				</button>
			</div>
		</>
	)
}

export default ConditionalRender;