import { makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';
import { ITodo, ITodoList, TNewTodo } from './types';

class Todo implements ITodo {
  readonly id;
  task;
  completed;
  store;

  constructor(
    store: ITodoList,
    { id = nanoid(), task, completed = false }: TNewTodo
  ) {
    makeAutoObservable(this);

    this.store = store;
    this.id = id;
    this.task = task;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }
  delete() {
    this.store.remove(this.id);
  }

  toJson() {
    return {
      id: this.id,
      task: this.task,
      completed: this.completed,
    };
  }
}

export default Todo;
