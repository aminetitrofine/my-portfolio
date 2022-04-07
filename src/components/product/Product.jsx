import "./product.css";
import Me from "../../img/me.png";
const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        
      </div>
      <h6>Moroccan Pixels</h6>
      <a href={link} target="_blank" rel="noreferrer">
        
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
