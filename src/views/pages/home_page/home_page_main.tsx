import styled from "styled-components"
import HorizontalList from "./horizontal_list"
import InformationContainer from "./information_container"
import MainVideo from "./main_video"

const MainDiv = styled.div`

`

const HomePageMain = () => {
    return (
        <MainDiv>
            <MainVideo />
            <InformationContainer />
            <HorizontalList />
        </MainDiv>
    )
}

export default HomePageMain