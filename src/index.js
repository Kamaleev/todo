// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const TODO = () => {
  const [value, setValue] = useState('');
  const [values, set] = useState([]);
  const onChange = event => setValue(event.target.value);
  const add = text => set([...values, text]);
  const del = i => set(values.filter((value, index) => index !== i));

  return (
    <div className='todo'>
      <h1>Todo</h1>
      <form
        id='todo_form'
        onSubmit={e => {
          const trimmed = value.trim();
          e.preventDefault();
          if (trimmed !== '') {
            add(trimmed);
            setValue('');
            document.getElementById('send').focus();
          }
        }}
      >
        <input
          id='send'
          variant='outlined'
          placeholder='Insert new todo'
          autoFocus
          onChange={onChange}
          value={value}
          size='12'
        />
        &nbsp;
        <input
          type='submit'
          value='Send'
        />
      </form>

      <ol className='list'>
        {values.map((todo, index) => (
          <li className='item' key={String(index)}>
            &nbsp;
            <span className='text'>{todo}</span>
            &nbsp;
            <button onClick={() => del(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

const rootElement = document.getElementById('main');
ReactDOM.render(<TODO />, rootElement);
