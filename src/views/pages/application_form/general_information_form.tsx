import { observer } from "mobx-react-lite"
import React from "react"
import styled from "styled-components"
import getArray from "../../../functions/get_array"
import useCountries from "../../../hooks/use_countries"
import { useStores } from "../../../hooks/use_stores"
import ApplicationArrays from "../../../utils/application_arrays"
import AppColors from "../../../utils/color"
import CustomDropdown from "../../components/custom_dropdown"
import CustomTextfield from "../../components/custom_textfield"
import NeumorphicButton from "../../components/neumorphic_button"
import SizedBox from "../../components/sizedbox"

const FormRow = styled.div<{ marginTop?: string }>`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: ${props => props.marginTop ?? "20px"};
`
const InputColumn = styled.div`
width: 48%;
display: flex;
flex-direction: column;
`
const BirthDateRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 10px;
`
const InputTitle = styled.text`
font:${props => props.theme.subtitle1};
color:${AppColors.WHITE};
`
const GeneralInformationForm = observer(() => {
    const { applicationFormStore } = useStores()
    const countries = useCountries()
    const userGeneralInfoModel = applicationFormStore.applyingUser.generalInfo
    const userGeneralInfoStatus = applicationFormStore.generalInfoStatus
    const buildFirstRow = () => {
        return (
            <FormRow
                marginTop={"50px"}
            >
                <CustomTextfield
                    width={"48%"}
                    title={"Ad *"}
                    placeholder={"Ad"}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("name", value)}
                    value={userGeneralInfoModel.name}
                    status={userGeneralInfoStatus.nameValid}
                />
                <CustomTextfield
                    width={"48%"}
                    title={"Soyad *"}
                    placeholder={"Soyad"}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("surname", value)}
                    value={userGeneralInfoModel.surname}
                    status={userGeneralInfoStatus.surnameValid}
                />
            </FormRow>
        )
    }
    const buildSecondRow = () => {
        return (
            <FormRow>
                <CustomTextfield
                    width={"48%"}
                    title={"Rumuz *"}
                    placeholder={"Rumuz"}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("nickName", value)}
                    value={userGeneralInfoModel.nickName}
                    status={userGeneralInfoStatus.nickNameValid}
                />
            </FormRow>
        )
    }
    const buildThirdRow = () => {
        return (
            <FormRow>
                <CustomDropdown
                    title={"Ülke *"}
                    placeholder={"Ülke Seçiniz"}
                    options={countries}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("country", value)}
                    value={userGeneralInfoModel.country}
                    status={userGeneralInfoStatus.countryValid}
                />
                <CustomTextfield
                    width={"48%"}
                    title={"Şehir *"}
                    placeholder={"Şehir"}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("city", value)}
                    value={userGeneralInfoModel.city}
                    status={userGeneralInfoStatus.cityValid}
                />
            </FormRow>
        )
    }
    const buildFourthRow = () => {
        return (
            <FormRow>
                <InputColumn>
                    <InputTitle>
                        Doğum Tarihiniz *
                    </InputTitle>
                    <BirthDateRow>
                        <CustomDropdown
                            flex={"1"}
                            placeholder={"G"}
                            options={getArray(1, 31)}
                            onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("birthDay", value)}
                            value={userGeneralInfoModel.birthDay}
                            status={userGeneralInfoStatus.birthDayValid}
                        />
                        <CustomDropdown
                            flex={"1"}
                            placeholder={"Ay"}
                            options={getArray(1, 12)}
                            margin={"0 0 0 10px"}
                            onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("birthMonth", value)}
                            value={userGeneralInfoModel.birthMonth}
                            status={userGeneralInfoStatus.birthMonthValid}
                        />
                        <CustomDropdown
                            flex={"2"}
                            placeholder={"Yıl"}
                            options={getArray(1950, 2021)}
                            margin={"0 0 0 10px"}
                            onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("birthYear", value)}
                            value={userGeneralInfoModel.birthYear}
                            status={userGeneralInfoStatus.birthYearValid}
                        />
                    </BirthDateRow>
                </InputColumn>
            </FormRow>
        )
    }
    const buildFifthRow = () => {
        return (
            <FormRow>
                <CustomDropdown
                    title={"Eğitim *"}
                    placeholder={"Eğitim Durumunuz"}
                    options={ApplicationArrays.EDUCATION_TYPE_ARRAY}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("education", value)}
                    value={userGeneralInfoModel.education}
                    status={userGeneralInfoStatus.educationValid}
                />
                <CustomTextfield
                    width={"48%"}
                    title={"Meslek *"}
                    placeholder={"Meslek"}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("job", value)}
                    value={userGeneralInfoModel.job}
                    status={userGeneralInfoStatus.jobValid}
                />
            </FormRow>
        )
    }
    const buildSixthRow = () => {
        return (
            <FormRow>
                <CustomDropdown
                    title={"Medeni Durumunuz *"}
                    placeholder={"Medeni Durumunuz"}
                    options={ApplicationArrays.MARITAL_STATUS_ARRAY}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("maritalStatus", value)}
                    value={userGeneralInfoModel.maritalStatus}
                    status={userGeneralInfoStatus.maritalStatusValid}
                />
                <CustomTextfield
                    width={"48%"}
                    title={"Hobiler *"}
                    placeholder={"Hobiler"}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("hobbies", value)}
                    value={userGeneralInfoModel.hobbies}
                    status={userGeneralInfoStatus.hobbiesValid}
                />
            </FormRow>
        )
    }
    const buildSeventhRow = () => {
        return (
            <FormRow>
                <CustomTextfield
                    width={"48%"}
                    title={"Mobil Telefon *"}
                    placeholder={"05.."}
                    type={"number"}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("phoneNumber", value)}
                    value={userGeneralInfoModel.phoneNumber}
                    status={userGeneralInfoStatus.phoneNumberValid}
                />
                <CustomTextfield
                    width={"48%"}
                    title={"E-Mail *"}
                    placeholder={"E-Mail"}
                    type={"email"}
                    onChange={(value: string) => applicationFormStore.editUserGeneralInfoModel("mail", value)}
                    value={userGeneralInfoModel.mail}
                    status={userGeneralInfoStatus.mailValid}
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
            {buildSixthRow()}
            {buildSeventhRow()}
            <SizedBox
                height="30px"
            />
            <NeumorphicButton
                text="İLERLE"
                disabled={!applicationFormStore.isGeneralInfoValid}
                onPressed={() => applicationFormStore.onPersonalInfoClick()}
            />
        </>
    )
})

export default GeneralInformationForm