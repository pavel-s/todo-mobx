import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { TodoListContext } from '../../store/todo-list';
import styles from './tasks-list.module.scss';
import { MdDeleteForever } from 'react-icons/md';

const TasksList = observer(() => {
  const todosStore = useContext(TodoListContext);
  return (
    <div className={styles.container}>
      {todosStore.todos.map((todo) => (
        <div
          className={clsx(styles.task, todo.completed && styles.done)}
          key={todo.id}
        >
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => todo.toggle()}
            id={todo.id}
            className='custom-checkbox'
          />
          <label htmlFor={todo.id} className={styles.content}>
            {todo.task}
          </label>
          <button
            className='icon-button'
            onClick={() => todo.delete()}
            aria-label='delete task'
          >
            <MdDeleteForever />
          </button>
        </div>
      ))}
    </div>
  );
});

export default TasksList;
