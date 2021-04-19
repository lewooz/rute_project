import { observer } from "mobx-react-lite"
import React from "react"
import styled from "styled-components"
import FieldStatus from "../../../enums/field_status"
import { useStores } from "../../../hooks/use_stores"
import ApplicationArrays from "../../../utils/application_arrays"
import AppColors from "../../../utils/color"
import CustomDropdown from "../../components/custom_dropdown"
import CustomTextfield from "../../components/custom_textfield"
import NeumorphicButton from "../../components/neumorphic_button"
import NeumorphicCheckbox from "../../components/neumorphic_checkbox"
import SizedBox from "../../components/sizedbox"

const FormRow = styled.div<{ marginTop?: string }>`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-top: ${props => props.marginTop ?? "20px"};
`


const PersonalInformationForm = observer(() => {
    const { applicationFormStore } = useStores()
    const userPersonalInfoModel = applicationFormStore.applyingUser.personalInfo
    const userPersonalInfoStatus = applicationFormStore.personalInfoStatus

    const buildFirstRow = () => {
        return (
            <FormRow
                marginTop={"50px"}
            >
                <CustomTextfield
                    width={"29%"}
                    title={"Boy *"}
                    placeholder={"178"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("length", value)}
                    value={userPersonalInfoModel.length}
                    endText={"cm"}
                    type={"number"}
                    status={userPersonalInfoStatus.lengthValid}
                />
                <CustomTextfield
                    width={"29%"}
                    title={"Kilo *"}
                    placeholder={"50"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("weight", value)}
                    value={userPersonalInfoModel.weight}
                    endText={"KG"}
                    type={"number"}
                    status={userPersonalInfoStatus.weightValid}
                />
                <CustomTextfield
                    width={"29%"}
                    title={"Göğüs *"}
                    placeholder={"50"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("chest", value)}
                    value={userPersonalInfoModel.chest}
                    endText={"cm"}
                    type={"number"}
                    status={userPersonalInfoStatus.chestValid}
                />
            </FormRow>
        )
    }
    const buildSecondRow = () => {
        return (
            <FormRow>
                <CustomTextfield
                    width={"29%"}
                    title={"Bel *"}
                    placeholder={"50"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("waist", value)}
                    value={userPersonalInfoModel.waist}
                    endText={"cm"}
                    type={"number"}
                    status={userPersonalInfoStatus.waistValid}
                />
                <CustomTextfield
                    width={"29%"}
                    title={"Kalça *"}
                    placeholder={"70"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("hip", value)}
                    value={userPersonalInfoModel.hip}
                    endText={"cm"}
                    type={"number"}
                    status={userPersonalInfoStatus.hipValid}
                />
                <CustomTextfield
                    width={"29%"}
                    title={"Beden *"}
                    placeholder={"40"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("body", value)}
                    value={userPersonalInfoModel.body}
                    type={"number"}
                    status={userPersonalInfoStatus.bodyValid}
                />
            </FormRow>
        )
    }

    const buildThirdRow = () => {
        return (
            <FormRow>
                <CustomTextfield
                    width={"29%"}
                    title={"Ayakkabı Numarası *"}
                    placeholder={"35"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("shoeNumber", value)}
                    value={userPersonalInfoModel.shoeNumber}
                    type={"number"}
                    status={userPersonalInfoStatus.shoeNumberValid}
                />
            </FormRow>
        )
    }

    const buildFourthRow = () => {
        return (
            <FormRow>
                <CustomDropdown
                    width={"40%"}
                    title={"Saç Rengi *"}
                    placeholder={"Renk Seçiniz"}
                    options={ApplicationArrays.HAIR_COLOR_ARRAY}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("hairColor", value)}
                    value={userPersonalInfoModel.hairColor}
                    status={applicationFormStore.isOtherHairColorSelected ? FieldStatus.IDLE : userPersonalInfoStatus.hairColorValid}
                    isDropdownDisabled={applicationFormStore.isOtherHairColorSelected}
                />
                <NeumorphicCheckbox
                    isSelected={applicationFormStore.isOtherHairColorSelected}
                    onChange={() => applicationFormStore.toggleOtherHairColor()}
                    backgroundColor={AppColors.LIGHT_PURPLE}
                    text={"Diğer"}
                />
                <CustomTextfield
                    width={"35%"}
                    title={"Diğer Saç Rengi *"}
                    placeholder={"Saç Renginiz"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("hairColor", value)}
                    value={userPersonalInfoModel.hairColor}
                    status={userPersonalInfoStatus.hairColorValid}
                    isVisible={applicationFormStore.isOtherHairColorSelected}
                />
            </FormRow>
        )
    }

    const buildFifthRow = () => {
        return (
            <FormRow>
                <CustomDropdown
                    width={"40%"}
                    title={"Göz Rengi *"}
                    placeholder={"Renk Seçiniz"}
                    options={ApplicationArrays.EYE_COLOR_ARRAY}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("eyeColor", value)}
                    value={userPersonalInfoModel.eyeColor}
                    status={applicationFormStore.isOtherEyeColorSelected ? FieldStatus.IDLE : userPersonalInfoStatus.eyeColorValid}
                    isDropdownDisabled={applicationFormStore.isOtherEyeColorSelected}
                />
                <NeumorphicCheckbox
                    isSelected={applicationFormStore.isOtherEyeColorSelected}
                    onChange={() => applicationFormStore.toggleOtherEyeColor()}
                    backgroundColor={AppColors.LIGHT_PURPLE}
                    text={"Diğer"}
                />
                <CustomTextfield
                    width={"35%"}
                    title={"Diğer Göz Rengi *"}
                    placeholder={"Göz Renginiz"}
                    onChange={(value: string) => applicationFormStore.editUserPersonalInfoModel("eyeColor", value)}
                    value={userPersonalInfoModel.eyeColor}
                    status={userPersonalInfoStatus.eyeColorValid}
                    isVisible={applicationFormStore.isOtherEyeColorSelected}
                />
            </FormRow>
        )
    }

    return (
        <>
            {buildFirstRow()}
            {buildSecondRow()}
            {buildThirdRow()}
            {buildFourthRow()}
            {buildFifthRow()}
            <SizedBox
                height="30px"
            />
            <NeumorphicButton
                text="İLERLE"
                disabled={!applicationFormStore.isPersonalInfoValid}
                onPressed={() => applicationFormStore.onQuestionsClick()}
            />
        </>
    )
})

export default PersonalInformationForm