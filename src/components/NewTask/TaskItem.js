import './TaskItem.scss'
import { db } from '../../firebase';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useContext } from 'react';
import { Context } from '../../context';
import Theme from '../styled-components/StyledTheme';

const TaskItem = (props) =>{
    const [value] = useContext(Context);
    
    const deleteTaskHandler = async () =>{
        await deleteDoc(doc(db, "todos", props.id));
    }

    const completedHandler = async () =>{
        await updateDoc(doc(db, "todos", props.id),{completed: !props.completed})
    }

    return (
        <div className='Task-Item'>
            <Theme.StyledH3 
                theme={value}
                className='Task-Item-h3' 
                style={{textDecoration: `${props.completed ? 'line-through' : 'none'}`}} 
                onClick={completedHandler}>{props.title}
            </Theme.StyledH3>
            
            <Theme.StyledButton theme={value} onClick={deleteTaskHandler} className='Task-Item-button'>X</Theme.StyledButton>
        </div>
    );
}

export default TaskItem;