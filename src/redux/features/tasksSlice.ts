import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Task {
  id: string;
  title: string;
  createdAt: string; // Assuming you will format the date as a string in the component or action creator
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
        return { payload: { id, title, createdAt } };
      }
    },
    // ... other actions like deleteTask, toggleTaskCompleted, etc.
  },
});

export const { addTask } = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export default tasksSlice.reducer;
