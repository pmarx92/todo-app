import styled from "styled-components";


function Form({ handleInput, handleSubmit }) {

  return (
    <StyledInput>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your Todo" onChange={(event) => handleInput(event.target.value)} />

        <SubmitBtn>Add Todo</SubmitBtn>
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
    background-color: #DEEFE7;
    color: black;
    border-radius: 5px;
    border: 0;
    box-shadow: 0 0 2px black;
    margin-right: 15px;
}
`
const SubmitBtn = styled.button`
background-color:  #159A9C;
color: #fff;
border: 0;
width: 80px;
border-radius: 5px;
padding: 5px 6px;
`

export default Form