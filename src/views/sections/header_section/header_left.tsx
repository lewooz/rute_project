import { observer } from "mobx-react-lite"
import { Animated } from "react-animated-css"
import { useHistory } from "react-router"
import styled from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import media from "../../../utils/custom_media"

const MainDiv = styled.div`
flex: 1;
display: flex;
align-items: flex-end;
padding-bottom: 10px;
margin-left: 50px;
${media.phone}{
    display: none;
}
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