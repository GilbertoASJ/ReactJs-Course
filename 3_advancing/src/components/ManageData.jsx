import { useState } from 'react'

const ManageData = () => {

	let userAge = 19

	// No useState(<valor inicial>), podemos passar um valor inicial para a variável em questão
	const [yearsExperience, setYearsExperience] = useState(2)

	return (
		<>	
			<div>
				{/* Podemos reparar aqui, que, como o react não re-renderiza um componente, o valor de userAge não irá mudar */}
				<h4>Idade do usuário: {userAge}</h4>
				<button onClick={() => {userAge = 20}}>Mudar a idade</button>
			</div>

			<div>
				{/* Porém utilizando o useState podemos tranquilamente alterar o valor de uma determinada variável */}
				<h4>Anos de experiência: {yearsExperience}</h4>
				<button onClick={() => {setYearsExperience(3)}}>
					Mudar anos de experiência
				</button>
			</div>
		</>
	)
}

export default ManageData;
