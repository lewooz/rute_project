import { makeAutoObservable } from "mobx"

export default class UserGeneralInfoModel {
    mail: string
    name: string
    surname: string
    nickName: string
    birthDay: string
    birthMonth: string
    birthYear: string
    phoneNumber: string
    country: string
    education: string
    job: string
    maritalStatus: string
    hobbies: string
    city: string

    constructor(
        mail: string = "",
        name: string = "",
        surname: string = "",
        nickName: string = "",
        birthDay: string = "",
        birthMonth: string = "",
        birthYear: string = "",
        phoneNumber: string = "",
        country: string = "",
        education: string = "",
        job: string = "",
        maritalStatus: string = "",
        hobbies: string = "",
        city: string = "",

    ) {
        this.mail = mail
        this.name = name
        this.surname = surname
        this.nickName = nickName
        this.birthDay = birthDay
        this.birthMonth = birthMonth
        this.birthYear = birthYear
        this.phoneNumber = phoneNumber
        this.country = country
        this.education = education
        this.job = job
        this.maritalStatus = maritalStatus
        this.hobbies = hobbies
        this.city = city
        makeAutoObservable(this)
    }

    static from(json: any) {
        return Object.assign(new UserGeneralInfoModel(), json);
    }
}