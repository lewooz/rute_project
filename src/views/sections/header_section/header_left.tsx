import { observer } from "mobx-react-lite"
import React from "react"
import { Animated } from "react-animated-css"
import styled from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import StraightLine from "../../components/straight_line"

const MainDiv = styled.div`
flex: 1;
display: flex;
align-items: flex-end;
padding-bottom: 10px;
/* padding: 0px 0px 10px 5.09vw; */
`
const MenuTextContainer = styled.div`
display: flex;
align-items: center;
margin-left: 5.09vw;
cursor: pointer;
:hover div{
    border-color: ${AppColors.SUCCESS} !important;
    color: ${AppColors.SUCCESS} !important;
}

`
const NavigationText = styled.div<{ marginLeft?: string }>`
font-size: 18px;
color: ${AppColors.WHITE};
font-family: var(--header-font);
font-weight: 400;
margin-left: ${props => props.marginLeft ?? "unset"};
cursor: pointer;
line-height: 1.15;
transition: all 0.3s;
:hover{
    color: ${AppColors.SUCCESS} !important;
}
`
const HamburgerIconContainer = styled.div`
display: block;
`
const LeftMenuOptions = styled.div`
display: flex;
align-items: center;
margin-left: 50px;
`

const HeaderLeft = observer(() => {
    const { homeStore } = useStores()

    const onMenuClick = () => {
        console.log("GİRDİ!!")
        homeStore.toggleDrawer()
    }

    const renderMenuText = () => {
        return (
            <MenuTextContainer
                onClick={onMenuClick}
            >
                <HamburgerIconContainer>
                    <StraightLine
                        length={"20px"}
                        width={"2px"}
                        color={AppColors.WHITE}
                    />
                    <StraightLine
                        length={"20px"}
                        width={"2px"}
                        color={AppColors.WHITE}
                        hoverColor={AppColors.SUCCESS}
                        margin={"5px 0 0 0"}
                    />
                </HamburgerIconContainer>
                <NavigationText
                    marginLeft={"7px"}
                >
                    Menü
                </NavigationText>
            </MenuTextContainer>
        )
    }

    return (
        <MainDiv>
            <Animated animationIn="fadeInLeft" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={4500} isVisible={true} animateOnMount={true}>
                {renderMenuText()}
            </Animated>
            <LeftMenuOptions>
                <Animated animationIn="fadeInLeft" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={4800} isVisible={true} animateOnMount={true}>
                    <NavigationText>
                        Opsiyon 1
                </NavigationText>
                </Animated>
                <Animated animationIn="fadeInLeft" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={5100} isVisible={true} animateOnMount={true}>
                    <NavigationText
                        marginLeft={"20px"}
                    >
                        Opsiyon 2
                </NavigationText>
                </Animated>
                <Animated animationIn="fadeInLeft" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={5400} isVisible={true} animateOnMount={true}>
                    <NavigationText
                        marginLeft={"20px"}
                    >
                        Opsiyon 3
                </NavigationText>
                </Animated>
            </LeftMenuOptions>
        </MainDiv>
    )

})

export default HeaderLeft