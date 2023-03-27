import {create} from 'zustand';

interface Todo {
  currentId: number;
  todos: {id: number; text: string; state: string}[];
  addTodo: (payload: string) => void;
  updateTodo: (payload: number) => void;
  deleteTodo: (payload: number) => void;
}

const useTodoStore = create<Todo>(set => ({
  todos: [],
  currentId: 0,
  addTodo: payload => {
    set(state => ({
      todos: [
        ...state.todos,
        {id: state.currentId++, text: payload.trim(), state: 'todo'},
      ],
    }));
  },
  updateTodo: payload => {
    set(state => {
      const itemIndex = state.todos.findIndex(item => item.id === payload);
      if (itemIndex >= 0) {
        const updatedItem = {...state.todos[itemIndex]};
        updatedItem.state = updatedItem.state === 'todo' ? 'done' : 'todo';

        const newTodos = [...state.todos];
        newTodos.splice(itemIndex, 1, updatedItem);

        return {...state, todos: newTodos};
      }

      return state;
    });
  },
  deleteTodo: payload => {
    set(state => {
      const itemIndex = state.todos.findIndex(item => item.id === payload);
      if (itemIndex >= 0) {
        const newTodos = [...state.todos];
        newTodos.splice(itemIndex, 1);

        return {...state, todos: newTodos};
      }

      return state;
    });
  },
}));

export default useTodoStore;
