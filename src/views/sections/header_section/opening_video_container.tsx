import { useHistory, useLocation } from "react-router"
import styled, { css, keyframes } from "styled-components"
import OpeningVideoFile from "../../../assets/mp4/opening.mp4"
import { GiHamburgerMenu } from "react-icons/gi";
import AppColors from "../../../utils/color";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../hooks/use_stores";
import { useEffect } from "react";

const initialVideoAnim = keyframes`
  to {
    transform: translate(0px,0px) scale(1);
    margin:0;
    pointer-events:visible;
  }
`
const hamburgerMenuAnim = keyframes`
  to {
    opacity: 1;
    pointer-events:visible;
  }
`
const RelativeDiv = styled.div`
position: relative;
cursor: pointer;
`
const OpeningVideo = styled.video<{ isMainPage: boolean, isAlreadyPlayed: boolean }>`
height: 80px;
width: 200px;
transform: translate(calc(45vw - 100px),calc(50vh - 40px)) scale(5);
object-fit: cover;
position: relative;
z-index:1;
pointer-events:none;
${props => props.isMainPage && css`
animation: 0.5s ${initialVideoAnim} ease-out 4500ms forwards;
`}
${props => (!props.isMainPage || props.isAlreadyPlayed) && css`
transform: translate(0px,0px) scale(1);
pointer-events:visible;
`}
`
const HamburgerMenu = styled(GiHamburgerMenu)`
position: absolute;
bottom:5px;
left:5px;
z-index:5;
opacity:0;
pointer-events:none;
animation: 0.5s ${hamburgerMenuAnim} ease-out 5000ms forwards;
cursor:pointer;
`

const OpeningVideoContainer = observer(() => {
  let location = useLocation()
  let history = useHistory()
  const { homeStore } = useStores()

  const onMenuClick = () => {
    homeStore.toggleDrawer()
  }
  const goHome = () => {
    history.replace("/")
  }

  return (
    <RelativeDiv>
      <OpeningVideo
        onClick={goHome}
        src={OpeningVideoFile}
        autoPlay
        muted
        playsInline
        loop={false}
        isMainPage={(location.pathname === "/" || location.pathname === "/rute_project" || location.pathname === "/rute_project/") ? true : false}
        isAlreadyPlayed={homeStore.openingVideoAnimationPlayed}
        onEnded={() => homeStore.setOpeningAnimationVideoPlayStatus(true)}
      />
      <HamburgerMenu
        color={AppColors.WHITE}
        size={25}
        onClick={onMenuClick}
      />
    </RelativeDiv>

  )
})

export default OpeningVideoContainer