import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faCookieBite,
  faCandyCane,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";

const Buscador = () => {
  return (
    <div className="buscador">
          <h3 className="buscador-title"> Categorias</h3>
          <div className="lista__container">
            <ul className="lista-items">
              <li>
                <FontAwesomeIcon icon={faBowlFood} /> <span>Alimentos</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCandyCane} /> <span>Confites</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPaw} /> <span>Mascotas</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCookieBite} /> <span>Panetones</span>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Buscador