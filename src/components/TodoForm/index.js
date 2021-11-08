import React, { useReducer } from 'react';
//import { postTask } from '../../services/tasks';
import './style.css';

function NewTodoForm({ task, createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: '',
      description: '',
      due_date: new Date(),
      created_at: new Date(),
      completed: false,
    }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      title: userInput.title,
      description: userInput.description,
      due_date: userInput.due_date,
      created_at: userInput.created_at,
      completed: false,
    };
    // console.log('Nueva tarea', newTodo);
    // console.log(newTodo);
    createTodo(newTodo);
    setUserInput([
      {
        title: '',
        description: '',
        due_date: '',
        created_at: '',
      },
    ]);
  };

  return (
    <form className='NewTodoForm' name='form_data' onSubmit={handleSubmit}>
      <label htmlFor='task'>Nueva tarea</label>
      <input
        value={userInput.title}
        onChange={handleChange}
        id='title'
        type='text'
        name='title'
        placeholder='Titulo'
      />
      <textarea
        id='description'
        name='description'
        placeholder='1 kg de arroz'
        rows='4'
        onChange={handleChange}
      ></textarea>

      <label htmlFor='task'>Fecha de vencimiento:</label>
      <input
        id='due_date'
        type='date'
        name='due_date'
        onChange={handleChange}
      />

      <label htmlFor='task'>Fecha de creación:</label>
      <input
        id='created_at'
        type='date'
        name='created_at'
        onChange={handleChange}
      />
      <button>Agregar tarea</button>
    </form>
  );
}

export default NewTodoForm;
