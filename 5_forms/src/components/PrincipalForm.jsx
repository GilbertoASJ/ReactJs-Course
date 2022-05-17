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
				<input type="submit" value="Enviar" />	
			</form>
		</>
	)
}

export default PrincipalForm;