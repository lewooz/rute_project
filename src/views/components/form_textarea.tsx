import { FC } from "react"
import styled from "styled-components"

const MainDiv = styled.div<{ width?: string, flex?: string }>`
height: auto;
display: flex;
flex-direction: column;
flex: ${props => props.flex ?? "unset"};
width: ${props => props.width ?? "unset"};
`
const InputTitle = styled.text`
font-size: 12px;
line-height: 26px;
color: rgba(33, 33, 33, 0.6);
`
const StyledTextarea = styled.textarea`
width: 100%;
border: 1px solid rgba(33,33,33,0.4);
resize: none;
font-size: 0.875rem;
color: rgb(33, 33, 33);
padding: 10px 20px;
::placeholder{
color: rgba(33, 33, 33, 0.4);
font-size: 14px;
font-weight: 400;
}
`

interface TextareaProps {
    value: string
    placeholder: string
    onChange: Function
    title?: string
    width?: string
    flex?: string
}

const FormTextarea: FC<TextareaProps> = (props) => {
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
            <StyledTextarea
                placeholder={props.placeholder} />
        </MainDiv>
    )
}

export default FormTextarea