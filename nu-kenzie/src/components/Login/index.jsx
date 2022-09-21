import "./style/reset.css";
import "../Login/style/login.css";
import nuKenzie from "./assets/icon/nu-kenzie.png";
import cardIllustration from "./assets/icon/illustration.svg";

export const Login = ({ setVerify }) => {
  return (
    <div className="backgroud">
      <div className="container">
        <div className="content">
          <figure>
            <img src={nuKenzie} alt="" />
          </figure>

          <div className="content-title">
            <p>Centralize o controle das suas finanças</p>
            <span>de forma rápida e segura</span>
          </div>

          <button onClick={setVerify} className="content-btn">
            Iniciar
          </button>
        </div>

        <figure className="cardIlust">
          <img src={cardIllustration} alt="" />
        </figure>
      </div>
    </div>
  );
};
