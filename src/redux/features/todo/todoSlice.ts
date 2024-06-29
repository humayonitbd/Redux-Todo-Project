import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority:string;
};

type TInitialState = {
  todos: TTodo[];
  filteredTodos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
  filteredTodos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
       state.filteredTodos = state.todos;
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      state.filteredTodos = state.todos;
    },

    toggleComplete: (state, action: PayloadAction<string>) => {
      const taskIndex = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      // task!.isCompleted = !task?.isCompleted;
      if (taskIndex !== -1) {
        state.todos[taskIndex].isCompleted =
          !state.todos[taskIndex].isCompleted;

        if (state.todos[taskIndex].isCompleted) {
          const [completedTask] = state.todos.splice(taskIndex, 1);
          state.todos.push(completedTask);
        }
      }
      state.filteredTodos = state.todos;
    },

    priorityGetData: (state, action: PayloadAction<string>) => {
      state.filteredTodos = state.todos.filter(
        (item) => item?.priority === action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, priorityGetData } =
  todoSlice.actions;

export default todoSlice.reducer;