import React, { useEffect, useRef, useState } from "react";
import List from "./List";
// styles
import { Button,Input,Container,Listed } from "../styles/styled";
//animation
import { Animation } from "../styles/animations";
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
        <>
            <Container variants={Animation} initial="hidden" animate="show">
                <h1>To Do List</h1>
                <Input ref={userInput} type="text" />
                <Button onClick={addItem}>ADD</Button>
            </Container>
            <Listed variants={Animation} initial="hidden" animate="show">
                <ul>
                {list.map((item, index) => (
                    <List item={item} index={index} setList={setList} list={list} />
                ))}
                </ul>
            </Listed>
        </>
    )
}

export default ToDo;