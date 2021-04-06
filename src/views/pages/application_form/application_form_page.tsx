import { observer } from "mobx-react-lite"
import styled from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import ApplicationStrings from "../../../utils/application_strings"
import AppColors from "../../../utils/color"
import FormMain from "./form_main"
import NominationRequirements from "./nomination_requirements"

const MainDiv = styled.div`
width: 100vw;
height:auto;
background-color: ${AppColors.WHITE_BG};
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 15vh;
`

const TopImage = styled.img`
width: 100%;
min-height: 345px;
object-fit: cover;
`

const ApplicationFormPage = observer(() => {
    const { applicationFormStore } = useStores()
    return (
        <MainDiv>
            <TopImage src={ApplicationStrings.applicationFormTopImage} />
            <FormMain />
            {
                !applicationFormStore.formSubmitted &&
                <NominationRequirements />
            }

        </MainDiv>
    )

})

export default ApplicationFormPage