import * as React from "react"
import "../styles/global.css"

const products = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Produto ${i + 1}`,
  price: `R$ ${(99.9 + i).toFixed(2)}`,
  image: `/images/products/product-${(i % 4) + 1}.jpg`
}))

const IndexPage = () => (
  <main className="container">
    <header>
      <h1>ESSENCIALLE</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Coleções</a>
        <a href="#">Contato</a>
      </nav>
    </header>
    <section className="grid">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button>Comprar</button>
        </div>
      ))}
    </section>
    <footer>
      <p>© 2025 ESSENCIALLE</p>
    </footer>
  </main>
)

export default IndexPage