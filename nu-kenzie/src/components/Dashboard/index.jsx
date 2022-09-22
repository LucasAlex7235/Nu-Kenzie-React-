import "./style/reset.css";
import "../Dashboard/style/dashboard.css";
import nuKenzie from "./assets/icon/nu-kenzie.png";
import { useState } from "react";

export const Dashboard = ({ setVerify }) => {
  const [todo, setTodo] = useState([]);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const handleTodo = (item) => {
    const todoList = todo.filter((elem) => elem.name !== item);
    setTodo(todoList);
  };

  const finance = () => {
    addTodo({
      name: title,
      value: Number(value),
      type: type,
      verify: type != "put" ? false : true,
    });
  };

  const valueAll = () => {
    let counter = 0;
    todo.map((elem) =>
      elem.verify === false
        ? (counter = counter - elem.value)
        : (counter = counter + elem.value)
    );
    return counter;
  };

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
          <form
            className="form"
            onSubmit={(event) => finance(event.preventDefault())}
          >
            <div className="form-description">
              <label htmlFor="">Descrição</label>
              <input
                type="text"
                placeholder="Digite aqui sua descrição"
                onChange={(event) => setTitle(event.target.value)}
              />
              <span>Ex: Compra de roupas</span>
            </div>

            <div className="form-value">
              <div className="value">
                <label htmlFor="">Valor</label>
                <input
                  type="number"
                  placeholder="1"
                  onChange={(event) => setValue(event.target.value)}
                />
              </div>

              <div className="type">
                <label htmlFor="">Tipo de valor</label>
                <select
                  name=""
                  id=""
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="output">Despesas</option>
                  <option value="put">Entrada</option>
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
              <span>{valueAll()}</span>
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
            {todo.length === 0 ? (
              <div className="container__none">
                <li className="card exit none">
                  <div className="content__none">
                    <p id="fist">.</p>
                    <p id="last">.</p>
                  </div>
                </li>

                <li className="card exit none">
                  <div className="content__none">
                    <p id="fist">.</p>
                    <p id="last">.</p>
                  </div>
                </li>

                <li className="card exit none">
                  <div className="content__none">
                    <p id="fist">.</p>
                    <p id="last">.</p>
                  </div>
                </li>
              </div>
            ) : (
              ""
            )}
            {todo.map((info, index) =>
              info.type === "put" ? (
                <li key={index} className="card entry">
                  <div className="card-description">
                    <h3>{info.name}</h3>
                    <span>Entrada</span>
                  </div>

                  <div className="card-value">
                    <span>{`R$ ${info.value},00`}</span>
                    <figure>
                      <span
                        onClick={() => handleTodo(info.name)}
                        class="material-symbols-outlined"
                      >
                        delete
                      </span>
                    </figure>
                  </div>
                </li>
              ) : (
                <li key={index} className="card exit">
                  <div className="card-description">
                    <h3>{info.name}</h3>
                    <span>Despesas</span>
                  </div>

                  <div className="card-value">
                    <span>{`R$ ${info.value},00`}</span>
                    <figure>
                      <span
                        class="material-symbols-outlined"
                        onClick={() => handleTodo(info.name)}
                      >
                        delete
                      </span>
                    </figure>
                  </div>
                </li>
              )
            )}

            {/* <li className="card entry">
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
            </li> */}

            {/* <li className="card exit">
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
            </li> */}
          </ul>
        </div>
      </section>
    </main>
  );
};
