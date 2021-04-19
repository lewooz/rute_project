import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'

const MainDiv = styled.div<ButtonProps>`
width: ${props => props.width};
height: ${props => props.height};
background-color: ${props => props.backgroundColor};
color: ${props => props.textColor};
border: ${props => props.border ?? "none"};
border-radius: ${props => props.borderRadius};
font-size: ${props => props.fontSize};
display: flex;
align-items: center;
justify-content: center;
font-weight: ${props => props.fontWeight};
flex-shrink: 0;
padding: 0 20px;
opacity: ${props => props.isDisabled ? 0.4 : 1};
cursor: ${props => props.isDisabled ? "default" : "pointer"};
pointer-events: ${props => props.isDisabled ? "none" : "visible"};
transition: all 0.3s;
user-select: none;
:hover{
    background-color: ${props => props.hoverBackgroundColor ?? props.backgroundColor};
    color: ${props => props.hoverTextColor ?? props.textColor};
}
`

interface ButtonProps {
    width: string
    height: string
    backgroundColor: string
    textColor: string
    hoverBackgroundColor?: string
    hoverTextColor?: string
    borderRadius?: string
    fontWeight?: number
    border?: string
    onPressed?: MouseEventHandler
    text?: string
    isDisabled?: boolean
    fontSize?: string
}


const CustomButton: FC<ButtonProps> = (props) => {

    return (
        <MainDiv
            width={props.width}
            height={props.height}
            backgroundColor={props.backgroundColor}
            hoverBackgroundColor={props.hoverBackgroundColor}
            hoverTextColor={props.hoverTextColor}
            textColor={props.textColor}
            borderRadius={props.borderRadius ?? "4px"}
            border={props.border}
            fontSize={props.fontSize ?? "14px"}
            fontWeight={props.fontWeight ?? 700}
            isDisabled={props.isDisabled ?? false}
            onClick={props.onPressed}
        >
            {props.text}
        </MainDiv>
    )
}
export default CustomButton
