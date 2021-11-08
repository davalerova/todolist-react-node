import React, { useState, useEffect } from 'react';
import Todo from '../../components/Todo';
import NewTodoForm from '../../components/TodoForm';
import {
  fechTasks,
  completeTask,
  deleteTask,
  putTask,
  postTask,
} from '../../services/tasks';
import './style.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const tasks = await fechTasks();
      setTodos(tasks);
    }

    getTasks();
  }, []);

  const create = async (newTodo) => {
    await postTask(newTodo);
    setTodos([...todos, newTodo]); //Se está agregando la tarea en el estado
  };

  const remove = (id) => {
    const deleted = deleteTask(id);
    setTodos([todos.filter((task) => task.id !== id)]);
  };

  const update = (id, updtedTask) => {
    putTask(updtedTask);
    const updatedTodos = todos?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos?.map(async (todo) => {
      if (todo.id === id) {
        await completeTask(id, todo); //Para completar (marcar) la tarea en el back
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos?.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <div className='TodoList'>
      <h1>
        Taskit <span>Lista de tareas</span>
      </h1>
      <ul>{todosList}</ul>
      <NewTodoForm createTodo={create} />
    </div>
  );
}

export default TodoList;
