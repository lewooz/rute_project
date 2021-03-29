import { FC } from "react"
import styled from "styled-components"

const MainDiv = styled.div<{ width?: string, flex?: string }>`
height: auto;
display: flex;
flex-direction: column;
flex: ${props => props.flex ?? "unset"};
width: ${props => props.width ?? "unset"};
`
const Select = styled.select`
background: transparent;
border-width: 0px 0px 1px;
border-style: solid;
border-color: rgba(33, 33, 33, 0.2);
letter-spacing: 0.05em;
font-weight: 400;
line-height: 20px;
font-size: 0.875rem;
outline: 0;
`
const InputTitle = styled.text`
font-size: 12px;
line-height: 26px;
color: rgba(33, 33, 33, 0.6);
`

interface DropdownProps {
    value: string
    optionList: Array<any>
    onChange: Function
    title?: string
    width?: string
    flex?: string
}

const FormDropdown: FC<DropdownProps> = (props) => {
    return (
        <MainDiv
            width={props.width}
            flex={props.flex}
        >
            {
                props.title &&
                <InputTitle>
                    {props.title}
                </InputTitle>
            }
            <Select
                value={props.value}
                onChange={(event) => props.onChange(event.target.value)}
            >
                {
                    props.optionList.map(option =>
                        <option value={option}>{option}</option>
                    )
                }
            </Select>
        </MainDiv>
    )
}

export default FormDropdown