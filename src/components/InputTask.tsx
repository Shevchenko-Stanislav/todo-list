import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { removeAllExtraSpaces } from "../helpers/removeAllExtraSpaces";
import { useAppDispatch } from "../hooks/redux";
import { addTask } from "../store/reducers/todoSlice";
import { generateId } from "../helpers/idGenerator";


const InputTask: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const dispatch = useAppDispatch();

    function addTaskOnKeyEnter (e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === "Enter") {
            addNewTask()
        }
    }

    function addNewTask () {
        const newString = removeAllExtraSpaces(inputValue);
        if (newString.length) {
            const itenId = generateId();
            dispatch(addTask({message: newString, id: itenId}));
        }
        setInputValue("");
    }

    return (
        <div className="min-w-full my-input-grid pt-4 px-3">
            <input
                className="my-input-border w-[100%]"
                placeholder="Add a new task"
                maxLength={50}
                value={inputValue} 
                onChange={(e) => {setInputValue(e.target.value)}}
                onKeyDown={addTaskOnKeyEnter}
            />
            <button 
                onClick={addNewTask}
                className="my-btn-color w-12 h-7 flex justify-center items-center rounded-lg"
            >
                <BsPlusLg size={20}/>
            </button>
        </div>
    )
}

export { InputTask }