import { FC } from "react"
import styled from "styled-components"
import AppColors from "../../utils/color"

const MainDiv = styled.div<CircleProps>`
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: ${props => props.width};
height: ${props => props.height};
background-color: ${props => props.backgroundColor};
border: ${props => props.borderWidth} solid ${props => props.borderColor};
border-radius: 50%;
cursor:${props => props.cursor};
::after{
    content:'${props => props.title}';
    position: absolute;
    top: 40px;
    text-align: center;
    font:${props => props.theme.subtitle1};
    color:${props => props.titleColor};
    display:${props => props.title.length > 0 ? "flex" : "none"};
    white-space: nowrap;
}
`
interface CircleProps {
    width: string,
    height: string,
    title?: string,
    titleColor?: string
    backgroundColor?: string
    borderColor?: string
    borderWidth?: string
    child?: JSX.Element
    cursor?: string
    onClick?: Function
}

const Circle: FC<CircleProps> = (props) => {
    return (
        <MainDiv
            width={props.width}
            height={props.height}
            titleColor={props.titleColor ?? AppColors.WHITE}
            backgroundColor={props.backgroundColor ?? AppColors.WHITE}
            borderColor={props.borderColor ?? AppColors.LIGHT_PURPLE}
            borderWidth={props.borderWidth ?? "0px"}
            cursor={props.cursor ?? "default"}
            title={props.title ?? ""}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {
                props.child &&
                props.child
            }
        </MainDiv>
    )
}

export default Circle