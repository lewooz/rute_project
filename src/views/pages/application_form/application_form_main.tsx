import styled from "styled-components"
import AppColors from "../../../utils/color"
import SizedBox from "../../components/sizedbox"
import StraightLine from "../../components/straight_line"
import Form from "./form"

const MainDiv = styled.div`
width: 100vw;
height: 100vh;
background-color: ${AppColors.WHITE_BG};
display: flex;
flex-direction: column;
align-items: center;
overflow-x: hidden;
padding-top: 80px;
`
const TopRow = styled.div`
display: flex;
align-items: flex-end;
flex-direction: row;
`
const TitleCenterContainer = styled.div`
width: 100%;
max-width: 650px;
background-color: white;
box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.16);
border-radius: 12px;
height: auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;
`
const TitleLightText = styled.text`
font-size: 20px;
font-weight: 400;
font-family: var(--header-font);
color: ${AppColors.GREY70};
padding: 0 28px;
letter-spacing: 0.2em;
`
const TitleBoldText = styled.text`
font-size: 40px;
font-weight: 700;
font-family: var(--header-font);
color: ${AppColors.GREY70};
letter-spacing: 0.1em;
`
const InfoText = styled.text`
font-size: 14px;
color: ${AppColors.GREY70};
font-weight: 400;
font-family: var(--header-font);
margin-top: 10px;
`

const ApplicationFormMain = () => {
    return (
        <MainDiv>
            <TitleCenterContainer>
                <TopRow>
                    <StraightLine
                        width={"1px"}
                        length={"55px"}
                        isHorizontal
                        color={AppColors.GREY70}
                    />
                    <TitleLightText>
                        BAŞVURU
                    </TitleLightText>
                    <StraightLine
                        width={"1px"}
                        length={"55px"}
                        isHorizontal
                        color={AppColors.GREY70}
                    />
                </TopRow>
                <TitleBoldText>
                    BAŞVURU FORMU
                    </TitleBoldText>
                <StraightLine
                    width={"1px"}
                    length={"60%"}
                    isHorizontal
                    color={AppColors.GREY70}
                    margin={"10px 0 0 0"}
                />
                <InfoText>
                    Aşağıdaki bilgileri doldurarak başvuru yapabilirsiniz.
                    </InfoText>
                <Form />
            </TitleCenterContainer>
        </MainDiv>
    )

}

export default ApplicationFormMain