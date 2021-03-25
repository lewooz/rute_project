import styled from "styled-components"
import AppColors from "../../../../utils/color"
import { GoArrowBoth } from "react-icons/go";
import Scrollbars from "react-custom-scrollbars-2";
import Woman1 from "../../../../assets/png/woman1.png"
import ListItem from "./list_item";

const MainDiv = styled.div`
padding-left: 150px;
width: 100%;
margin-top: 50px;
display: flex;
flex-direction: row;
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
left: 150px;
width: 650px;
height: 10px;
border-radius: 27px;
transition: all 0.5s;
background: #212121;
box-shadow: inset 2px 2px 3px #171717,
            inset -2px -2px 3px #2b2b2b;
`
const ScrollThumb = styled.div`
width: 50px;
height: 10px;
background-color: ${AppColors.WHITE};
border-radius: 27px;
box-shadow: rgb(0 0 0 / 60%) 0px 5px 5px 0px;
display: flex;
justify-content: center;
align-items: center;
z-index:1;
transition: height 0.5s;
cursor: pointer;
:hover path{
    fill: ${AppColors.GOLD};
}
`
const StyledArrow = styled(GoArrowBoth)`
pointer-events: none;
opacity: 0;
transition: opacity 0.5s;
path{
fill: ${AppColors.GREY_BG};
transition: fill 0.5s;
}
`


const DrawerHorizontalList = () => {
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
        <>
            <StyledScrollBars
                style={{ height: 450 }}
                renderThumbHorizontal={renderThumbHorizontal}
                renderTrackHorizontal={renderTrackHorizontal}
                thumbSize={50}
            >
                <MainDiv>
                    {
                        array.map((e) =>
                            <ListItem />
                        )
                    }
                </MainDiv>
            </StyledScrollBars>
        </>
    )

}

export default DrawerHorizontalList