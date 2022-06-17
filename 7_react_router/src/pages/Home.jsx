import './Home.css'

import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Home = () => {

	// Carregamento de dados
	const url = 'http://localhost:3000/products'
	const {data: items, loading, error} = useFetch(url)

	return (
		<>
			<h2>Home - Produtos:</h2>
			
			{error && <p>{error}</p>}
			{loading && <p>Carregando dados</p>}

			<ul className="products">
				
				{items && items.map((item) => (

					<li key={item.id}>
						
						<h4>{item.name}</h4>
						<p>R$ - {item.price}</p>

						<Link to={`/products/${item.id}`}>Detalhes</Link>
					</li>	
				))}
			</ul>
		</>
	)
}

export default Home;