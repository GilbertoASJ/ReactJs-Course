// Para utilizar props com o destructuring, nos fazemos a desestruturação em um objeto {}, e o nome das propriedades precisa ser o mesmo que foi passado no componente pai, só assim para ser vpalido
const UserInfo = ({ name, age, address, newUser }) => {

	return (
		<>
			<h4>Detalhes do usuário: <strong>{name}</strong></h4>
			<ul>
				<li>Idade: {age}</li>
				<li>Endereço: {address}</li>
			</ul>
			{newUser && <p><strong>Usuário novo</strong></p>}
		</>
	)
}

export default UserInfo;