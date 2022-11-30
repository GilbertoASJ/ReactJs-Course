import { useState, useEffect } from 'react';

const List = ({getUsers}) => {

	const [users, setUsers] = useState([]);

	useEffect(() => {

		console.log('Buscando itens do DB...')
		setUsers(getUsers);

	}, [getUsers])

	return (
		<>
			<h4>List</h4>
			{users && users.map((user) => (

				<p key={user}>{user}</p>
			))}
		</>
	)
}

export default List;