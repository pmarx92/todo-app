import styled from "styled-components";


function Listitem({ todoList, handleDelete, toggleCompletion, handleEdit, changeText }) {
    return (
        <ItemContainer>
            {todoList.map((todo) => {
                return <ul key={todo.id} >
                    <button onClick={() => handleDelete(todo.id)}>x</button>
                    <li>{todo.text}</li>
                    <input type="checkbox" onChange={() => toggleCompletion(todo.id)}/>
                
                    {editTodo === todo.id ? <input type="text" onChange={(event) => handleEdit(event.target.value)} /> : <li>{todo.text}</li>
                    }

                    <button onClick={() => changeText(todo.id)}> Edit</button>
                </ul>
            })}



        </ItemContainer>
    )
}

const ItemContainer = styled.div`
border: 1px solid red;
`

export default Listitem