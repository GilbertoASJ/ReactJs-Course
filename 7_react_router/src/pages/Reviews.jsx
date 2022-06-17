import { useParams } from 'react-router-dom'

const Review = () => {

	const { id } = useParams()

	return (
		<>
			<h3>Avaliações do produto de id: {id}</h3>
		</>
	)
}

export default Review;