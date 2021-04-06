import { makeAutoObservable } from "mobx"
import FieldStatus from "../../enums/field_status"

export default class UserGeneralInfoStatus {
    mailValid: FieldStatus
    nameValid: FieldStatus
    surnameValid: FieldStatus
    nickNameValid: FieldStatus
    birthDayValid: FieldStatus
    birthMonthValid: FieldStatus
    birthYearValid: FieldStatus
    phoneNumberValid: FieldStatus
    countryValid: FieldStatus
    educationValid: FieldStatus
    jobValid: FieldStatus
    maritalStatusValid: FieldStatus
    hobbiesValid: FieldStatus
    cityValid: FieldStatus

    constructor(
        mailValid: FieldStatus = FieldStatus.IDLE,
        nameValid: FieldStatus = FieldStatus.IDLE,
        surnameValid: FieldStatus = FieldStatus.IDLE,
        nickNameValid: FieldStatus = FieldStatus.IDLE,
        birthDayValid: FieldStatus = FieldStatus.IDLE,
        birthMonthValid: FieldStatus = FieldStatus.IDLE,
        birthYearValid: FieldStatus = FieldStatus.IDLE,
        phoneNumberValid: FieldStatus = FieldStatus.IDLE,
        countryValid: FieldStatus = FieldStatus.IDLE,
        educationValid: FieldStatus = FieldStatus.IDLE,
        jobValid: FieldStatus = FieldStatus.IDLE,
        maritalStatusValid: FieldStatus = FieldStatus.IDLE,
        hobbiesValid: FieldStatus = FieldStatus.IDLE,
        cityValid: FieldStatus = FieldStatus.IDLE,

    ) {
        this.mailValid = mailValid
        this.nameValid = nameValid
        this.surnameValid = surnameValid
        this.nickNameValid = nickNameValid
        this.birthDayValid = birthDayValid
        this.birthMonthValid = birthMonthValid
        this.birthYearValid = birthYearValid
        this.phoneNumberValid = phoneNumberValid
        this.countryValid = countryValid
        this.educationValid = educationValid
        this.jobValid = jobValid
        this.maritalStatusValid = maritalStatusValid
        this.hobbiesValid = hobbiesValid
        this.cityValid = cityValid
        makeAutoObservable(this)
    }

    static from(json: any) {
        return Object.assign(new UserGeneralInfoStatus(), json);
    }
}