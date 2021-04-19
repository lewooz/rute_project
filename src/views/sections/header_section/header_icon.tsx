
import styled from "styled-components"
import AppColors from "../../../utils/color"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FC } from "react";
import SocialIcon from "../../../enums/social_icon";
import { useLocation } from "react-router";


const MainDiv = styled.div`
height: 40px;
width: 40px;
background-color: transparent;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: background-color 0.5s;
:not(:first-child){
margin-left: 20px;
}
:hover{
    background-color: ${AppColors.SUCCESS};
}
:hover .svgLogo{
    color: ${AppColors.WHITE} !important;
}
`
const StyledTwitter = styled(FaTwitter)`
color:${AppColors.WHITE};
transition: color 0.5s;
`
const StyledFacebook = styled(FaFacebookF)`
color:${AppColors.WHITE};
transition: color 0.5s;
`
const StyledInstagram = styled(FaInstagram)`
color:${AppColors.WHITE};
transition: color 0.5s;
`
const StyledLinkedin = styled(FaLinkedinIn)`
color:${AppColors.WHITE};
transition: color 0.5s;
`
const StyledPinterest = styled(FaPinterestP)`
color:${AppColors.WHITE};
transition: color 0.5s;
`
const StyledMail = styled(GoMail)`
color:${AppColors.WHITE};
transition: color 0.5s;
`

interface HeaderIconProps {
    iconType: SocialIcon
}

const HeaderIcon: FC<HeaderIconProps> = (props) => {

    const renderIcon = () => {
        switch (props.iconType) {
            case SocialIcon.Twitter:
                return (
                    <StyledTwitter
                        className={"svgLogo"}
                        size={18}
                    />
                )
            case SocialIcon.Facebook:
                return (
                    <StyledFacebook
                        className={"svgLogo"}
                        size={18}
                    />
                )
            case SocialIcon.Instagram:
                return (
                    <StyledInstagram
                        className={"svgLogo"}
                        size={18}
                    />
                )
            case SocialIcon.Linkedin:
                return (
                    <StyledLinkedin
                        className={"svgLogo"}
                        size={18}
                    />
                )
            case SocialIcon.Pinterest:
                return (
                    <StyledPinterest
                        className={"svgLogo"}
                        size={18}
                    />
                )
            case SocialIcon.Mail:
                return (
                    <StyledMail
                        className={"svgLogo"}
                        size={18}
                    />
                )

            default:
                break;
        }
    }

    return (
        <MainDiv>
            {renderIcon()}
        </MainDiv>
    )
}

export default HeaderIcon