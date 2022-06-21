import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {

	const [searchParams] = useSearchParams()
	const url = `http://localhost:3000/products?${searchParams}`

	const {data: items, loading, error} = useFetch(url)
	const searchWordReplaced = searchParams.toString().replace('q=', '')

	return (
		<>
			<h3>Resultados disponíveis para '{searchWordReplaced}'</h3>

			{error && <p>{error}</p>}
			{loading && <p>Carregando dados</p>}

			<ul className="products">
				
				{items && items.map((item) => (

					<li key={item.id}>
						
						<h4>{item.name}</h4>
						<p>R$ - {item.price}</p>

						<Link to={`/products/${item.id}`}>
							Detalhes
						</Link>
					</li>	
				))}
			</ul>
		</>
	)
}

export default Search;