import { useParams } from 'react-router-dom'

const Product = () => {

	// Rota dinâmica - o useParams é utilizado para recuperar todos os parâmetros da url
	const { id } = useParams()

	return (
		<>
			<h5>Id do produto: {id}</h5>
		</>
	)
}

export default Product;