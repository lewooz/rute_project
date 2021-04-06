import { FC } from "react"
import styled, { css } from "styled-components"
import AppColors from "../../utils/color"

const MainDiv = styled.div<ButtonProps>`
border-radius: ${props => props.borderRadius ?? "70px"};
padding: 10px 30px;
font: ${props => props.theme.button};
color: ${AppColors.WHITE};
display: flex;
justify-content: center;
align-items: center;
opacity: 0.4;
background: linear-gradient(145deg, #772d6d, #64265c);
box-shadow:  6px 6px 12px #501e49,
             -6px -6px 12px #8e3683;

cursor: default;
transition: all 0.3s;
user-select:none;
${props => !props.disabled && css`
opacity:1;
cursor: pointer;
:hover{
    transform:scale(1.1);
}
:active{
background: linear-gradient(145deg, #64265c, #772d6d);
}
`}
`

interface ButtonProps {
    borderRadius?: string
    text?: string
    disabled?: boolean
    onPressed?: Function
}

const NeumorphicButton: FC<ButtonProps> = (props) => {
    return (
        <MainDiv
            disabled={props.disabled ?? false}
            borderRadius={props.borderRadius}
            onClick={(props.onPressed && !props.disabled) ? () => props.onPressed() : null}
        >
            {props.text}
        </MainDiv>
    )
}

export default NeumorphicButton