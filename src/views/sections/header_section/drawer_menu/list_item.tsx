import styled from "styled-components";
import Woman1 from "../../../../assets/png/woman1.png"
import AppColors from "../../../../utils/color";
import { usePalette } from 'react-palette'
import React, { FC } from "react";

const ItemContainer = styled.div<{ width: string, height: string, darkMuted: string, darkVibrant: string, lightMuted: string, lightVibrant: string, muted: string, vibrant: string }>`
width: ${props => props.width ?? "250px"};
height: ${props => props.height ?? "345px"};
flex-shrink:0;
border-radius: 4px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
/* background: linear-gradient(#fac66a 0%, #d6436c 44.99%, #9a529b 84.81%, #5b6cb2 100%); */
background:  linear-gradient(#fff 8%, ${props => props.lightVibrant} 23.31%, #fff 30.85%, #fff 42.85%, ${props => props.lightMuted} 50.23%, ${props => props.lightMuted} 55.23%,#fff 64%, #fff 92%);
/* background:  linear-gradient(#fff 15%, ${props => props.lightMuted} 27.31%, #fff 38.85%, ${props => props.lightVibrant} 56.29%, ${props => props.lightVibrant} 63.61%, ${props => props.lightVibrant} 69.23%, #fff 100%); */
cursor: pointer;
:not(:first-child){
    margin-left: 10px;
}
:last-child{
    padding-right: 150px;
}
:hover img{
    transform: scale(1.1);
}
:hover .infoContainer{
    height: 70px;
}
:hover .showMoreText{
    opacity: 1;
    transform: translate(0,0px);
}
`
const StyledImage = styled.img`
object-fit: contain;
width: 80%;
transform: scale(1);
transition: all 0.5s;
padding-bottom:40px;
`
const InfoContainer = styled.div`
position: absolute;
display: flex;
flex-direction: column;
height: 49px;
overflow: hidden;
right: 0;
left: 0;
bottom: 0;
background-color:rgba(0 ,0 ,0, 0.4);
padding: 5px;
z-index: 1;
transition: all 0.5s;
`
const TitleText = styled.text`
font-size: 14px;
font-weight: 700;
color: ${AppColors.WHITE};
font-family: var(--header-font);
`
const InfoText = styled.text`
font-size: 14px;
font-weight: 400;
color: ${AppColors.WHITE};
margin: 5px 0;
`
const ShowMoreText = styled.text`
font-size: 14px;
font-weight: 700;
color: ${AppColors.WHITE};
opacity: 0;
transform: translate(0,20px);
transition: all 0.5s;
`

interface ListItemProps {
    width?: string
    height?: string
}

const ListItem: FC<ListItemProps> = (props) => {
    const { data, loading, error } = usePalette(Woman1)

    return (
        <ItemContainer
            darkMuted={data.darkMuted}
            darkVibrant={data.darkVibrant}
            lightMuted={data.lightMuted}
            lightVibrant={data.lightVibrant}
            muted={data.muted}
            vibrant={data.vibrant}
            width={props.width}
            height={props.height}
        >
            <StyledImage src={Woman1} />
            <InfoContainer
                className={"infoContainer"}
            >
                <TitleText>
                    YARISMA 1
                </TitleText>
                <InfoText>
                    Hayat??n?? degistir
                </InfoText>
                <ShowMoreText
                    className={"showMoreText"}
                >
                    Daha Fazlas??
                </ShowMoreText>
            </InfoContainer>
        </ItemContainer>
    )
}

export default ListItem