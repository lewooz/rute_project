import { observer } from "mobx-react-lite"
import React from "react"
import styled from "styled-components"
import getArray from "../../../functions/get_array"
import getBody from "../../../functions/get_body"
import getKg from "../../../functions/get_kg"
import getYears from "../../../functions/get_years"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import FormConstants from "../../../utils/form_constants"
import CheckboxTile from "../../components/checkbox_tile"
import CustomButton from "../../components/custom_button"
import FormDropdown from "../../components/form_dropdown"
import FormInput from "../../components/form_input"
import FormTextarea from "../../components/form_textarea"
import SizedBox from "../../components/sizedbox"
import StraightLine from "../../components/straight_line"

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
margin-top: 20px;
`
const TitleColumn = styled.div`
width: auto;
display: block;
`
const FormTitle = styled.text`
font-size: 18px;
font-weight: 400;
color: ${AppColors.GREY70};
`
const FormRow = styled.div<{ marginTop: string, justifyContent?: string }>`
display: flex;
align-items: flex-end;
justify-content: ${props => props.justifyContent ?? "unset"};
margin-top: ${props => props.marginTop};
width: 100%;
`


const Form = observer(() => {
    const { applicationStore } = useStores()
    const [isTermsAggreed, setTermsAggreement] = React.useState(false)
    const model = applicationStore.applyingUser

    const onCheckboxClicked = () => {
        setTermsAggreement(isTermsAggreed ? false : true)
    }

    const renderTitle = (title: string) => {
        return (
            <TitleColumn>
                <FormTitle>
                    {title}
                </FormTitle>
                <StraightLine
                    width={"1px"}
                    length={"100%"}
                    isHorizontal
                    color={AppColors.GREY70}
                />
            </TitleColumn>
        )
    }

    return (
        <MainDiv>
            {renderTitle("GENEL BİLGİLER")}
            <FormRow
                marginTop={"20px"}
            >
                <FormDropdown
                    value={model.gender}
                    onChange={(value: string) => applicationStore.editUserModel("gender", value)}
                    optionList={["Bay", "Bayan"]}
                    title={"Cinsiyet"}
                />
                <SizedBox
                    width={"20px"}
                />
                <FormInput
                    label={"Adınız"}
                    value={model.name}
                    onChange={(value: string) => applicationStore.editUserModel("name", value)}
                    flex={"1"}
                />
                <SizedBox
                    width={"20px"}
                />
                <FormInput
                    label={"Soyadınız"}
                    value={model.surname}
                    onChange={(value: string) => applicationStore.editUserModel("surname", value)}
                    flex={"1"}
                />
            </FormRow>
            <FormRow
                marginTop={"20px"}
            >
                <FormDropdown
                    value={model.birthDay}
                    onChange={(value: string) => applicationStore.editUserModel("birthDay", value)}
                    optionList={FormConstants.day}
                    title={"Doğum Tarihi"}
                />
                <FormDropdown
                    value={model.birthMonth}
                    onChange={(value: string) => applicationStore.editUserModel("birthMonth", value)}
                    optionList={FormConstants.month}
                />
                <FormDropdown
                    value={model.birthYear}
                    onChange={(value: string) => applicationStore.editUserModel("birthYear", value)}
                    optionList={getYears(1925)}
                />
            </FormRow>
            <SizedBox
                height={"20px"}
            />
            {renderTitle("İLETİŞİM BİLGİLERİ")}
            <FormRow
                marginTop={"20px"}
            >
                <FormInput
                    value={model.mail}
                    onChange={(value: string) => applicationStore.editUserModel("mail", value)}
                    label={"E-mail"}
                    flex={"1"}
                />
                <SizedBox
                    width={"20px"}
                />
                <FormInput
                    value={model.phoneNumber}
                    onChange={(value: string) => applicationStore.editUserModel("phoneNumber", value)}
                    label={"5*****"}
                    flex={"1"}
                    prefix={"90"}
                />
            </FormRow>
            <FormRow
                marginTop={"20px"}
            >
                <FormDropdown
                    value={model.city}
                    onChange={(value: string) => applicationStore.editUserModel("city", value)}
                    optionList={FormConstants.cities}
                    title={"Şehir"}
                />
            </FormRow>
            <SizedBox
                height={"20px"}
            />
            {renderTitle("TİP ÖZELLİKLERİ")}
            <FormRow
                marginTop={"20px"}
            >
                <FormDropdown
                    value={model.weight}
                    onChange={(value: string) => applicationStore.editUserModel("weight", value)}
                    optionList={getKg()}
                    title={"Kilo"}
                    flex={"1"}
                />
                <SizedBox
                    width={"20px"}
                />
                <FormDropdown
                    value={model.body}
                    onChange={(value: string) => applicationStore.editUserModel("body", value)}
                    optionList={getBody()}
                    title={"Beden"}
                    flex={"1"}
                />
                <SizedBox
                    width={"20px"}
                />
                <FormDropdown
                    value={model.lengthInMeters}
                    onChange={(value: string) => applicationStore.editUserModel("lengthInMeters", value)}
                    optionList={getArray(0, 2)}
                    title={"Boy"}
                />
                <FormDropdown
                    value={model.lengthInCms}
                    onChange={(value: string) => applicationStore.editUserModel("lengthInCms", value)}
                    optionList={getArray(0, 99)}
                    flex={"1"}
                />
            </FormRow>
            <SizedBox
                height={"20px"}
            />
            {renderTitle("EK BİLGİLER")}
            <SizedBox
                height={"20px"}
            />
            <FormTextarea
                value={model.extraMessage}
                onChange={(value: string) => applicationStore.editUserModel("extraMessage", value)}
                placeholder={"Eklemek istedikleriniz"}
                width={"100%"}
            />
            <SizedBox
                height={"20px"}
            />
            <CheckboxTile
                isSelected={model.termsAggreed}
                text={`*Okudum ve kabul ediyorum: Hüküm ve koşullar ve gizlilik politikası`}
                onChange={() => applicationStore.editUserModel("termsAggreed", !model.termsAggreed)}
            />
            <SizedBox
                height={"20px"}
            />
            <FormRow
                marginTop={"20px"}
                justifyContent={"center"}
            >
                <CustomButton
                    height={"40px"}
                    width={"auto"}
                    borderRadius={"1.875rem"}
                    text={"Başvuru Yap"}
                    border={`1px solid ${AppColors.SUCCESS}`}
                    backgroundColor={AppColors.SUCCESS}
                    textColor={AppColors.WHITE}
                    hoverBackgroundColor={AppColors.WHITE}
                    hoverTextColor={AppColors.SUCCESS}
                />
            </FormRow>
        </MainDiv>
    )
})

export default Form