const UserDetails = () => {

	const registeredUsers = [
		{id: 1, name: 'Gilberto Alves', age: 19, profession: 'Programador'},
		{id: 2, name: 'Maria Carla', age: 16, profession: 'Estudante'},
		{id: 3, name: 'Pedro José', age: 18, profession: 'Prestando vestibular'},
	]

	return (
		<>
			<h3>Desafio</h3>
			<h4>Usuários cadastrados:</h4>
			{registeredUsers.map((user) => (
				<div 
					key={user.id} 
					style={{
						border: '1px solid black', 
						display: 'flex', 
						justifyContent: 'center',
						marginBottom: '16px'
					}}
				>
					<div style={{width: '100%', borderRight: '1px solid black'}}>
						<p><strong>Nome:</strong> {user.name}</p>
						<p><strong>Idade:</strong> {user.age}</p>
						<p><strong>Cargo / situação:</strong> {user.profession}</p>
					</div>

					<div style={{width: '100%', borderLeft: '1px solid black'}}>
						<p><strong>Pode tirar a habilitação?</strong></p>

						{user.age >= 18 ? (

							<p>
								<strong>Sim</strong>, pois é maior de idade
							</p>
						) : (

							<p>
								<strong>Não</strong>, pois é menor de idade
							</p>
						)}
					</div>
				</div>
			))}
		</>
	)
}

export default UserDetails;