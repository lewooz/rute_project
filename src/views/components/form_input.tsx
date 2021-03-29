import { FC } from "react"
import styled from "styled-components"

const MainDiv = styled.div<{ width?: string, flex?: string }>`
display: flex;
flex-direction: column;
flex: ${props => props.flex ?? "unset"};
width: ${props => props.width ?? "unset"};
`
const StyledInput = styled.input`
width: 100%;
height: 22px;
outline: 0;
background: transparent;
border-bottom: 1px solid rgba(33, 33, 33, 0.4);
font-weight: 400;
line-height: 20px;
font-size: 0.875rem;
color: rgb(33, 33, 33);
::placeholder{
color: rgba(33, 33, 33, 0.4);
font-size: 14px;
font-weight: 400;
}
`
const InputTitle = styled.text`
font-size: 12px;
line-height: 26px;
color: rgba(33, 33, 33, 0.6);
`
const InputPrefix = styled.div`
height: 22px;
border-bottom: 1px solid rgba(33, 33, 33, 0.4);
padding: 0 5px;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.875rem;
line-height: 26px;
color: rgba(33, 33, 33, 0.6);
`
const InputRow = styled.div`
display: flex;
`

interface InputProps {
    label: string
    value: string
    onChange: Function
    width?: string
    flex?: string
    title?: string
    prefix?: string
}

const FormInput: FC<InputProps> = (props) => {
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
            <InputRow>
                {
                    props.prefix &&
                    <InputPrefix>
                        {props.prefix}
                    </InputPrefix>
                }
                <StyledInput
                    id={props.label}
                    onChange={(event) => props.onChange(event.target.value)}
                    value={props.value}
                    placeholder={props.label}
                />
            </InputRow>
        </MainDiv>

    )
}

export default FormInput