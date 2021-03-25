import styled from "styled-components";
import React, { FC } from 'react';

const StyledDiv = styled.div<SizedBoxProps>` 
height: ${props => props.height ?? 0};
width: ${props => props.width ?? 0};
min-height: ${props => props.height ?? 0};
min-width: ${props => props.width ?? 0};
visibility: ${props => props.visibility};
display: ${props => props.display};
`
interface SizedBoxProps{
    height?: string
    width?: string
    visibility?: string
    display?: string
}
const SizedBox: FC<SizedBoxProps> = ({ height, width, visibility, display }) => {

    return (
        <StyledDiv
            height={height}
            width={width}
            visibility={visibility ?? "visible"}
            display={display ?? "flex"}
        />
    )
}

export default SizedBox