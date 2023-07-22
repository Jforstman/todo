import React from 'react';
import './App.css';

function App() {
  const [value, setValue] = React.useState([]);
  const [items, setItems] = React.useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setItems ([...items, value]); //changed this to addTodo from previous on index.js.
    setValue('');
  }
  return (
    <div>
      <h1>ToDo</h1>
      <TodoList items = {items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor='new-todo'>Add Todo: </label>
      <input 
        id="new-todo"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} />
    <button>
      Add #{items.length + 1}
    </button>
    </form>
    </div>
    
  );
}
function TodoList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default App;
