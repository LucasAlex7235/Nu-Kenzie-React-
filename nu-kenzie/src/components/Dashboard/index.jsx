import "./style/reset.css";
import "../Dashboard/style/dashboard.css";
import nuKenzie from "./assets/icon/nu-kenzie.png";

export const Dashboard = ({ setVerify }) => {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <header>
        <nav className="container__dashboard">
          <figure onClick={setVerify}>
            <img src={nuKenzie} alt="" />
          </figure>

          <button className="btnDashboard" onClick={setVerify}>
            Inicio
          </button>
        </nav>
      </header>

      <section className="vitrine">
        <div className="vitrine-finance">
          <form className="form">
            <div className="form-description">
              <label htmlFor="">Descrição</label>
              <input type="text" placeholder="Digite aqui sua descrição" />
              <span>Ex: Compra de roupas</span>
            </div>

            <div className="form-value">
              <div className="value">
                <label htmlFor="">Valor</label>
                <input type="text" placeholder="1" />
              </div>

              <div className="type">
                <label htmlFor="">Tipo de valor</label>
                <select name="" id="">
                  <option value="put">Entrada</option>
                  <option value="output">Despesas</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn__submit__form">
              Inserir valor
            </button>
          </form>

          <footer className="footer__value">
            <div className="footer__value-value">
              <p>Valor total:</p>
              <span>0,00</span>
            </div>
            <span className="span__footer">O valor se refere ao saldo</span>
          </footer>
        </div>

        <div className="financial__Summary">
          <nav>
            <h3>Resumo financeiro</h3>
            <div className="btn__nav">
              <button>Todos</button>
              <button>Entradas</button>
              <button>Despesas</button>
            </div>
          </nav>

          <ul className="vitrine__ul">
            <li className="card entry">
              <div className="card-description">
                <h3>Salário - Mês Dezembro</h3>
                <span>Entrada</span>
              </div>

              <div className="card-value">
                <span>R$ 2.000,00</span>
                <figure>
                  <span class="material-symbols-outlined">delete</span>
                </figure>
              </div>
            </li>

            <li className="card exit">
              <div className="card-description">
                <h3>Salário - Mês Dezembro</h3>
                <span>Entrada</span>
              </div>

              <div className="card-value">
                <span>R$ 2.000,00</span>
                <figure>
                  <span class="material-symbols-outlined">delete</span>
                </figure>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
