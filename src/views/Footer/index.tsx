import styled from '@emotion/styled'
import { BsGithub } from 'react-icons/bs'
import IconLink from '../../components/IconLink'

const StyledFooter = styled.main`
    margin: 32px;
    text-align: center;
`

const StyledIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledIconsWrapper className="icons-wrapper">
                <IconLink
                    herf="https://github.com/daniel-aziz/car-search"
                    icon={<BsGithub size="2em" />}
                />
            </StyledIconsWrapper>
        </StyledFooter>
    )
}

export default Footer
