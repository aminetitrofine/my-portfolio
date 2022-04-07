import "./about.css";
import Award from "../../img/award.png";
import Photographer from "../../img/photographer.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Photographer}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">A propos</h1>

        <p className="a-desc">
        Polyvalent et créatif, je suis prêt à mettre en oeuvre mes compétences techniques
        pour mener à bien tous les projets auxquels je contribue .
        Parmi les technologies maitrisées : Angular, React, Node, Java Spring Boot... et
        bien plus encore !
        </p>
        <p className="a-desc">
        En plus de cela, je suis passionné par l'art de la photographie et le design graphique : Illustrator
        et Photoshop sont mes meilleurs alliés.
        </p>
        <p className="a-desc">
        Ceci m'octroie une flexibilité hors pair pour entreprendre de nouvelles aventures
        et m'embarquer dans des projets de taille.
        </p>

      </div>
    </div>
  );
};

export default About;
