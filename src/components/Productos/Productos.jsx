import Buscador from "./Buscador";
import "./productos.css";
import ProductsCards from "./ProductsCards";

const Productos = () => {
  return (
    <section>
      <h5>Nuestros productos</h5>
      <h2>Para ti y tu familia aqui tenemos los mejores productos</h2>
      <div className="products__container">
        <Buscador></Buscador>
        <ProductsCards></ProductsCards>
      </div>
    </section>
  );
};

export default Productos;
