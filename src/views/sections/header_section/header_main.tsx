import { observer } from "mobx-react-lite"
import styled, { css } from "styled-components"
import { useStores } from "../../../hooks/use_stores"

import AppColors from "../../../utils/color"
import HeaderLeft from "./header_left"
import HeaderRight from "./header_right"
import OpeningVideoContainer from "./opening_video_container"

const MainDiv = styled.div<{ isDrawerOpen: boolean }>`
display: flex;
height: 80px;
position: absolute;
right: 0;
left: 0;
top: 0;
background-color: transparent;
z-index: 2;
transition: all 0.5s;
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
${props => props.isDrawerOpen && css`
top:-80px;
`}
`

const HeaderMain = observer(() => {
    const { homeStore } = useStores()

    return (
        <MainDiv
            isDrawerOpen={homeStore.isDrawerOpen}
        >
            <HeaderLeft />
            <OpeningVideoContainer />
            <HeaderRight />
        </MainDiv>
    )
})

export default HeaderMain