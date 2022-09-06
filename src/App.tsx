import { TodoList } from './components/TodoList';
import { InputTask } from './components/InputTask';
import { ThemeToggleButton } from './components/ThemeToggleButton';

const App: React.FC = () => {
    return (
        <div className="min-h-screen py-10 max-w-3xl m-auto">
            <h1 className="text-3xl font-bold mb-5 text-center">Todo List</h1>
            <ThemeToggleButton />
            <div className="max-w-4xl px-3" style={{height: "60vh", overflowY: "scroll"}}>
                <TodoList/>
            </div>
            <InputTask/>
        </div>
    )
}

export { App }