import { BsCheckLg } from "react-icons/bs";

interface CheckboxProps {
    completeTheTask: (id: string) => void;
    id: string;
    isCompleted: boolean
}

const Checkbox: React.FC<CheckboxProps> = (props) => {

    function completeTheTask (): void {
        props.completeTheTask(props.id)
    }
    
    return (
            <button
            className={
                `border-pink-500 
                border-2 
                rounded-full  
                w-[20px] 
                h-[20px] 
                flex 
                justify-center 
                items-center
                ${props.isCompleted ? "bg-pink-500" : null}`   
            }
                onClick={completeTheTask}
            >
                {props.isCompleted ? <BsCheckLg /> : null}
            </button>
    )
}

export { Checkbox }