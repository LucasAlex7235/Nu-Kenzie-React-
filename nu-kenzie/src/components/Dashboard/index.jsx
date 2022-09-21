import nuKenzie from "./assets/icon/nu-kenzie.png";

export const Dashboard = () => {
  return (
    <main>
      <header>
        <figure>
          <img src={nuKenzie} alt="" />
        </figure>
      </header>

      <section className="vitrine">
        <div className="vitrine-finance">
          <form action="">
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
            </div>

            <div className="form-type">
              <div className="type">
                <label htmlFor="">Tipo de valor</label>
                <select name="" id="">
                  <option value="put">Entrada</option>
                  <option value="output">Despesas</option>
                </select>
              </div>
            </div>
          </form>

          <footer className="footer__value">
            <div className="footer__value-value">
              <p>Valor total:</p>
              <p>0,00</p>
            </div>
            <span>O valor se refere ao saldo</span>
          </footer>
        </div>
      </section>
    </main>
  );
};
