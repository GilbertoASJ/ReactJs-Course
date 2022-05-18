import './PrincipalForm.css'

import { useState } from 'react'

const PrincipalForm = ({ currentUser }) => {

	// 3 - Gerenciamento de dados
	// 6 - Controlled inputs
	const [email, setEmail] = useState(currentUser ? currentUser.email : '');
	const [password, setPassword] = useState(currentUser ? currentUser.password : '');
	const [message, setMessage] = useState(currentUser ? currentUser.message : '');
	const [role, setRole] = useState(currentUser? currentUser.role : '');

	const handleEmail = (e) => {

		// o 'e', que vem implícito, recebe todos os dados do evento no input
		setEmail(e.target.value)
	}

	const handleSubmit = (e) => {

		// Para que não ocorra o reload da página, utilizamos o prevent default
		e.preventDefault()

		console.log('Enviando o formulário')
		console.log(email, password, message, role)

		// 7 - Limpar formulário
		setEmail('')
		setPassword('')
		setMessage('')
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
						value={email}
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
						value={password}
					/>
				</label>

				{/* 8 - Textarea */}
				<label>
					<span>Mensagem: </span>
					<textarea 
						name="message" 
						placeholder="Digite sua mensagem"
						id="message"
						onChange={(e) => {setMessage(e.target.value)}}
						value={message}
					>
					</textarea>
				</label>

				{/* 9 - Select */}
				<label>
					<span>Função no sistema</span>
					<select 
						name="role"
						onChange={(e) => {setRole(e.target.value)}}
						value={role}
					>
						<option value="user">Usuário</option>
						<option value="editor">Editor</option>
						<option value="admin">Administrador</option>
					</select>
				</label>

				<input type="submit" value="Enviar" />	
			</form>
		</>
	)
}

export default PrincipalForm;