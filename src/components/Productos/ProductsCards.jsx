import CardImage from "./CardImage";
import {useEffect, useState} from "react";
import axios from "axios";
const urlApi = import.meta.env.URL_API

const ProductsCards = () => {
  // let url = URL_API
  let url = "http://localhost:4000/api"
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(url).then(res => {
      // console.log(res.data);
      setProducts(res.data.data);
    })
    return () => {
      console.log("cleanup");
    }
  }, [url])
  

  return (
    <div className="products__cards">
          {products.map((producto) => (
            <CardImage
              key={producto._id}
              imagen={producto.image.secure_url}
              title={producto.title}
              description={producto.description}
              price={producto.price}
            ></CardImage>
          ))}
        </div>
  )
}

export default ProductsCards