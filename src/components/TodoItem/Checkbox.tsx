import { BsCheckLg } from "react-icons/bs";
import { completeTheTask } from "../../store/reducers/todoSlice";
import { useAppDispatch } from "../../hooks/redux";
interface CheckboxProps {
    id: string;
    isCompleted: boolean
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const dispatch = useAppDispatch();

    function completeCurrentTask (): void {
        const id = props.id;
        dispatch(completeTheTask({id}))
    }
    
    return (
        <button
        className={
            `my-checbox-border
            border-2 
            rounded-full  
            w-[20px] 
            h-[20px] 
            flex 
            justify-center 
            items-center
            ${props.isCompleted && "my-checbox-bg"}`   
        }
            onClick={completeCurrentTask}
        >
            {props.isCompleted && <BsCheckLg />}
        </button>
    )
}

export { Checkbox }