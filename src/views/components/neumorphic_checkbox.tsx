import { FC } from "react"
import styled, { css } from "styled-components"
import AppColors from "../../utils/color"
import { FaCheck } from "react-icons/fa";

const MainDiv = styled.div`
display: flex;
width: auto;
align-items: center;
cursor: pointer;
`
const CheckboxContainer = styled.div<{ backgroundColor: string, isSelected: boolean }>`
width: 25px;
height: 25px;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
background: ${props => props.backgroundColor};
box-shadow:  3px 3px 5px #5e2457,
             -3px -3px 5px #803075;
transition: all 0.3s;
${props => props.isSelected && css`
box-shadow: inset 3px 3px 5px #5e2457,
            inset -3px -3px 5px #803075;
`}
`

const CheckboxText = styled.text`
font: ${props => props.theme.body2};
color: ${AppColors.WHITE};
margin-left: 10px;
`

interface CheckboxProps {
    backgroundColor: string
    isSelected: boolean
    text?: string
    onChange?: Function
}

const NeumorphicCheckbox: FC<CheckboxProps> = (props) => {

    return (
        <MainDiv
            onClick={() => props.onChange()}
        >
            <CheckboxContainer
                backgroundColor={props.backgroundColor}
                isSelected={props.isSelected ?? false}
            >
                <FaCheck
                    size={16}
                    color={props.isSelected ? AppColors.SUCCESS : AppColors.WHITE}
                />
            </CheckboxContainer>
            {
                props.text &&
                <CheckboxText>
                    {props.text}
                </CheckboxText>
            }
        </MainDiv>
    )
}

export default NeumorphicCheckbox