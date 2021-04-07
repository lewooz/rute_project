import { observer } from "mobx-react-lite"

import styled from "styled-components"
import FormSteps from "../../../enums/form_steps"

import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import media from "../../../utils/custom_media"

import FormStepper from "./form_stepper"
import GeneralInformationForm from "./general_information_form"
import PersonalInformationForm from "./personal_information_form"
import QuestionsForm from "./questions_form"
import AfterSubmitForm from "./after_submit_form"

const MainDiv = styled.div`
max-width: 980px;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 40px;
`
const HowToApplyText = styled.text`
font:${props => props.theme.h4};
font-weight: 500;
color:${AppColors.GREY70};
letter-spacing: ${props => props.theme.titleLetterSpacing};
white-space: break-spaces;
`
const ApplyInfoText = styled.text`
font:${props => props.theme.subtitle1};
color:${AppColors.GREY70};
margin-top: 30px;
`
const FormContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background: ${AppColors.PURPLE_GRADIENT};
margin-top: 30px;
padding: 30px 80px 60px 80px;
border-radius: 4px;
${media.phone}{
    padding: 30px 0 30px 0;
}
`

const FormMain = observer(() => {
    const { applicationFormStore } = useStores()

    const renderFormContent = () => {
        switch (applicationFormStore.currentFormStep) {
            case FormSteps.GENERAL_INFO:
                return (
                    <GeneralInformationForm />
                )
            case FormSteps.PERSONAL_INFO:
                return (
                    <PersonalInformationForm />
                )
            case FormSteps.QUESTIONS:
                return (
                    <QuestionsForm />
                )
            default:
                break;
        }
    }


    return (
        <MainDiv>
            <HowToApplyText>
                {`MISS GLOBE/UNIVERSTY/IKON\n`}
                BAŞVURU FORMU
            </HowToApplyText>
            <ApplyInfoText>
                Aşağıdaki üç adımdan oluşan formu lütfen eksiksiz bir şekilde doldurun.
            </ApplyInfoText>
            <FormContainer>
                {
                    applicationFormStore.formSubmitted ?
                        <AfterSubmitForm />
                        :
                        <>
                            <FormStepper />
                            {renderFormContent()}
                        </>
                }

            </FormContainer>
        </MainDiv>
    )

})

export default FormMain