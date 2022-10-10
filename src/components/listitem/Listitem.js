import styled from "styled-components";


function Listitem({ todoList, handleDelete }) {
    return (
        <ItemContainer>
            {todoList.map((todo) => {
                return <ul key={todo.id} >
                    <button onClick={() => handleDelete(todo.id)}>x</button>
                    <li>{todo.text}</li>
                </ul>
            })}



        </ItemContainer>
    )
}

const ItemContainer = styled.div`
border: 1px solid red;
`

export default Listitem