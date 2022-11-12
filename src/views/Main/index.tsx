import styled from '@emotion/styled'
import Search from './Search'

const StyledMain = styled.main`
    margin: 32px;
    text-align: center;
    flex-grow: 1;
`

const Main = () => {
    return (
        <StyledMain>
            <Search />
        </StyledMain>
    )
}

export default Main
