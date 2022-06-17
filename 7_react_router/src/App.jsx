import './App.css';

// 1 - Configurações do React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Reviews from './pages/Reviews'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                {/* Quando o componente possui elemento do react route, 
                ele fica dentro de browserRouter */}
                <Navbar />
                <SearchForm />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    {/* Nested Routes */}
                    <Route path="/products/:id/reviews" element={<Reviews/>} />

                    {/* Rota dinâmica */}
                    <Route path="/products/:id" element={<Product />} />

                    {/* Search */}
                    <Route path="/search" element={<Search />} />

                    {/* Rota não encontrada - 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
