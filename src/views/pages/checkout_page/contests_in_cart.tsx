import { observer } from "mobx-react-lite"
import React from "react"
import styled from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import ContestRow from "./contest_row"

const MainDiv = styled.div`
flex:3;
display: flex;
flex-direction: column;
align-items: flex-start;
height: auto;
width: 100%;
`
const Title = styled.text`
font: ${props => props.theme.h6};
color: ${AppColors.GREY70};
`
const ContestsContainer = styled.div`
width: 100%;
height: 100%;
display: grid;
background-color: ${AppColors.WHITE};
grid-auto-rows: min-content;
border: 1px solid ${AppColors.GREY40};
margin-top: 20px;
grid-template-columns: minmax(15%, 200px)  5fr 2fr;
grid-gap: 1rem;
`
const ApplicationsOpenContainer = styled.div`
padding: 1rem 1.5rem;
background-color: #f2f3f5;
grid-column: 1 / span 3;
text-align: start;
font: ${props => props.theme.subtitle2};
color: ${AppColors.GREY70};
`
const EmptySpan = styled.div`
`
const TitleSpan = styled.div<{ textAlign?: string, padding?: string }>`
font: ${props => props.theme.body1};
color: ${AppColors.GREY70};
text-align: ${props => props.textAlign ?? "start"};
padding: ${props => props.padding ?? "0"};
`
const Divider = styled.div`
height: 1px;
grid-column: 1 / span 3;
background-color: ${AppColors.GREY40};
`

const ContestsInCart = observer(() => {
    const { applicationFormStore } = useStores()

    const renderTitles = () => {
        return (
            <>
                <EmptySpan />
                <TitleSpan>
                    Yarışma Adı
                </TitleSpan>
                <TitleSpan
                    textAlign={"end"}
                    padding={"0 1.5rem 0 0"}
                >
                    Ücret
                </TitleSpan>
            </>
        )
    }

    return (
        <MainDiv>
            <Title>
                Katılmak İstediğim Yarışmalar
            </Title>
            <ContestsContainer>
                <ApplicationsOpenContainer>
                    Başvurular Açık
                </ApplicationsOpenContainer>
                {renderTitles()}
                <Divider />
                {
                    applicationFormStore.appliedContests.map(contest =>
                        <ContestRow
                            contestModel={contest}
                        />
                    )
                }
            </ContestsContainer>
        </MainDiv>
    )
})

export default ContestsInCart