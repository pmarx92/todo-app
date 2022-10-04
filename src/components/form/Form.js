import styled from "styled-components";



function Form() {
  return (
    <StyledInput>
        <input type="text" placeholder="Type your Todo"/>

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