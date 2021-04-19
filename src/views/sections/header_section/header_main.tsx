import { observer } from "mobx-react-lite"
import { useRef } from "react"
import styled, { css } from "styled-components"
import useOnScreen from "../../../hooks/use_on_screen"
import { useStores } from "../../../hooks/use_stores"

import AppColors from "../../../utils/color"
import media from "../../../utils/custom_media"
import HeaderLeft from "./header_left"
import HeaderRight from "./header_right"
import OpeningVideoContainer from "./opening_video_container"

const MainDiv = styled.div<{ isMenuHidden: boolean }>`
display: flex;
height: 80px;
position: absolute;
right: 0;
left: 0;
top: 0;
background-color: transparent;
z-index: 2;
transition: all 0.5s;
padding: 0 5.09vw;
:hover{
    background-color: ${AppColors.WHITE};
    box-shadow: rgb(0 0 0 / 40%) 0px 5px 10px 1px;
}
:hover div{
    color: ${AppColors.GREY70};
    border-color: ${AppColors.GREY70};
}
:hover .svgLogo{
    color: ${AppColors.GREY70};
}
${props => props.isMenuHidden && css`
top:-80px;
`}
${media.phone}{
    padding:0;
}
`

const HeaderMain = observer(() => {
    const { homeStore } = useStores()
    const headerRef = useRef(null)
    const onScreen = useOnScreen(headerRef);

    return (
        <MainDiv
            ref={headerRef}
            isMenuHidden={(homeStore.isDrawerOpen || homeStore.isSocialLinksOpen || !onScreen) ? true : false}
        >
            <OpeningVideoContainer />
            <HeaderLeft />
            <HeaderRight />
        </MainDiv>
    )
})

export default HeaderMain