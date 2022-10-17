import styled from "styled-components";


function Listitem({ todoList, handleDelete, toggleCompletion, handleEdit, handleChange, editTodo, submitEdit, editText }) {
    return (
        <ItemContainer>
            {todoList.map((todo) => {
                return <TodoInterface key={todo.id} >
                    {editTodo === todo.id ? (<input type="text" onChange={(event) => handleEdit(event.target.value)} value={editText} />) : (<li>{todo.text}</li>
                    )}
                    <input type="checkbox" onChange={() => toggleCompletion(todo.id)} />
                    {editTodo === todo.id ? (<StyledBtn onClick={() => submitEdit(todo.id)}>Submit Edit</StyledBtn>) : (<StyledBtn onClick={() => handleChange(todo.id)}>Edit</StyledBtn>)}

                    <StyledBtn onClick={() => handleDelete(todo.id)}>x</StyledBtn>

                </TodoInterface>
            })}



        </ItemContainer>
    )
}

const ItemContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
gap: 25px;
`
const TodoInterface = styled.div`
display: flex;
gap: 10px;
padding: 10px;

background-color: #DEEFE7;
border-radius: 5px;
justify-content: flex-end;
align-items: center;
`

const StyledBtn = styled.button`
background-color:  #159A9C;
color: #fff;
border: 0;
width: 50px;
border-radius: 5px;
padding: 5px 6px;
transition: 0.3s;

&:hover {
transform: scale(1.1);
box-shadow: 0 0 5px grey;
transition: 0.3s;
}
`



export default Listitem