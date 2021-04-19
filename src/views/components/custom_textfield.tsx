import { FC } from "react"
import styled, { css } from "styled-components"
import FieldStatus from "../../enums/field_status"
import AppColors from "../../utils/color"
import { IoMdAlert, IoMdCheckmarkCircle } from "react-icons/io";
import media from "../../utils/custom_media";

const MainDiv = styled.div<{ width?: string, flex?: string, isVisible: boolean }>`
position: relative;
display: flex;
flex-direction: column;
flex: ${props => props.flex ?? "unset"};
width: ${props => props.width};
z-index:2;
visibility:hidden;
${props => props.isVisible && css`
visibility:visible;
`}
`
const StyledInput = styled.input<{ textTransform: string }>`
width: 100%;
outline: 0;
padding-left: 10px;
flex:1;
background: transparent;
text-transform: ${props => props.textTransform};
font:${props => props.theme.body1};
color: rgb(33, 33, 33);
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
::placeholder{
color: rgba(33, 33, 33, 0.4);
}
${media.phone}{
   font:${props => props.theme.body2};
}
`
const InputTitle = styled.text`
font:${props => props.theme.subtitle1};
color:${AppColors.WHITE};
${media.phone}{
    font:${props => props.theme.subtitle2};
    width: 100%;
}
`
const InputContainer = styled.div<{ height: string, marginTop: string }>`
display: flex;
width: 100%;
align-items: center;
height:${props => props.height};
margin-top: ${props => props.marginTop};
`
const InputRow = styled.div<{ borderColor?: string, borderWidth?: string }>`
display: flex;
flex:1;
height: inherit;
background-color: ${AppColors.WHITE};
border-radius: 4px;
align-items: center;
border: ${props => props.borderWidth} solid ${props => props.borderColor ?? "transparent"};
`
const IconContainer = styled.div`
width: 40px;
display: flex;
justify-content: center;
align-items: center;
`
const EndText = styled.div`
font:${props => props.theme.subtitle1};
color: ${AppColors.WHITE};
padding-left: 10px;
${media.phone}{
    font:${props => props.theme.subtitle2};
}
`

interface InputProps {
    value: string
    placeholder: string
    onChange: Function
    onFocus?: Function
    onBlur?: Function
    isDisabled?: boolean
    width?: string
    height?: string
    flex?: string
    title?: string
    prefix?: string
    type?: string
    endText?: string
    endIcon?: JSX.Element
    status?: FieldStatus
    isVisible?: boolean
}

const CustomTextfield: FC<InputProps> = (props) => {

    const renderEndIcon = () => {
        if (props.endIcon) {
            return (props.endIcon)
        } else {
            switch (props.status) {
                case FieldStatus.IDLE:
                    return null
                case FieldStatus.ALERT:
                    return (<IoMdAlert color={AppColors.ALERT} size={25} />)
                case FieldStatus.SUCCESS:
                    return (<IoMdCheckmarkCircle color={AppColors.SUCCESS} size={25} />)
                default:
                    return null
            }
        }
    }
    const getBorderColor = (): string => {
        if (props.status !== undefined) {
            switch (props.status) {
                case FieldStatus.IDLE:
                    return "transparent"
                case FieldStatus.ALERT:
                    return AppColors.ALERT
                case FieldStatus.SUCCESS:
                    return AppColors.SUCCESS
                default:
                    return null
            }
        } else {
            return "transparent"
        }
    }
    const getBorderWidth = () => {
        if (props.status !== undefined) {
            switch (props.status) {
                case FieldStatus.IDLE:
                    return "1px"
                case FieldStatus.ALERT:
                    return "2px"
                case FieldStatus.SUCCESS:
                    return "2px"
                default:
                    return "1px"
            }
        } else {
            return "1px"
        }
    }

    return (
        <MainDiv
            width={props.width ?? "100%"}
            flex={props.flex}
            isVisible={props.isVisible ?? true}
        >
            {
                props.title &&
                <InputTitle>
                    {props.title}
                </InputTitle>
            }
            <InputContainer
                height={props.height ?? "40px"}
                marginTop={props.title ? "10px" : "0"}
            >
                <InputRow
                    borderColor={getBorderColor()}
                    borderWidth={getBorderWidth()}
                >
                    <StyledInput
                        onChange={(event) => props.onChange(event.target.value)}
                        onFocus={props.onFocus !== undefined ? () => props.onFocus() : null}
                        onBlur={props.onBlur !== undefined ? () => props.onBlur() : null}
                        value={props.value}
                        placeholder={props.placeholder}
                        disabled={props.isDisabled ?? false}
                        type={props.type ?? "text"}
                        textTransform={props.type === "email" ? "none" : "capitalize"}
                    />
                    {
                        props.endIcon ?
                            <IconContainer>
                                {renderEndIcon()}
                            </IconContainer>
                            : null
                    }
                </InputRow>
                {
                    props.endText &&
                    <EndText>
                        {props.endText}
                    </EndText>
                }
            </InputContainer>

        </MainDiv>

    )
}

export default CustomTextfield