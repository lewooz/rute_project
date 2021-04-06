import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { Animated } from "react-animated-css"
import { useHistory, useLocation } from "react-router"
import styled from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import StraightLine from "../../components/straight_line"

const MainDiv = styled.div`
flex: 1;
display: flex;
align-items: flex-end;
padding-bottom: 10px;
margin-left: 50px;
`
const NavigationText = styled.div<{ marginLeft?: string, color: string }>`
font:${props => props.theme.subtitle1};
color: ${props => props.color};
margin-left: ${props => props.marginLeft ?? "unset"};
cursor: pointer;
line-height: 1.15;
transition: all 0.3s;
:hover{
    color: ${AppColors.SUCCESS} !important;
}
`

const HeaderLeft = observer(() => {
    const { homeStore } = useStores()
    let history = useHistory()

    const onMenuClick = () => {
        homeStore.toggleDrawer()
    }

    const goApplicationForm = () => {
        history.push("/application_form")
    }



    return (
        <MainDiv>
            <Animated animationIn="fadeInLeft" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={4800} isVisible={true} animateOnMount={true}>
                <NavigationText
                    color={AppColors.WHITE}
                    onClick={goApplicationForm}
                >
                    Başvuru Formu
                    </NavigationText>
            </Animated>
            <Animated animationIn="fadeInLeft" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={5100} isVisible={true} animateOnMount={true}>
                <NavigationText
                    color={AppColors.WHITE}
                    marginLeft={"20px"}
                >
                    Opsiyon 2
                </NavigationText>
            </Animated>
            <Animated animationIn="fadeInLeft" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={5400} isVisible={true} animateOnMount={true}>
                <NavigationText
                    color={AppColors.WHITE}
                    marginLeft={"20px"}
                >
                    Opsiyon 3
                </NavigationText>
            </Animated>
        </MainDiv>
    )

})

export default HeaderLeft