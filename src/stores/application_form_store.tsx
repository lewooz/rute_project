import { makeAutoObservable } from "mobx";
import FormSteps from "../enums/form_steps";
import FieldStatus from "../enums/field_status";
import UserGeneralInfoStatus from "../models/user/general_info_status";
import UserModel from "../models/user/user_model";
import RegexRules from "../utils/regex_rules";
import { RootStore } from "./root_store/root_store";
import UserPersonalInfoStatus from "../models/user/personal_info_status";
import FileServices from "../services/file_services";
import UserServices from "../services/user_services";

const fileServices = new FileServices()
const userServices = new UserServices()

export default class ApplicationFormStore {

    private rootStore: RootStore

    applyingUser: UserModel = new UserModel()
    generalInfoStatus: UserGeneralInfoStatus = new UserGeneralInfoStatus()
    personalInfoStatus: UserPersonalInfoStatus = new UserPersonalInfoStatus()
    currentFormStep: FormSteps = FormSteps.GENERAL_INFO
    isGeneralInfoValid: boolean = false
    isPersonalInfoValid: boolean = false
    isQuestionsValid: boolean = false
    isOtherHairColorSelected: boolean = false
    isOtherEyeColorSelected: boolean = false
    formSubmitted: boolean = false

    constructor(rootStore?: RootStore) {
        this.rootStore = rootStore
        makeAutoObservable(this)
    }

    editUserModel(key: string, value: any) {
        this.applyingUser[key] = value
    }
    editUserGeneralInfoModel(key: string, value: any) {
        this.applyingUser.generalInfo[key] = value
        this.validateGeneralInfoTextField(key)
    }
    editUserPersonalInfoModel(key: string, value: any) {
        this.applyingUser.personalInfo[key] = value
        this.validatePersonalInfoTextField(key)
    }
    editQuestionsModel(key: string, value: any) {
        if (key === "contests") {
            var index = this.applyingUser.questionsInfo[key].indexOf(value)
            if (index === -1) {
                this.applyingUser.questionsInfo[key].push(value)
            } else {
                this.applyingUser.questionsInfo[key].splice(index, 1)
            }
        } else {
            this.applyingUser.questionsInfo[key] = value
        }
        this.validateQuestionInfoField()
    }
    validateGeneralInfoTextField(key: string) {
        switch (key) {
            case "mail":
                this.generalInfoStatus.mailValid = this.applyingUser.generalInfo.mail.match(RegexRules.MAIL) ? FieldStatus.SUCCESS : FieldStatus.ALERT
                break;
            case "phoneNumber":
                this.generalInfoStatus.phoneNumberValid = this.applyingUser.generalInfo.phoneNumber.length === 11 ? FieldStatus.SUCCESS : FieldStatus.ALERT
                break;
            default:
                this.generalInfoStatus[`${key}Valid`] = this.applyingUser.generalInfo[key].length > 0 ? FieldStatus.SUCCESS : FieldStatus.ALERT
                break;
        }
        this.checkGeneralInfoButtonStatus()
    }
    validatePersonalInfoTextField(key: string) {
        this.personalInfoStatus[`${key}Valid`] = this.applyingUser.personalInfo[key].length > 0 ? FieldStatus.SUCCESS : FieldStatus.ALERT
        this.checkPersonalInfoButtonStatus()
    }
    validateQuestionInfoField() {
        if (this.applyingUser.questionsInfo.contests.length > 0 && this.applyingUser.questionsInfo.profilePhoto.length > 0 && this.applyingUser.questionsInfo.isTermsAggreed) {
            this.isQuestionsValid = true
        } else {
            this.isQuestionsValid = false
        }
    }
    checkGeneralInfoButtonStatus() {
        for (var property in this.generalInfoStatus) {
            if (this.generalInfoStatus[property] !== FieldStatus.SUCCESS) {
                this.isGeneralInfoValid = false
                return
            }
        }
        this.isGeneralInfoValid = true
    }
    checkPersonalInfoButtonStatus() {
        for (var property in this.personalInfoStatus) {
            if (this.personalInfoStatus[property] !== FieldStatus.SUCCESS) {
                this.isPersonalInfoValid = false
                return
            }
        }
        this.isPersonalInfoValid = true
    }
    setCurrentFormStep(step: FormSteps) {
        this.currentFormStep = step
    }
    onGeneralInfoClick() {
        this.setCurrentFormStep(FormSteps.GENERAL_INFO)
    }
    onPersonalInfoClick() {
        if (this.isGeneralInfoValid)
            this.setCurrentFormStep(FormSteps.PERSONAL_INFO)
    }
    onQuestionsClick() {
        if (this.isPersonalInfoValid && this.isGeneralInfoValid)
            this.setCurrentFormStep(FormSteps.QUESTIONS)
    }
    toggleOtherHairColor() {
        this.isOtherHairColorSelected = !this.isOtherHairColorSelected
        this.editUserPersonalInfoModel("hairColor", "")
    }
    toggleOtherEyeColor() {
        this.isOtherEyeColorSelected = !this.isOtherEyeColorSelected
        this.editUserPersonalInfoModel("eyeColor", "")
    }
    async uploadUserProfilePhoto(file: File) {
        var downloadURL = await fileServices.uploadFileToStorage(file)
        this.editQuestionsModel("profilePhoto", downloadURL)
    }
    setContestIds() {
        this.applyingUser.contestIds = []
        this.applyingUser.questionsInfo.contests.forEach(contest => {
            var contestCode = contest.split(" ").pop()
            this.applyingUser.contestIds.push(`${contestCode[0]}-${this.applyingUser.id}`)
        }
        )

    }
    setFormSubmitStatus(value: boolean) {
        this.formSubmitted = value
    }

    async sendApplication() {
        this.setFormSubmitStatus(true)
        this.setContestIds()
        try {
            await userServices.saveApplicationInDb(this.applyingUser)
            this.resetApplicationFormStore()
        } catch (e) {
            alert(e.message)
            this.setFormSubmitStatus(false)
        }
    }

    resetApplicationFormStore() {
        this.applyingUser = new UserModel()
        this.generalInfoStatus = new UserGeneralInfoStatus()
        this.personalInfoStatus = new UserPersonalInfoStatus()
        this.currentFormStep = FormSteps.GENERAL_INFO
        this.isGeneralInfoValid = false
        this.isPersonalInfoValid = false
        this.isQuestionsValid = false
        this.isOtherHairColorSelected = false
        this.isOtherEyeColorSelected = false
    }

}

