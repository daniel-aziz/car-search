import styled from '@emotion/styled'
import Header from './views/Header'
import Main from './views/Main'
import Footer from './views/Footer'

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    min-height: 100vh;
`

const App = () => {
    return (
        <StyledApp>
            <Header />
            <Main />
            <Footer />
        </StyledApp>
    )
}

export default App
