import { useContext } from 'react';
import Task from "../NewTask/Task";
import TaskList from "../NewTask/TaskList";
import './InputForm.scss'
import { Context } from '../../context';
import Theme from '../styled-components/StyledTheme'

const InputForm = () =>{
    const [value] = useContext(Context);

    return(
        <Theme.StyledDiv theme={value} className="InputForm">
            <Task /> 
            <hr className='InputForm-hr'/>
            <TaskList />
        </Theme.StyledDiv>
    );
}

export default InputForm;