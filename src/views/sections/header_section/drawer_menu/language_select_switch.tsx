import { observer } from "mobx-react-lite"
import styled from "styled-components"
import SelectedLanguage from "../../../../enums/selected_language"
import { useStores } from "../../../../hooks/use_stores"
import AppColors from "../../../../utils/color"
import { Animated } from "react-animated-css"
import TrImage from "../../../../assets/png/tr.png"
import GbImage from "../../../../assets/png/gb.png"
import AnimatedCrossFade from "../../../components/animated_cross_fade"

const MainDiv = styled.div`
width: 44px;
height: 20px;
display: flex;
padding: 0 2px;
align-items: center;
margin-left: 10px;
border-radius: 50px;
background: #212121;
box-shadow: inset 2px 2px 4px #000000,
            inset -2px -2px 4px #423e3e;
`
const InnerCircle = styled.div<{ left: string }>`
height: 20px;
width: 20px;
border-radius: 50px;
position: absolute;
left: ${props => props.left};
transition: left 0.5s;
z-index:1;
cursor: pointer;
`
const InnerText = styled.div`
font-family: var(--header-font);
color: ${AppColors.WHITE};
font-weight: 400;
font-size: 12px;
flex: 1;
`
const StyledImage = styled.img`

`

const LanguageSelectSwitch = observer(() => {
    const { homeStore } = useStores()

    const onSwitchClick = () => {
        homeStore.setSelectedLanguage(homeStore.selectedLanguage === SelectedLanguage.TR ? SelectedLanguage.EN : SelectedLanguage.TR)
    }

    return (
        <MainDiv>
            <InnerCircle
                onClick={onSwitchClick}
                left={homeStore.selectedLanguage === SelectedLanguage.TR ? "0px" : "24px"}
            >
                <AnimatedCrossFade
                    showFirstComponent={homeStore.selectedLanguage === SelectedLanguage.TR ? true : false}
                    components={[
                        <StyledImage src={TrImage} width={20} height={20} alt={"trImage"} />,
                        <StyledImage src={GbImage} width={20} height={20} alt={"gbImage"} />
                    ]}
                />
            </InnerCircle>
            <div style={{ flex: 1 }}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={500} isVisible={homeStore.selectedLanguage === SelectedLanguage.EN ? true : false} animateOnMount={false}>
                    <InnerText>
                        EN
                </InnerText>
                </Animated>
            </div>
            <div style={{ flex: 1 }}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={500} isVisible={homeStore.selectedLanguage === SelectedLanguage.TR ? true : false} animateOnMount={false}>
                    <InnerText>
                        TR
            </InnerText>
                </Animated>
            </div>
        </MainDiv>
    )
})

export default LanguageSelectSwitch