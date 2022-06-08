import { TodoItem } from "./TodoItem/TodoItem";
import { useAppSelector } from "../hooks/redux";

const TodoList: React.FC = () => {
    const tasks = useAppSelector(state => state.tasks.tasks)
    const TodoList = tasks.map(item => <TodoItem key={item.id} {...item} />)
    return (
        <div className="mb-[65px]">
           {tasks.length 
                ? TodoList 
                : <div className="text-2xl italic my-no-tasks text-center mb-4">
                    There are no tasks yet
                </div>
            }
        </div>
    )
}

export {TodoList}