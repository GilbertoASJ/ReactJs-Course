import './PrincipalForm.css'

const PrincipalForm = () => {

	return (
		<>
			{/* 1 - Criação de form */}
			<form>
				<div>
					<label htmlFor="email">Email: </label>
					<input 
						type="email" 
						name="email" 
						id="email" 
						placeholder="Digite seu e-mail"
					/>
				</div>

				{/* 2 - Label envolvendo input */}
				<label>
					<span>Senha: </span>
					<input 
						type="password" 
						name="senha" 
						id="senha"
						placeholder="Digite sua senha"
					/>
				</label>

				<input type="submit" value="Enviar" />	
			</form>
		</>
	)
}

export default PrincipalForm;