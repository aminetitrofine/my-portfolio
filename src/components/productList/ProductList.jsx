import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import MP from "../../img/moroccanpixels.jpg"
import esehaty from "../../img/esehaty.png"
import msehaty from "../../img/msehaty.png"
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projets Réalisés</h1>
        <p className="pl-desc">
          Durant mon parcours académique, j'ai travaillé sur plusieurs projets diversifié en utilisant différents technologies, je cite parmi eux :
        </p>
      </div>
      <div className="pl-list">
        <div className="p">
          <div className="p-browser">
        
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
          <h6>Moroccan Pixels ( Angular , Spring Boot, PostgreSQL, Docker)</h6>
          <img src={MP} alt="" className="p-img" />
        </div>
        <div className="p">
          <div className="p-browser">
        
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
          <h6>e-sehaty ( ReactJs, NodeJS, ExpressJs, PostgreSQL)</h6>
          <img src={esehaty} alt="" className="p-img" />
        </div>
        <div className="p">
          <div className="p-browser">
        
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
          <h6>m-sehaty ( Android Studio, Firebase )</h6>
          <img src={msehaty} alt="" className="p-img" />
        </div>



      </div>
    </div>
  );
};

export default ProductList;
