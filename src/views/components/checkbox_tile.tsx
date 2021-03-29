import { FC } from "react"
import styled, { css } from "styled-components"
import AppColors from "../../utils/color"

const MainDiv = styled.div`
display: flex;
width: 100%;
align-items: center;
cursor: pointer;
`
const CheckboxContainer = styled.div`
width: 24px;
height: 24px;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${AppColors.GREY70};
`
const InnerSquare = styled.div<{ isSelected: boolean }>`
width: 0;
height: 0;
background: ${AppColors.SUCCESS};
transition: all 0.5s;
${props => props.isSelected && css`
width: 20px;
height: 20px;
`}
`
const CheckboxText = styled.text`
line-height: 1.3;
font-size: 0.875rem;
letter-spacing: 0.3px;
color: ${AppColors.GREY70};
font-weight: 400;
margin-left: 10px;
`

interface CheckboxTileProps {
    isSelected: boolean
    text: string
    onChange: Function
}

const CheckboxTile: FC<CheckboxTileProps> = (props) => {

    return (
        <MainDiv
            onClick={() => props.onChange()}
        >
            <CheckboxContainer>
                <InnerSquare
                    isSelected={props.isSelected}
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

export default CheckboxTile