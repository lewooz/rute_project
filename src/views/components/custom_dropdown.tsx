import React, { FC } from "react"
import styled, { css } from "styled-components"
import CustomTextfield from "./custom_textfield"
import { IoIosArrowDown } from "react-icons/io";
import AppColors from "../../utils/color";
import Scrollbars from "react-custom-scrollbars-2";
import useOutsideClick from "../../hooks/use_outside_click";
import FieldStatus from "../../enums/field_status";

const MainDiv = styled.div<{ width: string, margin: string, flex: string, isDropdownDisabled: boolean }>`
position: relative;
width: ${props => props.width};
margin: ${props => props.margin};
flex: ${props => props.flex};
pointer-events:visible;
opacity:1;
${props => props.isDropdownDisabled && css`
pointer-events: none;
opacity:0.8;
`}
`
const DownArrowIcon = styled(IoIosArrowDown) <{ isDropdownOpen: boolean }>`
color: ${AppColors.GREY70};
cursor: pointer;
transform: rotate(0deg);
transition: transform 0.5s;
${props => props.isDropdownOpen && css`
transform: rotate(180deg);
`}
`
const DropDownContainer = styled.div<{ height: string, isVisible: boolean, top: string }>`
position: absolute;
display: flex;
padding: 10px 25px;
left: 0;
top: ${props => props.top} ;
width: 100%;
height: 180px;
z-index:5;
border-radius: 0 0 4px 4px;
background-color: ${AppColors.WHITE};
opacity: 0;
border-top: 1px solid ${AppColors.GREY70};
visibility:hidden;
transition: opacity 0.5s;
${props => props.isVisible && css`
visibility: visible;
opacity:1;
`}
`

const DropDownContent = styled.div`
flex:1;
display: grid;
grid-template-rows: auto;
grid-row-gap: 10px;
overflow: hidden;
`
const OptionText = styled.div`
width: 90%;
text-align:start;
cursor: pointer;
color: ${AppColors.GREY70};
font:${props => props.theme.body1};
background-color: transparent;
:hover{
background-color:rgba(0,0,0,0.1);
}
`
interface DropdownOptions {
    options: Array<any>
    width?: string
    height?: string
    title?: string
    placeholder?: string
    margin?: string
    flex?: string
    value?: string
    status?: FieldStatus
    isTypingDisabled?: boolean
    isDropdownDisabled?: boolean
    onChange: Function
}

const CustomDropdown: FC<DropdownOptions> = (props) => {
    const [searchValue, setSearchValue] = React.useState("")
    const [isDropdownOpen, setDropdownStatus] = React.useState(false)
    const mainRef = React.useRef(null)

    useOutsideClick(mainRef, () => {
        setDropdownStatus(false)
    });

    const toggleDropdown = () => {
        setDropdownStatus(!isDropdownOpen)
    }
    const onOptionClick = (event: any, option: string) => {
        event.stopPropagation()
        setSearchValue(option)
        props.onChange(option.toString())
        setDropdownStatus(false)
    }


    return (
        <MainDiv
            width={props.width ?? "48%"}
            margin={props.margin ?? "0 0 0 0"}
            flex={props.flex ?? "unset"}
            isDropdownDisabled={props.isDropdownDisabled}
            onClick={(props.isTypingDisabled ?? true) ? () => setDropdownStatus(true) : null}
            ref={mainRef}
        >
            <CustomTextfield
                width={"100%"}
                height={props.height ?? "40px"}
                title={props.title}
                placeholder={props.placeholder ?? ""}
                value={props.value ?? searchValue}
                isDisabled={props.isTypingDisabled ?? true}
                onFocus={() => setDropdownStatus(true)}
                onBlur={() => setDropdownStatus(false)}
                onChange={(value: string) => setSearchValue(value)}
                status={props.status}
                endIcon={<DownArrowIcon
                    isDropdownOpen={isDropdownOpen}
                    onClick={toggleDropdown}
                />}
            />
            <DropDownContainer
                height={props.height ?? "40px"}
                top={`calc(${props.height} + ${props.title ? "25px" : "0"})`}
                isVisible={isDropdownOpen}
            >
                <Scrollbars>
                    <DropDownContent>
                        {
                            props.options.map(option =>
                                <OptionText
                                    onMouseDown={(event: any) => onOptionClick(event, option)}
                                >
                                    {option}
                                </OptionText>
                            )
                        }
                    </DropDownContent>
                </Scrollbars>
            </DropDownContainer>
        </MainDiv>
    )
}

export default CustomDropdown