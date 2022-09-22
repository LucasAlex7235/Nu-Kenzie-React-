import "./style/reset.css";
import "../Dashboard/style/dashboard.css";
import nuKenzie from "./assets/icon/nu-kenzie.png";
import { useState } from "react";
import { TodoListCards } from "../Vitrine";

export const Dashboard = ({ setVerify }) => {
  const [todo, setTodo] = useState([]);
  const [temporaryList, setTemporaryList] = useState([]);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
    setTemporaryList([...temporaryList, newTodo]);
    setTitle("");
    setValue("");
  };

  const handleTodo = (item) => {
    const todoList = todo.filter((elem) => elem.name !== item);
    setTodo(todoList);
    setTemporaryList(todoList);
  };

  const handleTemporary = (item) => {
    const todoList =
      item === "entrada"
        ? todo.filter((elem) => elem.verify === true)
        : todo.filter((elem) => elem.verify === false);
    setTemporaryList(todoList);
  };

  const handleTemporaryAll = (item) => {
    const todoList = todo.map((elem) => elem);
    setTemporaryList(todoList);
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
                value={title}
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
                  value={value}
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
              <button
                onClick={() => {
                  handleTemporaryAll();
                }}
                className="select"
              >
                Todos
              </button>
              <button
                onClick={() => {
                  handleTemporary("entrada");
                }}
              >
                Entradas
              </button>
              <button
                onClick={() => {
                  handleTemporary("despesa");
                }}
              >
                Despesas
              </button>
            </div>
          </nav>

          {
            <TodoListCards
              todo={todo}
              temporaryList={temporaryList}
              handleTodo={handleTodo}
            />
          }
        </div>
      </section>
    </main>
  );
};
