import { observer } from "mobx-react-lite"
import { Animated } from "react-animated-css"
import styled from "styled-components"
import Platform from "../../../enums/platform"
import SocialIcon from "../../../enums/social_icon"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import HeaderIcon from "./header_icon"

const MainDiv = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: flex-end;
padding-bottom: 10px;
`
const SocialIconsRow = styled.div`
display: flex;
align-items: center;
`
const SocialMediaLinks = styled.div`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
color: ${AppColors.WHITE};
border: 2px solid ${AppColors.WHITE};
background: transparent;
font: ${props => props.theme.subtitle1};
border-radius: 50%;
margin-right: 10px;
`

const HeaderRight = observer(() => {
    const { homeStore } = useStores()
    return (
        <MainDiv>
            <Animated animationIn="fadeInRight" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={4800} isVisible={true} animateOnMount={true}>
                {
                    homeStore.currentPlatform === Platform.Phone ?
                        <SocialMediaLinks
                            onClick={() => homeStore.toggleSocialLinks()}
                        >
                            SM
                        </SocialMediaLinks>
                        :
                        <SocialIconsRow>
                            <HeaderIcon
                                iconType={SocialIcon.Twitter}
                            />
                            <HeaderIcon
                                iconType={SocialIcon.Facebook}
                            />
                            <HeaderIcon
                                iconType={SocialIcon.Instagram}
                            />
                            <HeaderIcon
                                iconType={SocialIcon.Linkedin}
                            />
                            <HeaderIcon
                                iconType={SocialIcon.Pinterest}
                            />
                            <HeaderIcon
                                iconType={SocialIcon.Mail}
                            />
                        </SocialIconsRow>
                }

            </Animated>
        </MainDiv>
    )
})

export default HeaderRight