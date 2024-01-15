
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { addTask } from '../redux/features/tasksSlice';

describe('taskSlice', () => {
  test('should handle adding a new task', () => {
    const store = configureStore({ reducer: { tasks: tasksReducer } });

    const newTaskTitle = "Test Task";
    store.dispatch(addTask(newTaskTitle));

    const state = store.getState().tasks;
    expect(state.tasks).toHaveLength(1);
    expect(state.tasks[0].title).toEqual(newTaskTitle);
    // Add more assertions as needed
  });
});
