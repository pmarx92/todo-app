import styled from "styled-components";

function Header(props) {
  return (
    <div>
      <Headline>{props.title}</Headline>
    </div>
  )
}

const Headline = styled.h1`
background-color: #002333;
padding: 20px;
box-shadow: 0 0 10px #fff;
color: #fff;
`


export default Header