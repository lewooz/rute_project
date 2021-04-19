import { observer } from "mobx-react-lite"
import styled from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import CustomButton from "../../components/custom_button"
import SizedBox from "../../components/sizedbox"
import PaypalLogo from "../../../assets/svg/paypal_logo.svg"

const MainDiv = styled.div`
flex:1;
margin-left: 1.5rem;
height: -webkit-fill-available;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Title = styled.text`
font: ${props => props.theme.h6};
color: ${AppColors.GREY70};
`
const Divider = styled.div<{ marginTop?: string }>`
width: 100%;
height: 1px;
background-color: ${AppColors.GREY40};
margin-top: ${props => props.marginTop ?? "20px"};
`
const PaymentRow = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const RowText = styled.div`
font: ${props => props.theme.body2};
color: ${AppColors.GREY70};
`
const OrRow = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`
const OrText = styled.text`
font:${props => props.theme.subtitle2};
color:${AppColors.GREY70};
padding: 0 10px;
`
const ExtraInfoText = styled.div`
font:${props => props.theme.subtitle2};
color:${AppColors.GREY70};
width: 100%;
text-align: center;
margin-top: 10px;
`
const ExtraPaymentContainer = styled.div`
width: 100%;
height: 50px;
border: 1px solid ${AppColors.SUCCESS};
margin-top: 20px;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
const StyledLogo = styled.img`
width: 100px;
`
const PaymentSummary = observer(() => {
    const { applicationFormStore } = useStores()

    const renderPaymentRow = (title: string, price: number) => {
        return (
            <PaymentRow>
                <RowText>
                    {title}
                </RowText>
                <RowText>
                    {price}₺
                </RowText>
            </PaymentRow>
        )
    }

    return (
        <MainDiv>
            <Title>
                Ödeme Özeti
            </Title>
            <Divider />
            {
                applicationFormStore.appliedContests.map(contest =>
                    renderPaymentRow(contest.contestName, contest.contestEntryPrice)
                )
            }
            <Divider />
            {renderPaymentRow("Ek vergiler", 0)}
            <Divider />
            {renderPaymentRow("TOPLAM", applicationFormStore.getTotalPrice())}
            <SizedBox
                height="20px"
            />
            <CustomButton
                width="100%"
                height="50px"
                backgroundColor={AppColors.SUCCESS}
                textColor={AppColors.WHITE}
                borderRadius={"0"}
                text="ÖDEME YAP"
            />
            <OrRow>
                <Divider
                    marginTop={"0"}
                />
                <OrText>VEYA</OrText>
                <Divider
                    marginTop={"0"}
                />
            </OrRow>
            <ExtraInfoText>
                Dilerseniz aşağıdaki yöntemle de ödeme yapabilirsiniz.
            </ExtraInfoText>
            <ExtraPaymentContainer>
                <StyledLogo
                    src={PaypalLogo}
                />
            </ExtraPaymentContainer>
        </MainDiv>
    )
})

export default PaymentSummary