import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AboutImg from "../images/aboutimg.png";
function APropos() {
  return (
    <div className="apropos-section" id="Apropos">
      <div className="apropos-header">
        <h2> A Propos</h2>
        <div className="about-illustration">
          <img src={AboutImg} alt="learn more about me " />
        </div>
      </div>
      <div className="apropos-p">
        <div className="about-info">
          <p>
            Après un Master dans le domaine du génie électrique, j'ai fait une
            reconversion professionnelle Dans le développement Web.{" "}
          </p>
        </div>
        <div className="about-info">
          <p>
            Après une formation diplômante dans le domaine et beaucoup
            d'apprentissage en autodidacte , je suis disponible pour des
            missions en tant que développeur Web junior
          </p>
        </div>
      </div>
      <div className="about-info-links">
        <p>
          N'hésitez pas à explorer mes projets déjà réalisés
          <a href="#projects"> ici.</a> <br />
          Vous pouvez si vous le souhaitez télécharger mon CV en format PDF ,
          pour en savoir plus sur moi{" "}
          <a
            href="https://github.com/YacineNamane/portfolio/raw/master/portfolio/src/images/Yacine-Namane-CV%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Yacine-Namane-CV-Dev-Web.pdf"
          >
            ici.
          </a>
        </p>
      </div>

      <div>
        <div className="apropos-socials">
          <a
            href="https://github.com/YacineNamane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#fafafa", fontSize: "2.6em" }}
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/namane-yacine-542398252/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#fafafa", fontSize: "2.6em" }}
            />
          </a>
          <a href="mailto:yacine.nam@outlook.fr">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#fafafa", fontSize: "2.6em" }}
              title="Email"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default APropos;
