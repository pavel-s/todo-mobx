import AddTask from '../../components/add-task';
import TasksList from '../../components/tasks-list';
import styles from './todo-list-container.module.scss';

const TodoListContainer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Tasks</h1>
      <AddTask />
      {/* <Filters /> */}
      <TasksList />
    </div>
  );
};

export default TodoListContainer;
