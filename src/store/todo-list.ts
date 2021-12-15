import { autorun, makeAutoObservable } from 'mobx';
import { createContext } from 'react';
import Todo from './todo';
import { ITodo, ITodoBase, ITodoList } from './types';

const TODOS_STORAGE_KEY = 'todos';

class TodoList implements ITodoList {
  todos: ITodo[] = [];
  filter: ITodoList['filter'] = 'all';

  constructor() {
    makeAutoObservable(this);

    // load todos from localStorage
    this.load();

    // save todos to localStorage on change
    autorun(() => {
      window?.localStorage.setItem(
        TODOS_STORAGE_KEY,
        JSON.stringify(this.todos.map((todo) => todo.toJson()))
      );
    });
  }

  get completed() {
    return this.todos.filter((todo) => todo.completed);
  }

  get uncompleted() {
    return this.todos.filter((todo) => !todo.completed);
  }

  get filtered() {
    switch (this.filter) {
      case 'completed':
        return this.completed;

      case 'uncompleted':
        return this.uncompleted;

      case 'all':
      default:
        return this.todos;
    }
  }

  add({ task }: Pick<ITodo, 'task'>) {
    this.todos.unshift(new Todo(this, { task }));
  }

  remove(id: Todo['id']) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(index, 1);
  }

  private load() {
    const json = window?.localStorage.getItem(TODOS_STORAGE_KEY);

    if (json) {
      try {
        this.todos = (JSON.parse(json) as ITodoBase[]).map(
          (todoBase) => new Todo(this, todoBase)
        );
      } catch (error) {
        console.log('load todos from localStorage failed', error);
      }
    }
  }
}

const todoListStore = new TodoList();

export const TodoListContext = createContext<TodoList>(todoListStore);

export default todoListStore;
