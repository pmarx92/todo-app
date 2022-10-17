import styled from "styled-components";


function Listitem({ todoList, handleDelete, toggleCompletion, handleEdit, handleChange, editTodo, submitEdit, editText }) {
    return (
        <ItemContainer>
            {todoList.map((todo) => {
                return <div key={todo.id} >
                    <button onClick={() => handleDelete(todo.id)}>x</button>
                    <input type="checkbox" onChange={() => toggleCompletion(todo.id)} />

                    {editTodo === todo.id ? (<input type="text" onChange={(event) => handleEdit(event.target.value)} value={editText} />) : (<li>{todo.text}</li>
                    )}
                    {editTodo === todo.id ? (<button onClick={() => submitEdit(todo.id)}>Submit Edit</button>) : (<button onClick={() => handleChange(todo.id)}>Edit</button>)}
                </div>
            })}



        </ItemContainer>
    )
}

const ItemContainer = styled.div`
border: 1px solid red;
`

export default Listitem