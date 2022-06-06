import { ITodoItem } from "../types/types";
import { TodoItem } from "./TodoItem/TodoItem";


interface TodoItemProps {
    tasks: ITodoItem[];
    completeTheTask: (id: string) => void;
    removeTask: (id: string) => void;
    setEditMode: (id: string) => void;
    resetEditMode: (id: string) => void;
    editCurrentTask: (newMessage: string, id: string) => void;
}

const TodoList: React.FC<TodoItemProps> = (props) => {
    const TodoList = props.tasks.map(item => <TodoItem 
            key={item.id} 
            {...item} 
            completeTheTask={props.completeTheTask}
            removeTask = {props.removeTask}
            setEditMode={props.setEditMode}
            resetEditMode={props.resetEditMode}
            editCurrentTask = {props.editCurrentTask}
        />)
    return (
        <div className="mb-[65px]">
           {props.tasks.length 
                ? TodoList 
                : <div className="text-2xl italic my-no-tasks text-center mb-4">
                    There are no tasks yet
                </div>
            }
        </div>
    )
}

export {TodoList}