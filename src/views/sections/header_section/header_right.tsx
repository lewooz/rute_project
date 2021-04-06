import { Animated } from "react-animated-css"
import styled from "styled-components"
import SocialIcon from "../../../enums/social_icon"
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


const HeaderRight = () => {

    return (
        <MainDiv>
            <Animated animationIn="fadeInRight" animationOut={"fadeOut"} animationInDuration={500} animationInDelay={4800} isVisible={true} animateOnMount={true}>
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

            </Animated>
        </MainDiv>
    )

}

export default HeaderRight