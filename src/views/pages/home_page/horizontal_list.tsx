import React from "react"
import Scrollbars from "react-custom-scrollbars-2"
import { GoArrowBoth } from "react-icons/go"
import styled from "styled-components"
import AppColors from "../../../utils/color"
import ListItem from "../../sections/header_section/drawer_menu/list_item"

const MainContainer = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
padding-left: 5vw;
padding-top: 50px;
padding-bottom: 50px;
`
const ListTitleText = styled.text`
font-size: 1.2rem;
font-weight: 700;
color: ${AppColors.GREY70};
margin-bottom: 50px;
`

const MainDiv = styled.div`
display: grid;
width: 100%;
height: 30vw;
min-height: auto;
grid-template-columns: repeat(14, 25vw);   
column-gap: 20px;
`
const StyledScrollBars = styled(Scrollbars)`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
min-height: 450px;
:hover .scrollContainer{
    height: 25px;
}
:hover .scrollThumb{
    height: 25px;
}
:hover svg{
    opacity:1;
}
`
const ScrollContainer = styled.div`
position: relative;
bottom: 10px;
width: calc(100% - 10vw);
height: 10px;
border-radius: 27px;
transition: all 0.5s;
background: #FFFFFF;
box-shadow: inset 1px 1px 2px #d9d9d9,
            inset -1px -1px 2px #ffffff;
`
const ScrollThumb = styled.div`
width: 50px;
height: 10px;
background-color: ${AppColors.GOLD};
border-radius: 27px;
box-shadow: rgb(0 0 0 / 60%) 0px 2px 5px 0px;
display: flex;
justify-content: center;
align-items: center;
z-index:1;
transition: height 0.5s;
cursor: pointer;
`
const StyledArrow = styled(GoArrowBoth)`
pointer-events: none;
opacity: 0;
transition: opacity 0.5s;
path{
fill: ${AppColors.WHITE};
transition: fill 0.5s;
}
`

const HorizontalList = () => {
    const array: string[] = new Array(14).fill("")

    const renderThumbHorizontal = () => {
        return (
            <ScrollThumb
                className={"scrollThumb"}
            >
                <StyledArrow />
            </ScrollThumb>
        )
    }

    const renderTrackHorizontal = () => {
        return (
            <ScrollContainer
                className={"scrollContainer"} />
        )
    }

    return (
        <MainContainer>
            <ListTitleText>
                Lorem ipsum dolor
            </ListTitleText>
            <StyledScrollBars
                style={{ height: "33vw" }}
                renderTrackHorizontal={renderTrackHorizontal}
                renderThumbHorizontal={renderThumbHorizontal}
                thumbSize={50}
            >
                <MainDiv>
                    {
                        array.map((e) =>
                            <ListItem
                                width={"100%"}
                                height={"100%"}
                            />
                        )
                    }
                </MainDiv>
            </StyledScrollBars>
        </MainContainer>

    )
}

export default HorizontalList