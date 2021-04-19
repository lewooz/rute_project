import { observer } from "mobx-react-lite"
import styled, { css, keyframes } from "styled-components"
import { useStores } from "../../../../hooks/use_stores"
import AppColors from "../../../../utils/color"
import media from "../../../../utils/custom_media"
import { MdClose } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const IconAnim = keyframes`
to{
    opacity: 1;
    transform: translate(0,0);
}
`

const MainDiv = styled.div<{ isSocialLinksOpen: boolean }>`
position: fixed;
top: 0;
right: 0;
bottom: 0;
width: 15vw;
display: none;
flex-direction: column;
align-items: center;
background-color: ${AppColors.GREY_BG};
z-index: 1001;
visibility: hidden;
opacity: 0;
transform: translate(15vw,0);
transition: all 0.5s;
${props => props.isSocialLinksOpen && css`
visibility: visible;
opacity: 1;
transform: translate(0,0);
`}
${media.phone}{
    display:flex;
}
`
const IconContainer = styled.div`
width:40px;
height: 40px;
border: 1px solid ${AppColors.WHITE};
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
border-radius: 50%;
`
const StyledTwitter = styled(FaTwitter) <{ resetAnim: boolean }>`
color:${AppColors.WHITE};
transform: translate(0,-10px);
opacity: 0;
animation: 0.3s ${IconAnim} ease-in 300ms forwards;
${props => props.resetAnim && css`
animation: none;
`}
`
const StyledFacebook = styled(FaFacebookF) <{ resetAnim: boolean }>`
color:${AppColors.WHITE};
transform: translate(0,-10px);
opacity: 0;
animation: 0.3s ${IconAnim} ease-in 600ms forwards;
${props => props.resetAnim && css`
animation: none;
`}
`
const StyledInstagram = styled(FaInstagram) <{ resetAnim: boolean }>`
color:${AppColors.WHITE};
transform: translate(0,-10px);
opacity: 0;
animation: 0.3s ${IconAnim} ease-in 900ms forwards;
${props => props.resetAnim && css`
animation: none;
`}
`
const StyledLinkedin = styled(FaLinkedinIn) <{ resetAnim: boolean }>`
color:${AppColors.WHITE};
transform: translate(0,-10px);
opacity: 0;
animation: 0.3s ${IconAnim} ease-in 1200ms forwards;
${props => props.resetAnim && css`
animation: none;
`}
`
const StyledPinterest = styled(FaPinterestP) <{ resetAnim: boolean }>`
color:${AppColors.WHITE};
transform: translate(0,-10px);
opacity: 0;
animation: 0.3s ${IconAnim} ease-in 1500ms forwards;
${props => props.resetAnim && css`
animation: none;
`}
`
const StyledMail = styled(GoMail) <{ resetAnim: boolean }>`
color:${AppColors.WHITE};
transform: translate(0,-10px);
opacity: 0;
animation: 0.3s ${IconAnim} ease-in 1800ms forwards;
${props => props.resetAnim && css`
animation: none;
`}
`
const MediaLinksText = styled.div`
flex: 1;
color: ${AppColors.WHITE};
font: ${props => props.theme.h6};
writing-mode: vertical-rl;
text-orientation: upright;
display: flex;
align-items: center;
justify-content: flex-end;
padding-bottom: 5px;
`

const MobileSocialLinksMenu = observer(() => {
    const { homeStore } = useStores()
    const socialIconsArray = [
        "twitter",
        "facebook",
        "instagram",
        "linkedin",
        "pinterest",
        "mail"
    ]

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case "twitter":
                return (
                    <StyledTwitter
                        color={AppColors.WHITE}
                        size={20}
                        resetAnim={!homeStore.isSocialLinksOpen}
                    />
                )
            case "facebook":
                return (
                    <StyledFacebook
                        color={AppColors.WHITE}
                        size={20}
                        resetAnim={!homeStore.isSocialLinksOpen}
                    />
                )
            case "instagram":
                return (
                    <StyledInstagram
                        color={AppColors.WHITE}
                        size={20}
                        resetAnim={!homeStore.isSocialLinksOpen}
                    />
                )
            case "linkedin":
                return (
                    <StyledLinkedin
                        color={AppColors.WHITE}
                        size={20}
                        resetAnim={!homeStore.isSocialLinksOpen}
                    />
                )
            case "pinterest":
                return (
                    <StyledPinterest
                        color={AppColors.WHITE}
                        size={20}
                        resetAnim={!homeStore.isSocialLinksOpen}
                    />
                )
            case "mail":
                return (
                    <StyledMail
                        color={AppColors.WHITE}
                        size={20}
                        resetAnim={!homeStore.isSocialLinksOpen}
                    />
                )
            default:
                break;
        }
    }
    return (
        <MainDiv
            isSocialLinksOpen={homeStore.isSocialLinksOpen}
        >
            <IconContainer>
                <MdClose
                    onClick={() => homeStore.toggleSocialLinks()}
                    size={22}
                    color={AppColors.WHITE}
                />
            </IconContainer>
            {
                socialIconsArray.map(iconName =>
                    <IconContainer>
                        {renderIcon(iconName)}
                    </IconContainer>

                )
            }
            <MediaLinksText>
                SOSYAL MEDYA
            </MediaLinksText>
        </MainDiv>
    )
})

export default MobileSocialLinksMenu