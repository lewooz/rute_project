import { observer } from "mobx-react-lite"
import styled, { css, keyframes } from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import { MdKeyboardArrowDown } from "react-icons/md";
import VideoFile from "../../../assets/mp4/main_video.mp4"

const mainVideoAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const arrowAnim = keyframes`
    0% {
    opacity: 1;
    transform: translate(0 , -50px);
    }
    100% {
    opacity: 0;
    transform: translate(0 , 0);
    }
`
const VideoContainer = styled.div`
position: relative;
`
const StyledVideo = styled.video`
width: 100%;
height: 100vh;
object-fit: cover;
opacity: 0;
animation: 0.5s ${mainVideoAnim} ease-out 4500ms forwards;
`
const CurtainDiv = styled.div<{ isDrawerOpen: boolean }>`
position: absolute;
top: 0;
right: 0;
left:0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s;
${props => props.isDrawerOpen && css`
background-color: rgba(0,0,0,0.8);
`}
`
const SloganContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const MainSlogan = styled.text`
font-size: 3.125rem;
font-weight: 700;
color: ${AppColors.WHITE};
font-family: var(--header-font);
letter-spacing: var(--text-letter-spacing);
`
const HelperSlogan = styled.text`
font-size: 1.25rem;
font-weight: 400;
color: ${AppColors.WHITE};
font-family: var(--header-font);
letter-spacing: 0.25em;
margin-top: 20px;
`
const StyledArrowIcon = styled(MdKeyboardArrowDown) <{ isDrawerOpen: boolean }>`
position: absolute;
left: calc(50% - 20px);
bottom: 0;
z-index:2;
opacity: 0;
transform: translate(0 , -50px);
visibility: visible;
animation: 1s ${arrowAnim} ease-out 5000ms infinite;
${props => props.isDrawerOpen && css`
visibility: hidden;
`}
`

const MainVideo = observer(() => {
    const { homeStore } = useStores()
    return (
        <VideoContainer>
            <StyledVideo
                src={VideoFile}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />
            <CurtainDiv
                isDrawerOpen={homeStore.isDrawerOpen}
            >
                <SloganContainer>
                    <MainSlogan>
                        ETKİLEYİCİ YARIŞMALAR
                    </MainSlogan>
                    <HelperSlogan>
                        ÇOK YAKINDA SİZLERLE
                    </HelperSlogan>
                </SloganContainer>
            </CurtainDiv>
            <StyledArrowIcon
                color={AppColors.WHITE}
                size={40}
                isDrawerOpen={homeStore.isDrawerOpen}
            />
        </VideoContainer>
    )
})

export default MainVideo