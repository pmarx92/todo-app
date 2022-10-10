import styled from "styled-components";


function Form({ handleInput, handleSubmit }) {

  return (
    <StyledInput>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your Todo" onChange={(event) => handleInput(event.target.value)} />

        <button>Add Todo</button>
      </form>


    </StyledInput>
  )
}

const StyledInput = styled.div`
padding: 20px;
margin-top: 1rem;

input {
    padding: 10px;
    width: 300px;
    background-color: #B4BEC9;
    border-radius: 15px;
}
`

export default Form