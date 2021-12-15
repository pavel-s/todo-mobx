import AddTask from '../../components/add-task';
import TasksFilter from '../../components/tasks-filter';
import TasksList from '../../components/tasks-list';
import styles from './todo-list-container.module.scss';

const TodoListContainer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Tasks</h1>
      <AddTask />
      <TasksFilter />
      <TasksList />
    </div>
  );
};

export default TodoListContainer;
