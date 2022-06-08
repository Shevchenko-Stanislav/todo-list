import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem } from "../../types/types";

interface TodoState {
    tasks: ITodoItem[];
}

const initialState: TodoState = {
    tasks: []
}

const todoSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {

        addTask(state, action: PayloadAction<{message: string, id: string}>): void {
                const newTask = {
                    id: action.payload.id,
                    message: action.payload.message,
                    editMode: false,
                    isCompleted: false
            }
            state.tasks.push(newTask);
        },

        removeTask(state, action: PayloadAction<{id: string}>): void {
            state.tasks = state.tasks.filter(item => item.id !== action.payload.id); 
        },

        completeTheTask(state, action: PayloadAction<{id: string}>): void {
            const current = state.tasks.find(item => item.id === action.payload.id);
            if (current) {
                current.isCompleted = !current.isCompleted
            }
        },

        toggleEditMode(state, action: PayloadAction<{id: string}>): void {
            const current = state.tasks.find(item => item.id === action.payload.id);
            if (current) {
                current.editMode = !current.editMode;
            }
        },
        editTask(state, action: PayloadAction<{newMessage: string, id: string}>) {
            const current = state.tasks.find(item => item.id === action.payload.id)
            if (current) {
                current.message = action.payload.newMessage;
            }
        }
    }
});

export const { 
    addTask, 
    removeTask,
    completeTheTask,
    toggleEditMode,
    editTask

} = todoSlice.actions;

export default todoSlice.reducer;