/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState, useEffect } from 'react'

function UseEffectExample2() {

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <p>Add page button to switch to individual todo by clicking it.</p>
      <button onClick={() => setCurrentPage(0)}>Page 0</button>
      <button onClick={() => setCurrentPage(1)}>Page 1</button>
      <button onClick={() => setCurrentPage(2)}>Page 2</button>
      <button onClick={() => setCurrentPage(3)}>Page 3</button>
      <button onClick={() => setCurrentPage(4)}>Page 4</button>
      <button onClick={() => setCurrentPage(5)}>Page 5</button>

      <Todo id={currentPage} />
    </>
  )
};


function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    if (id <= 5 && id > 0) {
      axios.get(`http://localhost:8080/todo?id=${id}`)
          .then(function (res) {
              setTodo(res.data.todoss)
          })
  } else {
      setTodo({
          title: 'Invalid ID',
          description: 'Please enter a valid ID'
      })
  }
  }, [id]);

  return (
    <div>
      Id : {id}
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}

export default UseEffectExample2