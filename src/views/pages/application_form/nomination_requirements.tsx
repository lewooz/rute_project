import styled, { css } from "styled-components"
import ApplicationStrings from "../../../utils/application_strings"
import AppColors from "../../../utils/color"

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 40px;
max-width: 980px;
width: 100%;
`
const HeaderText = styled.div`
font:${props => props.theme.h4};
font-weight: 500;
color:${AppColors.GREY70};
letter-spacing: ${props => props.theme.titleLetterSpacing};
white-space: break-spaces;
`
const BigFontSizeParagraph = styled.p`
font:${props => props.theme.body1};
color:${AppColors.GREY70};
white-space: break-spaces;
margin-top: 20px;
`
const SmallFontSizeParagraph = styled.p`
font:${props => props.theme.body2};
color:${AppColors.GREY70};
white-space: break-spaces;
margin-top: 20px;
`
const SmallHeader = styled.div`
font:${props => props.theme.h6};
color:${AppColors.GREY70};
letter-spacing: ${props => props.theme.titleLetterSpacing};
white-space: break-spaces;
margin-top: 20px;
`
const NumberText = styled.span`
font:${props => props.theme.subtitle2};
font-weight:600;
color:${AppColors.GREY70};
`
const SmallHeaderTwo = styled.div`
font:${props => props.theme.h6};
color:${AppColors.GREY70};
margin-top: 20px;
`

const NominationRequirements = () => {
    const participationRulesCount = 8
    const agreementRulesCount = 8
    const userRulesCount = 8

    const buildRuleListElement = (rule: string, no: string) => {
        return (
            <SmallFontSizeParagraph>
                <NumberText>{no}.</NumberText>
                {rule}
            </SmallFontSizeParagraph>
        )
    }

    return (
        <MainDiv>
            <HeaderText>
                BAŞVURU VE ADAYLIK ŞARTLARI
            </HeaderText>
            <BigFontSizeParagraph>
                {ApplicationStrings.nominationFirstParagraph}
            </BigFontSizeParagraph>
            <SmallFontSizeParagraph>
                {ApplicationStrings.nominationSecondParagraph}
            </SmallFontSizeParagraph>
            <SmallHeader>
                KATILIM KOŞULLARI
            </SmallHeader>
            {
                [...Array(participationRulesCount)].map((e, i) =>
                    buildRuleListElement(ApplicationStrings[`nominationRule${i + 1}`], (i + 1).toString())
                )
            }
            <SmallHeader>
                KATILIM SÖZLEŞMESİ
            </SmallHeader>
            {
                [...Array(agreementRulesCount)].map((e, i) =>
                    buildRuleListElement(ApplicationStrings[`nominationRule${i + 9}`], (i + 9).toString())
                )
            }
            <SmallHeaderTwo>
                {`${participationRulesCount + agreementRulesCount + 1}. Katılımcı;`}
            </SmallHeaderTwo>
            {
                [...Array(userRulesCount)].map((e, i) =>
                    buildRuleListElement(ApplicationStrings[`userRule${i + 1}`], `${participationRulesCount + agreementRulesCount + 1}.${i + 1}`)
                )
            }
        </MainDiv>
    )
}

export default NominationRequirements