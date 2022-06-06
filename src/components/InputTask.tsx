import { BsPlusLg } from "react-icons/bs";
import { removeAllExtraSpaces } from "../helpers/removeAllExtraSpaces";

interface InputTaskProps {
    inputValue: string;
    addTask: (message: string) => void;
    setInputValue: (currentValue: string) => void;
}

const InputTask: React.FC<InputTaskProps> = (props) => {

    function addTaskOnKeyEnter (e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === "Enter") {
            addTask()
        }
    }

    function addTask () {
        const newString = removeAllExtraSpaces(props.inputValue);
        props.addTask(newString)
    }

    return (
        <div className="min-w-full my-input-grid">
            <input
                className="my-input-border w-[100%]"
                placeholder="Add a new task"
                maxLength={50}
                value={props.inputValue} 
                onChange={(e) => {props.setInputValue(e.target.value)}}
                onKeyDown={addTaskOnKeyEnter}
            />
            <button 
                onClick={addTask}
                className="my-btn-color w-12 h-7 flex justify-center items-center rounded-lg"
            >
                <BsPlusLg size={20}/>
            </button>
        </div>
    )
}

export { InputTask }