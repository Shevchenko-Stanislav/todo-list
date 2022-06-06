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
                `my-checbox-border
                border-2 
                rounded-full  
                w-[20px] 
                h-[20px] 
                flex 
                justify-center 
                items-center
                ${props.isCompleted ? "my-checbox-bg" : null}`   
            }
                onClick={completeTheTask}
            >
                {props.isCompleted ? <BsCheckLg /> : null}
            </button>
    )
}

export { Checkbox }