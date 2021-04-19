import { observer } from "mobx-react-lite"
import styled, { css } from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import HorizontalList from "./horizontal_list"
import InformationContainer from "./information_container"
import MainVideo from "./main_video"


const MainDiv = styled.div<{ openingAnimationPlayed: boolean }>`
height:100vh;
${props => props.openingAnimationPlayed && css`
height: unset;
`}
`

const HomePageMain = observer(() => {
    const { homeStore } = useStores()
    return (
        <MainDiv
            openingAnimationPlayed={homeStore.openingVideoAnimationPlayed}
        >
            <MainVideo />
            <InformationContainer />
            <HorizontalList />
        </MainDiv>
    )
})

export default HomePageMain