import { TodoList } from './components/TodoList';
import { useState } from 'react';
import { ITodoItem } from './types/types';
import { generateId } from './helpers/idGenerator';
import { InputTask } from './components/InputTask';
import { ThemeToggleButton } from './components/ThemeToggleButton';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<ITodoItem[]>(getCurrentState());
    const [inputValue, setInputValue] = useState<string>("");

    function getCurrentState () {
        try {
            const tasksFromLS = localStorage.getItem("tasks");
            const currentState = (JSON.parse(tasksFromLS || "[]")) as ITodoItem[];
            return currentState;
        } catch (err) {
            localStorage.setItem("tasks", "[]");
        }

        return [];
    }

    function setCurrentState (actualTasks: ITodoItem[]) {
        localStorage.setItem("tasks", JSON.stringify(actualTasks));
    }

    function addTask(message: string): void {
        if (message) {
            const newTask = {
                id: generateId(),
                message: message,
                editMode: false,
                isCompleted: false
            }
            const tasksCopy = [...tasks, newTask];
            
            setCurrentState(tasksCopy);
            setTasks(tasksCopy);
            setInputValue("");
        }
    }

    function removeTask(id: string): void {
        const copy = tasks.filter(item => item.id !== id); 
        setCurrentState(copy);
        setTasks(copy);
    }

    function completeTheTask(id: string): void {
        const copy = [...tasks];
        const current = copy.find(item => item.id === id);
        if (current) {
            current.isCompleted = !current.isCompleted;
            setCurrentState(copy);
            setTasks(copy);
        }
    }

    function editCurrentTask(newMessage: string, id: string) {
        const copy = [...tasks];
        const current = copy.find(item => item.id === id);
        if (current) {
            current.message = newMessage;
            setCurrentState(copy);
            setTasks(copy);
        }
    }

    function setEditMode(id: string): void {
        const copy = [...tasks];
        const current = copy.find(item => item.id === id);
        if (current) {
            current.editMode = true;
            setTasks(copy);
        }
    }

    function resetEditMode(id: string): void {
        const copy = [...tasks];
        const current = copy.find(item => item.id === id);
        if (current) {
            current.editMode = false;
            setTasks(copy);
        }
    }

    return (
        <div className="min-h-screen py-10 px-3 max-w-3xl m-auto">
            <h1 className="text-3xl font-bold mb-5 text-center">Todo List</h1>
            <ThemeToggleButton />
            <div className="max-w-4xl">
                <TodoList
                    tasks={tasks}
                    completeTheTask={completeTheTask}
                    removeTask={removeTask}
                    setEditMode={setEditMode}
                    resetEditMode={resetEditMode}
                    editCurrentTask={editCurrentTask}
                />
            </div>
            <InputTask
                addTask={addTask}
                setInputValue={setInputValue}
                inputValue={inputValue}
            />
        </div>
    )
}

export { App }