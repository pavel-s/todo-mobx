import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { TodoListContext } from '../../store/todo-list';
import styles from './tasks-filter.module.scss';

const TasksFilter = observer(() => {
  const todosStore = useContext(TodoListContext);

  return (
    <div>
      <button
        onClick={() => (todosStore.filter = 'all')}
        className={clsx(
          'button',
          styles.button,
          todosStore.filter === 'all' && styles.current
        )}
      >
        all
      </button>
      <button
        onClick={() => (todosStore.filter = 'completed')}
        className={clsx(
          'button',
          styles.button,
          todosStore.filter === 'completed' && styles.current
        )}
      >
        done
      </button>
      <button
        onClick={() => (todosStore.filter = 'uncompleted')}
        className={clsx(
          'button',
          styles.button,
          todosStore.filter === 'uncompleted' && styles.current
        )}
      >
        active
      </button>
    </div>
  );
});

export default TasksFilter;
