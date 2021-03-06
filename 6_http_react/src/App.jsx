import './App.css';
import { useState, useEffect } from 'react'

// Custom hooks
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {

    const [products, setProducts] = useState([])

    const { data: items, httpConfig, loading, error } = useFetch(url)
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")

    // 1 - Resgatando dados
    // useEffect(() => {

    //     async function fetchData() {

    //         const res = await fetch(url)
    //         const data = await res.json()

    //         setProducts(data)
    //     }
        
    //     fetchData()
        
    // }, [])

    // 2 - Adicionando produtos
    const handleSubmit = async (e) => {

        e.preventDefault()

        const product = {
            name: productName,
            price: productPrice
        }

        // Adicionando o produto no db.json
        // const res = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(product)
        // })

        // // 3 - Carregamento dinâmico
        // const addedProduct = await res.json()
        // setProducts((prevProducts) => [...prevProducts, addedProduct])

        // 5 - Refatorando POST com o hook
        httpConfig(product, 'POST')

        setProductName('')
        setProductPrice('')
    }

    // Removendo produtos
    const removeProduct = (productId) => {

        httpConfig(productId, 'DELETE')
    }

    return (
        <div className="App">
            <h2>Lista de produtos</h2>

            {error && <p>{error}</p>}

            {/* 6 - Loading */}
            {loading && <img src="loading.svg" alt="Loading" height="32px" />}

            {!error && (
                 <ul>
                    {items && items.map((product) => (

                        <li key={product.id}>
                            {product.name} <br /> - <br /> R$: {product.price}

                            <br /><br />

                            <button onClick={() => removeProduct(product.id)}>
                                Remover produto
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome: 
                        <input 
                            type="text" 
                            value={productName} 
                            name="productName" 
                            onChange={(e) => {setProductName(e.target.value)}}
                            required 
                        />
                    </label>

                    <br /><br />

                    <label>
                        Preço: 
                        <input 
                            type="number" 
                            value={productPrice} 
                            name="productPrice" 
                            onChange={(e) => {setProductPrice(e.target.value)}} 
                            required
                        />
                    </label>

                    <br />

                    {/* 7 - State de loading no POST */}
                    {loading && <input type="submit" disabled value="Aguarde" />}
                    {!loading && <input type="submit" value="Criar produto" />}
                </form>
            </div>                                    
        </div>
    );
}

export default App;
