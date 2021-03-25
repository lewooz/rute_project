import { Animated } from "react-animated-css"
import styled from "styled-components"
import AppColors from "../../../utils/color"

const MainDiv = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: flex-end;
padding-bottom: 10px;
`

const NavigationText = styled.div<{ marginRight?: string }>`
font-size: 18px;
color: ${AppColors.WHITE};
font-family: var(--header-font);
font-weight: 400;
margin-right: ${props => props.marginRight ?? "unset"};
cursor: pointer;
line-height: 1.15;
transition: all 0.3s;
:hover{
    color: ${AppColors.SUCCESS} !important;
}
`
const HeaderRight = () => {

    return (
        <MainDiv>
            <Animated animationIn="fadeInRight" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={4800} isVisible={true} animateOnMount={true}>
                <NavigationText
                    marginRight={"20px"}
                >
                    Opsiyon 5
                </NavigationText>
            </Animated>
            <Animated animationIn="fadeInRight" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={4500} isVisible={true} animateOnMount={true}>
                <NavigationText
                    marginRight={"5vw"}
                >
                    Opsiyon 4
                </NavigationText>
            </Animated>
        </MainDiv>
    )

}

export default HeaderRight