import './App.css';
import { useState, useEffect } from 'react'

const url = 'http://localhost:3000/products'

function App() {

    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")

    // 1 - Resgatando dados
    useEffect(() => {

        async function fetchData() {

            const res = await fetch(url)
            const data = await res.json()

            setProducts(data)
        }
        
        fetchData()
        
    }, [])

    // 2 - Adicionando produtos
    const handleSubmit = async (e) => {

        e.preventDefault()

        const product = {
            name: productName,
            price: productPrice
        }

        // Adicionando o produto no db.json
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })

        console.log(product, products)
    }

    return (
        <div className="App">
            <h2>Lista de produtos</h2>

            <ul>
                {products.map((product) => (

                    <li key={product.id}>
                        {product.name} - R$: {product.price}
                    </li>
                ))}
            </ul>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome: 
                        <input 
                            type="text" 
                            value={productName} 
                            name="productName" 
                            onChange={(e) => {setProductName(e.target.value)}} 
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
                        />
                    </label>

                    <br />

                    <input type="submit" value="Criar produto" />
                </form>
            </div>                                    
        </div>
    );
}

export default App;
