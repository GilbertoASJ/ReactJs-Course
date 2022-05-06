// Para utilizar props com o destructuring, nos fazemos a desestruturação em um objeto {}, e o nome das propriedades precisa ser o mesmo que foi passado no componente pai, só assim para ser vpalido
const UserInfo = ({ name, age, address }) => {

	return (
		<>
			<h3>Detalhes do usuário</h3>
			<ul>
				<li>Nome: {name}</li>
				<li>Idade: {age}</li>
				<li>Endereço: {address}</li>
			</ul>
		</>
	)
}

export default UserInfo;