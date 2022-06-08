import { removeAllExtraSpaces } from "../../helpers/removeAllExtraSpaces";
import { ITodoItem } from "../../types/types";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { TbEdit } from "react-icons/tb"
import { BsCheckCircleFill } from "react-icons/bs";
import { Checkbox } from "./Checkbox";
import { removeTask, toggleEditMode, editTask } from "../../store/reducers/todoSlice";
import { useAppDispatch } from "../../hooks/redux";


const TodoItem: React.FC<ITodoItem> = (props) => {
    const [editModeInputValue, setEditModeInputValue] = useState(props.message);

    const itemId = props.id;
    const dispatch = useAppDispatch();

    function toggleCurrentItemEditMode () {
        dispatch(toggleEditMode({id: itemId}))
    }

    function setEditModeCurrentInputValue (e: React.ChangeEvent<HTMLInputElement>) {
        setEditModeInputValue(e.target.value)
    }

    function editCurrentTaskOnKeyEnter (e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            editCurrentTask()
        }
    }

    function editCurrentTask () {
        const newString = removeAllExtraSpaces(editModeInputValue);
        setEditModeInputValue(newString);
        toggleCurrentItemEditMode();
        dispatch(editTask({newMessage: newString, id: itemId}));
        
        if (!newString.length) {
            removeCurrentTask()
        }
    }

    function removeCurrentTask () {
        dispatch(removeTask({id: itemId}))
    }

    return(
        <div className="mb-3 my-item-color my-grid h-[70px] px-3 py-1 rounded-2xl flex content-center flex-wrap min-w-[250px]">
            <div className="flex justify-center items-center">
                <Checkbox id={props.id} isCompleted={props.isCompleted} />
            </div>
            {props.isCompleted &&
                <>
                    <s className="text-gray-400 h-[24px] overflow-auto">
                        <div className="text-gray-400 overflow-auto h-[24px]">
                            {props.message}
                        </div>
                    </s>
                    <button
                        className="h-[24px] box-border flex justify-center items-center"
                        onClick={toggleCurrentItemEditMode}
                        disabled={props.isCompleted}
                    >
                        <TbEdit size={20} opacity={0.4}/>
                    </button>
                </>}
            {props.editMode &&
                <>
                    <input
                        className="my-input-border h-[24px] w-[100%]"
                        maxLength={50}
                        type="text"
                        autoFocus={true}
                        value={editModeInputValue}
                        onChange={setEditModeCurrentInputValue}
                        onKeyDown={editCurrentTaskOnKeyEnter}
                        onBlur={editCurrentTask}
                    />
                    <button
                        className="h-[24px] box-border flex justify-center items-center"
                        onClick={editCurrentTask}
                    >
                        <BsCheckCircleFill size={20} />
                    </button>
                </>}
            {!props.editMode && !props.isCompleted &&
                <>
                    <div className="overflow-auto h-[24px]">
                        {props.message}
                    </div>
                    <button
                        className="h-[24px] box-border flex justify-center items-center"
                        onClick={toggleCurrentItemEditMode}
                    >
                        <TbEdit size={20}/>
                    </button>
                </>}
            <button
                className="h-[24px] box-border flex justify-center items-center"
                onClick={removeCurrentTask}
            >
                <BsTrash size={20} />
            </button>
        </div>
    )
}

export { TodoItem }