import React, { useContext, useState } from 'react';
import { TodoListContext } from '../../store/todo-list';
import styles from './add-task.module.scss';

const AddTask = () => {
  const todos = useContext(TodoListContext);
  const [task, setTask] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    todos.add({ task });
    setTask('');
  };

  return (
    <form className={styles.form} onSubmit={handleAddTask}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='What needs to be done'
      />
      <button className='button' disabled={task.length === 0}>
        Add
      </button>
    </form>
  );
};

export default AddTask;
