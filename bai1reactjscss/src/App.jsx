import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css'
import ProductCard from './ProductCard'

function App() {
  const products = [
    { id: 1, name: "Tai nghe Gaming", price: 50, image: "https://picsum.photos/250/200?random=1" },
    { id: 2, name: "Bàn phím Cơ", price: 120, image: "https://picsum.photos/250/200?random=2" },
    { id: 3, name: "Chuột Không Dây", price: 35, image: "https://picsum.photos/250/200?random=3" },
  ];

  return (
    <div className="app-container">
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App