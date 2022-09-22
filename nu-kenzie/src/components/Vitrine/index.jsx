export const TodoListCards = ({ todo, temporaryList, handleTodo }) => {
  return (
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
      {temporaryList.map((info, index) =>
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
    </ul>
  );
};
