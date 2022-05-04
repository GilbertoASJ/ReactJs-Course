import { useState } from 'react'

const ListRender = () => {

	const [listItems] = useState(['John Doe', 'Cristian', 'Bob', 'Angela'])

	return (
		<>
			<ul>
				{listItems.map((liItem) => (
					<li>{liItem}</li>	
				))}
			</ul>
		</>
	)
}

export default ListRender;