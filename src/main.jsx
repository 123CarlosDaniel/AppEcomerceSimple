import reactDom from "react-dom";
import './main.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Productos from "./components/Productos/Productos";
import Menu from "./components/Menu/Menu";
import PostProductos from "./components/FormularioProductos/PostProductos";
import PostP from "./components/FormularioProductos/PostP";

reactDom.render(
  <>
  <BrowserRouter>
  <Menu></Menu>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/productos" element={<Productos/>}/>
      {/* <Route path="/productos/post" element={ <PostProductos/> }></Route> */}
      <Route path="/productos/post" element={ <PostP  /> }></Route>
      
    </Routes>
  </BrowserRouter>
  </>,
  document.getElementById("root")
);