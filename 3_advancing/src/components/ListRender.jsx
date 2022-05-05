import { useState } from 'react'

const ListRender = () => {

	const [listItems] = useState(['John Doe', 'Cristian', 'Bob', 'Angela'])

	const [usersList, setUsersList] = useState([
		{id: 1, name: 'John Doe', age: '19'},
		{id: 4, name: 'Daniel', age: '21'},
		{id: 7, name: 'Johny', age: '26'}
	])

	const handleDeleteRandomUser = () => {
		
		const randomNumber = Math.floor(Math.random() * 6)

		// Aqui obtemos o valor antigo da variável em questão, através do previous state, ou seja seu antigo estado
		setUsersList((prevUsersList) => {

			// O id em questão que der 'match', ele irá excluir
			console.log(randomNumber)
			console.log(prevUsersList.filter((user) => randomNumber !== user.id))
			return prevUsersList.filter((user) => randomNumber !== user.id)
		})
	}

	return (
		<>
			{/* A key é o próprio índice que o map fornece, pode ser usado, mas não tão recomendado, pois o índice do array pode mudar, de acordo como mudamos o array em questão */}
			<ul>
				{listItems.map((liItem, i) => (
					<li key={i}>{liItem}</li>	
				))}
			</ul>

			<hr />

			{/* A key vem por exemplo de um banco de dados, modo mais recomendado pois a chave viria por exemplo de uma foreign_key no banco, logo não ocasionando pequenos erros e alterações */}
			<ul>
				{usersList.map((user) => (
					<li key={user.id}>
						Nome: {user.name} <strong>--</strong> Idade: {user.age}
					</li>
				))}
			</ul>

			<button onClick={handleDeleteRandomUser}>Deletar usuário aleatório</button>
		</>
	)
}

export default ListRender;