import { observer } from "mobx-react-lite"
import styled from "styled-components"
import FormSteps from "../../../enums/form_steps"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import Circle from "../../components/circle"
import StraightLine from "../../components/straight_line"
import { FaCheck } from "react-icons/fa";

const MainDiv = styled.div`
width: 100%;
display: flex;
align-items: center;
`

const CircleText = styled.div<{ color: string }>`
flex:1;
display: flex;
justify-content: center;
align-items: center;
font:${props => props.theme.body1};
color:${props => props.color};
`

const FormStepper = observer(() => {
    const { applicationFormStore } = useStores()

    const renderCircle = (text: string, title: string, isValid: boolean, isActive: boolean, onClick?: Function) => {
        return (
            <Circle
                width="35px"
                height="35px"
                borderWidth="1px"
                borderColor={"transparent"}
                titleColor={isActive ? AppColors.GOLD : isValid ? AppColors.SUCCESS : AppColors.WHITE}
                backgroundColor={isActive ? AppColors.GOLD : isValid ? AppColors.SUCCESS : AppColors.WHITE}
                cursor={"pointer"}
                title={title}
                onClick={() => onClick()}
                child={<CircleText
                    color={(isActive || isValid) ? AppColors.WHITE : AppColors.GREY70}
                >
                    {
                        isValid ? <FaCheck size={15} color={AppColors.WHITE} /> : text
                    }
                </CircleText>}
            />
        )
    }
    const renderLine = () => {
        return (
            <StraightLine
                isHorizontal
                flex="1"
                width={"2px"}
                color={(applicationFormStore.isGeneralInfoValid && applicationFormStore.isQuestionsValid && applicationFormStore.isPersonalInfoValid) ? AppColors.SUCCESS : AppColors.WHITE}
            />
        )
    }

    return (
        <MainDiv>
            {renderCircle("1", "Genel Bilgiler", applicationFormStore.isGeneralInfoValid, applicationFormStore.currentFormStep === FormSteps.GENERAL_INFO ? true : false, () => applicationFormStore.onGeneralInfoClick())}
            {renderLine()}
            {renderCircle("2", "Kişisel Özellikler", applicationFormStore.isPersonalInfoValid, applicationFormStore.currentFormStep === FormSteps.PERSONAL_INFO ? true : false, () => applicationFormStore.onPersonalInfoClick())}
            {renderLine()}
            {renderCircle("3", "Sorular", applicationFormStore.isQuestionsValid, applicationFormStore.currentFormStep === FormSteps.QUESTIONS ? true : false, () => applicationFormStore.onQuestionsClick())}
        </MainDiv>
    )
})

export default FormStepper