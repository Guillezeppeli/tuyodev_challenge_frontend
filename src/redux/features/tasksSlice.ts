import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Task {
  id: string;
  title: string;
  createdAt: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      },
      prepare: (title: string) => {
        const now = new Date();
        const hour = now.getHours() % 12 || 12; // Convert 24h to 12h format
        const minute = now.getMinutes();
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hour}:${minute < 10 ? '0' : ''}${minute} ${ampm}`;
        const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
        const createdAt = `${formattedTime}, ${formattedDate}`;
        const id = nanoid(); // Generates unique id for each task
        return { payload: { id, title, createdAt, completed: false } };
      }
    },
    toggleTaskCompleted: (state, action: PayloadAction<{ id: string }>) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
  },
});

export const { addTask, toggleTaskCompleted, deleteTask } = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
