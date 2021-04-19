import React from "react"
import styled from "styled-components"
import AppColors from "../../../utils/color"
import ContestsInCart from "./contests_in_cart"
import PaymentSummary from "./payment_summary"

const MainDiv = styled.div`
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
padding-bottom: 15vh;
`
const CenterDiv = styled.div`
max-width: 1602px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
align-self: center;
margin-top: 20px;
`
const ImageContainer = styled.div`
background-color:${AppColors.GREY30};
display:flex;
justify-content: center;
align-items: center;
width: 100vw;
max-height: 345px;
padding: 20px 0;
`
const TopImage = styled.img`
width: 100%;
max-height: 315px;
object-fit: contain;
`

const CheckOutPageMain = () => {
    return (
        <MainDiv>
            <ImageContainer>
                <TopImage src={"https://firebasestorage.googleapis.com/v0/b/beautyfashionfactory-a55d1.appspot.com/o/crown_image.png?alt=media&token=bede7e9e-51a4-4170-b1fc-2d6a9d7206fd"} />
            </ImageContainer>
            <CenterDiv>
                <ContestsInCart />
                <PaymentSummary />
            </CenterDiv>
        </MainDiv>
    )
}

export default CheckOutPageMain