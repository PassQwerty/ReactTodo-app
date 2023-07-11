import { useContext } from 'react';
import BtnTheme from '../UI/BtnTheme';
import '../fonts/font.css'
import './TaskInfo.scss'
import style from 'styled-components'
import { Context } from '../../context';

const H1 = style.h1`
    color: ${props => props.theme === 'Dark' ? '#222831' : '#A86666'};
`

const TaskInfo = () => {
    const [value] = useContext(Context);

    return (
        <div className="TaskInfo">
            <div className="change-theme">
                <BtnTheme />
            </div>
            <div>
                <H1 theme={value} className="todo-Text">Todo List</H1>
            </div>
        </div>
    );
}

export default TaskInfo;