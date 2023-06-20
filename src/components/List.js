import React from "react";

const List =({item, index, setList, list})=>{
    const deleteItem =(index)=>{
        const itemList = [...list]
        itemList.splice(index, 1)
        setList(itemList)
    }
    return (
        <div>
            <>
                <li key={index}>{item}</li>
                <button onClick={deleteItem}>X</button>
            </>
        </div>
    );
}

export default List;