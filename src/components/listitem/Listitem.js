import styled from "styled-components";


function Listitem() {
    return (
        <ItemContainer>
            <ul>
                <li>Listitem</li>
                <li>Listitem</li>
                <li>Listitem</li>
            </ul>


        </ItemContainer>
    )
}

const ItemContainer = styled.div`
border: 1px solid red;
`

export default Listitem