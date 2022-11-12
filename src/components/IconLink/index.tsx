import styled from '@emotion/styled'
import * as React from 'react'
import { colorPalette } from '../../styles/colors'

interface IconLinkProps {
    herf: string
    icon: React.ReactElement
    color?: string
}

const StyledIconLink = styled.a`
    color: ${({ color }) => color || colorPalette.Black};

    &:hover {
        color: ${colorPalette.LightBlue};
    }
`

const IconLink = ({ herf, icon }: IconLinkProps) => {
    return <StyledIconLink href={herf}>{icon}</StyledIconLink>
}

export default IconLink
