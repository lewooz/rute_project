import React, { FC } from 'react';
import styled from 'styled-components';

const Line = styled.div<LineProps>`
width:${props => props.isHorizontal ? props.length : 0};
height:${props => props.isHorizontal ? 0 : props.length};
border-top: ${props => props.width} solid ${props => props.isHorizontal ? props.color : "transparent"};
border-left: ${props => props.isHorizontal ? "0" : `${props.width ?? "1px"} solid ${props.color}`}  ;
opacity: ${props => props.opacity};
align-self: ${props => props.alignSelf};
position: ${props => props.position};
top: ${props => props.top};
left: ${props => props.left};
margin: ${props => props.margin ?? 0};
flex: ${props => props.flex};
transition: all 0.3s;
:hover{
    border-color: ${props => props.hoverColor};
}
`

interface LineProps {
    color: string
    length?: string
    alignSelf?: string
    isHorizontal?: boolean
    opacity?: number
    flex?: string
    position?: string
    top?: string
    left?: string
    margin?: string
    width?: string
    hoverColor?: string

}

const StraightLine: FC<LineProps> = (props) => {

    return (
        <Line
            length={props.length}
            color={props.color}
            opacity={props.opacity ?? 1}
            position={props.position ?? "relative"}
            top={props.top ?? "0"}
            left={props.left ?? "0"}
            isHorizontal={props.isHorizontal ?? true}
            margin={props.margin}
            alignSelf={props.alignSelf ?? "center"}
            width={props.width ?? "1px"}
            hoverColor={props.hoverColor ?? props.color}
            flex={props.flex ?? "unset"}
        />
    )
}

export default StraightLine