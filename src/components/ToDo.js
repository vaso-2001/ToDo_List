import React, { useEffect, useRef, useState } from "react";
import List from "./List";

const ToDo = ()=>{

    const [list, setList] = useState([]);
    const userInput = useRef(null)

    const addItem =()=>{
        setList([...list, userInput.current.value]);
        userInput.current.value = ""
    }


    useEffect(()=>{
        userInput.current.focus()
    },[list])
    return(
        <div>
            <h1>To Do List</h1>
            <input ref={userInput} type="text" />
            <button onClick={addItem}>Add</button>
            <ul>
            {list.map((item, index) => (
                <List item={item} index={index} setList={setList} list={list} />
            ))}
            </ul>
        </div>
    )
}

export default ToDo;