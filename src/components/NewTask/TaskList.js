import './TaskList.scss'
import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

import { collection, query, onSnapshot, getCountFromServer } from 'firebase/firestore';
import { db } from '../../firebase';

const TaskList = () =>{
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState()

    const countCollections = async () =>{
        const coll = collection(db, "todos");
        const snapshot = await getCountFromServer(coll)
        
        setCount(()=>snapshot.data().count)
    }

    const getTodos = async () =>{
        const data = await query(collection(db, 'todos'));
        onSnapshot(data, (querySnaphot)=>{
            const array = [];
            querySnaphot.forEach((doc)=>{
                array.unshift({...doc.data(), id:doc.id});
            })
            array.sort((a, b)=>  b.date - a.date )
            setTodos(array)
        });
    }

    const ResultSuccessful = () =>{
        return todos.map(todo =>
            <TaskItem 
                date={todo.date}
                id={todo.id}
                key={todo.key} 
                title={todo.title} 
                completed={todo.completed}
            />)
    }
    
    useEffect(()=>{  
        countCollections();
        getTodos()
    }, [])

    return (
        <div className='TaskList'>
            {count === 0 && <p className="TaskList-fallback">Задач пока нет, добавь новую задачу!</p>}
            {count > 0 && <ResultSuccessful/>}
        </div>
    );
}

export default TaskList;