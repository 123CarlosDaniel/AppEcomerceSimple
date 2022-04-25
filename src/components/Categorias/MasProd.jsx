import fideo from '../../assets/fideos.jpg'
import cookie from '../../assets/cookies.jpg'
import yogur from '../../assets/yogur.jpg'
import paneton from '../../assets/paneton.jpg'

const ProductosExtra = () => {
  return (
    <div className="card__container container">
      <div className="card__image card-extra">
        <img src={fideo}  />
        <div className="card-description">
          <a href="">Alimentos</a>
        </div>
      </div>
      <div className="card__image card-extra">
        <img src={cookie}  />
        <div className="card-description">
        <a href="">Galletas</a>
        </div>
      </div>
      <div className="card__image card-extra">
        <img src={yogur}  />
        <div className="card-description">
        <a href="">Lacteos</a>
        </div>
      </div>
      <div className="card__image card-extra">
        <img src={paneton}  />
        <div className="card-description">
        <a href="">Panetones</a>
        </div>
      </div>
    </div>
  )
}

export default ProductosExtra