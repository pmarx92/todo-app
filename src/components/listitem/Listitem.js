import styled from "styled-components";


function Listitem({ todoList }) {
    return (
        <ItemContainer>
            {todoList.map((todo) => {
                return <ul key={todo.id}>
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