import React from "react";
import { addTodo } from "../redux/features/productsSlice";
import { removeTodo } from "../redux/features/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todos);
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleAdd} style={{ marginTop: "5%" }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <div>
        {list.map((element) => {
          return (
            <div
              key={element.id}
              style={{
                display: "flex",
              }}
            >
              <h1>{element.text}</h1>
              <button onClick={() => dispatch(removeTodo(element.id))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
