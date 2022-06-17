import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Product = () => {

	// Rota dinâmica - o useParams é utilizado para recuperar todos os parâmetros da url
	const { id } = useParams()

	// Carregamento de dado individual
	const url = `http://localhost:3000/products/${id}`
	const { data: product, loading, error } = useFetch(url)

	console.log(product)

	return (
		<>
			<h4>Id do produto: {id}</h4>

			{error && <p>{error}</p>}
			{loading && <p>Carregando dados</p>}

			{product && (
				<div>
					<p><strong>{product.name}</strong></p>
					<p>Preço: R${product.price}</p>

					{/* Nested Routes */}
					<Link to={`/products/${product.id}/reviews`}>
						Avaliações do produto
					</Link>
				</div>	
			)}
		</>
	)
}

export default Product;