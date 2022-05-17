import './PrincipalForm.css'

import { useState } from 'react'

const PrincipalForm = () => {

	// 3 - Gerenciamento de dados
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleEmail = (e) => {

		// o 'e', que vem implícito, recebe todos os dados do evento no input
		setEmail(e.target.value)
	}

	const handleSubmit = (e) => {

		// Para que não ocorra o reload da página, utilizamos o prevent default
		e.preventDefault()

		console.log('Enviando o formulário')
		console.log(email, password)
	}

	// console.log(email)
	// console.log(password)

	return (
		<>
			{/* 1 - Criação de form */}

			{/* 5 - Envio de form */}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email: </label>
					<input 
						type="email" 
						name="email" 
						id="email" 
						placeholder="Digite seu e-mail"
						onChange={handleEmail}
					/>
				</div>

				{/* 2 - Label envolvendo input */}
				<label>
					<span>Senha: </span>

					{/* 4 - Simplificando do state inline */}
					<input 
						type="password" 
						name="senha" 
						id="senha"
						placeholder="Digite sua senha"
						onChange={(e) => {setPassword(e.target.value)}}
					/>
				</label>

				<input type="submit" value="Enviar" />	
			</form>
		</>
	)
}

export default PrincipalForm;