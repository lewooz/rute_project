import React from "react"
import { observer } from "mobx-react-lite"
import SizedBox from "../../components/sizedbox"
import { useStores } from "../../../hooks/use_stores"
import LottiePlayer from "../../components/lottie_player"
import LottieTypes from "../../../enums/lottie_types"
import styled from "styled-components"
import AppColors from "../../../utils/color"
import ProgressIndicator from "../../components/progress_indicator"
import NeumorphicButton from "../../components/neumorphic_button"

const InfoText = styled.div`
font: ${props => props.theme.h6};
color: ${AppColors.WHITE};
`
const ButtonsRow = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
`

const AfterSubmitForm = observer(() => {
    const { applicationFormStore } = useStores()

    return (
        ///Kullanıcı resetlendiyse network işlemi bitmiştir.
        applicationFormStore.applyingUser.contestIds.length === 0 ?
            <>
                <LottiePlayer
                    lottieType={LottieTypes.SUCCESS}
                    width={300}
                    height={300}
                />
                <SizedBox
                    height="20px"
                />
                <InfoText>
                    Başvurunuz bize ulaşmıştır. Teşekkür Ederiz.
                </InfoText>
                <ButtonsRow>
                    <NeumorphicButton
                        text="Forma Geri Dön"
                        onPressed={() => applicationFormStore.setFormSubmitStatus(false)}
                    />
                    <SizedBox
                        width="30px"
                    />
                    <NeumorphicButton
                        text="Ödemeye İlerle"
                        onPressed={() => { }}
                    />
                </ButtonsRow>
            </>
            :
            <>
                <ProgressIndicator
                    color={AppColors.WHITE}
                    size={300}
                />
                <SizedBox
                    height="40px"
                />
                <InfoText>
                    Başvurunuz Bize Ulaştırılıyor...
                    </InfoText>
            </>
    )
})

export default AfterSubmitForm


