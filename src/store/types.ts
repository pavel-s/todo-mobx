export interface ITodoBase {
  readonly id: string;
  task: string;
  completed: boolean;
}

export interface ITodo extends ITodoBase {
  toggle(): void;
  delete(): void;
  toJson(): ITodoBase;

  store: ITodoList;
}

export interface ITodoList {
  todos: ITodo[];

  completed: ITodo[];
  uncompleted: ITodo[];

  add(todo: ITodo): void;
  remove(id: ITodo['id']): void;
}

export type TNewTodo = Pick<ITodo, 'task'> & {
  id?: ITodo['id'];
  completed?: ITodo['completed'];
};
