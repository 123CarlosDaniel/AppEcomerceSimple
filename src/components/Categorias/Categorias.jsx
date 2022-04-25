import Card from './Card'
import './categorias.css'
import ProductosExtra from './MasProd'

const Categorias = () => {
  return (
    <section id='productos'>
      <h5>Productos</h5>
      <h2>Nuestras categorias</h2>
      <Card></Card>
      <div className="container">
      <h4 className='masproducts'>Mas Productos</h4>
      </div>
      <ProductosExtra></ProductosExtra>
    </section>
  )
}

export default Categorias