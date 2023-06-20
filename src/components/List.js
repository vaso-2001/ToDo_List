import React from "react";
//styles
import {StyledList, StyledListCont,DeleteButton,ListItemCont} from "../styles/styled";

const List =({item, index, setList, list})=>{
    const deleteItem =(index)=>{
        const itemList = [...list]
        itemList.splice(index, 1)
        setList(itemList)
    }
    return (
        <div>
            <StyledListCont>
                <ListItemCont>
                    <StyledList key={index}>{item}</StyledList>
                </ListItemCont>
                <DeleteButton onClick={deleteItem}>X</DeleteButton>
            </StyledListCont>
        </div>
    );
}

export default List;