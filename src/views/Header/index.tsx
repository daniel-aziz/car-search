import styled from '@emotion/styled'
import { headerColors } from '../../styles/colors'

const StyledHeader = styled.header`
    position: sticky;
    z-index: 999;
    top: 0px;
    background-color: ${headerColors.background};
    border-bottom: 1px solid ${headerColors.border};
`

const StyleTitleWrapper = styled.div`
    text-align: center;
`

const StyledTitle = styled.h2`
    letter-spacing: 5px;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyleTitleWrapper>
                <StyledTitle>Car Search</StyledTitle>
            </StyleTitleWrapper>
        </StyledHeader>
    )
}

export default Header
