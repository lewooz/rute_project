import { observer } from "mobx-react-lite"
import styled from "styled-components"
import { useStores } from "../../../hooks/use_stores"
import AppColors from "../../../utils/color"
import NeumorphicButton from "../../components/neumorphic_button"
import NeumorphicCheckbox from "../../components/neumorphic_checkbox"
import SizedBox from "../../components/sizedbox"
import { FaUserCircle } from "react-icons/fa";
import FilePicker from "../../components/file_picker"
import ContestModel from "../../../models/contest_model"
import media from "../../../utils/custom_media"

const FormRow = styled.div<{ marginTop?: string, alignItems?: string }>`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: ${props => props.alignItems ?? "flex-end"};
margin-top: ${props => props.marginTop ?? "20px"};
`
const TitleText = styled.text<{ marginTop?: string }>`
font:${props => props.theme.subtitle1};
color:${AppColors.WHITE};
margin-top: ${props => props.marginTop ?? "60px"};
${media.phone}{
    font:${props => props.theme.subtitle2};
}
`
const NoteText = styled.text`
margin-top: 10px;
font:${props => props.theme.subtitle2};
color:${AppColors.GREY15};
`
const StyledImage = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
`

const QuestionsForm = observer(() => {
    const { applicationFormStore } = useStores()
    const userQuestionInfoModel = applicationFormStore.applyingUser.questionsInfo

    const onFilePick = async (files: Array<File>) => {
        await applicationFormStore.uploadUserProfilePhoto(files[0])
    }

    const buildFirstRow = () => {
        return (
            <>
                <TitleText>
                    Katılmak İstediğiniz Yarışma Kategorisi:
                </TitleText>
                <FormRow
                    marginTop={"20px"}
                >
                    {
                        applicationFormStore.currentAvailableContests.map((contestModel: ContestModel) =>
                            <NeumorphicCheckbox
                                isSelected={userQuestionInfoModel.contests.findIndex(contest => contest.contestId === contestModel.contestId) === -1 ? false : true}
                                onChange={() => applicationFormStore.editQuestionsModel("contests", contestModel)}
                                backgroundColor={AppColors.LIGHT_PURPLE}
                                text={contestModel.contestName}
                            />
                        )
                    }
                </FormRow>
                <NoteText>
                    Not: Birden fazla kategoride yarışmaya katılabilirsiniz.
                </NoteText>
            </>
        )
    }

    const buildSecondRow = () => {
        return (
            <>
                <TitleText
                    marginTop={"30px"}
                >
                    Daha önce bir yarışmaya katıldınız mı?
                </TitleText>
                <FormRow
                    marginTop={"20px"}
                >
                    <NeumorphicCheckbox
                        isSelected={userQuestionInfoModel.joinedAnotherContestBefore}
                        onChange={() => applicationFormStore.editQuestionsModel("joinedAnotherContestBefore", true)}
                        backgroundColor={AppColors.LIGHT_PURPLE}
                        text={"EVET KATILDIM"}
                    />
                    <NeumorphicCheckbox
                        isSelected={!userQuestionInfoModel.joinedAnotherContestBefore}
                        onChange={() => applicationFormStore.editQuestionsModel("joinedAnotherContestBefore", false)}
                        backgroundColor={AppColors.LIGHT_PURPLE}
                        text={"HAYIR KATILMADIM"}
                    />
                </FormRow>
            </>
        )
    }
    const buildThirdRow = () => {
        return (
            <>
                <TitleText
                    marginTop={"30px"}
                >
                    Daha önce modellik yaptınız mı?
            </TitleText>
                <FormRow
                    marginTop={"20px"}
                >
                    <NeumorphicCheckbox
                        isSelected={userQuestionInfoModel.didModelingBefore}
                        onChange={() => applicationFormStore.editQuestionsModel("didModelingBefore", true)}
                        backgroundColor={AppColors.LIGHT_PURPLE}
                        text={"EVET YAPTIM"}
                    />
                    <NeumorphicCheckbox
                        isSelected={!userQuestionInfoModel.didModelingBefore}
                        onChange={() => applicationFormStore.editQuestionsModel("didModelingBefore", false)}
                        backgroundColor={AppColors.LIGHT_PURPLE}
                        text={"HAYIR YAPMADIM"}
                    />
                </FormRow>
            </>
        )
    }
    const buildFourthRow = () => {
        return (
            <>
                <TitleText
                    marginTop={"30px"}
                >
                    Bağlı bulunduğunuz bir ajans var mı?
            </TitleText>
                <FormRow
                    marginTop={"20px"}
                >
                    <NeumorphicCheckbox
                        isSelected={userQuestionInfoModel.connectedToAnAgent}
                        onChange={() => applicationFormStore.editQuestionsModel("connectedToAnAgent", true)}
                        backgroundColor={AppColors.LIGHT_PURPLE}
                        text={"EVET VAR"}
                    />
                    <NeumorphicCheckbox
                        isSelected={!userQuestionInfoModel.connectedToAnAgent}
                        onChange={() => applicationFormStore.editQuestionsModel("connectedToAnAgent", false)}
                        backgroundColor={AppColors.LIGHT_PURPLE}
                        text={"HAYIR YOK"}
                    />
                </FormRow>
            </>
        )
    }
    const buildFifthRow = () => {
        return (
            <FormRow
                marginTop={"20px"}
                alignItems={"center"}
            >
                <TitleText
                    marginTop={"0"}
                >
                    Profil Fotoğrafı Seçiniz:
                </TitleText>
                <FilePicker
                    onFilePick={(files: Array<File>) => onFilePick(files)}
                    child={
                        userQuestionInfoModel.profilePhoto.length === 0 ?
                            <FaUserCircle
                                color={AppColors.WHITE}
                                size={100}
                            />
                            : <StyledImage src={userQuestionInfoModel.profilePhoto} />
                    }
                />
            </FormRow>
        )
    }

    const buildTermsAggreement = () => {
        return (
            <>
                <SizedBox
                    height="20px"
                />
                <NeumorphicCheckbox
                    isSelected={userQuestionInfoModel.isTermsAggreed}
                    onChange={() => applicationFormStore.editQuestionsModel("isTermsAggreed", !userQuestionInfoModel.isTermsAggreed)}
                    backgroundColor={AppColors.LIGHT_PURPLE}
                    text={"KULLANICI SÖZLEŞMESİNİ VE KATILIM KOŞULLARINI ONAYLIYORUM"}
                />
            </>
        )
    }

    return (
        <>
            {buildFirstRow()}
            {buildSecondRow()}
            {buildThirdRow()}
            {buildFourthRow()}
            {buildFifthRow()}
            {buildTermsAggreement()}
            <SizedBox
                height="30px"
            />
            <NeumorphicButton
                text="KAYIT OL"
                disabled={!applicationFormStore.isQuestionsValid}
                onPressed={() => applicationFormStore.sendApplication()}
            />
        </>
    )
})

export default QuestionsForm