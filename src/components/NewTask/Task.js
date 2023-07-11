import './Task.scss'
import { db } from '../../firebase';
import { addDoc, collection, Timestamp  } from 'firebase/firestore';
import { useState, useContext } from 'react';
import { Context } from '../../context';
import Theme from '../styled-components/StyledTheme';

const Task = () =>{
    const [value] = useContext(Context);
    const [title, setTitle] = useState("");

    const sendInFireBase = async (e) =>{
        setTitle(e.target.value)

        await addDoc(collection(db, "todos"), {
            date: Timestamp.fromDate(new Date()),
            key: Math.random().toString(),
            title: title,
            completed: false
        }).then(successful => {
            console.log(`Задача с текстом (${title}) успешно добавлена!`)
        }).catch(error => {
            console.log(error);
        })
        setTitle('')
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            addTaskHandler(e)
        }
    }

    const addTaskHandler = async (e) =>{
        if(title.length === 0)
            return;
        sendInFireBase(e)
        e.target.value = ''
        
    } // добавление новых данных

    return (
        <div className='Task'>
            <div className='Task-Container'>
                <Theme.StyledInput className='Task-Input' 
                    theme={value}
                    onKeyDown={handleKeyPress} 
                    type="text" 
                    placeholder="write a task..." 
                    value={title} 
                    onChange={(e) => e.target.value.lenght === 0 ? '' : setTitle(e.target.value)}
                />
                <Theme.StyledButton theme={value} className='Task-Button' onClick={addTaskHandler}>Add</Theme.StyledButton>
            </div>
        </div>
    );
}

export default Task;