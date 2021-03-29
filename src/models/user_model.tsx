import { makeAutoObservable } from "mobx"
import { uuid } from 'uuidv4';

export default class UserModel {
    id: string
    gender: string
    mail: string
    name: string
    surname: string
    birthDay: string
    birthMonth: string
    birthYear: string
    phoneNumber: string
    weight: string
    body: string
    lengthInMeters: string
    lengthInCms: string
    extraMessage: string
    termsAggreed: boolean
    city: string


    constructor(
        id: string = uuid(),
        gender: string = "",
        mail: string = "",
        name: string = "",
        surname: string = "",
        birthDay: string = "",
        birthMonth: string = "",
        birthYear: string = "",
        phoneNumber: string = "",
        weight: string = "",
        body: string = "",
        lengthInMeters: string = "",
        lengthInCms: string = "",
        extraMessage: string = "",
        termsAggreed: boolean = false,
        city: string = "",


    ) {
        this.id = id
        this.gender = gender
        this.mail = mail
        this.name = name
        this.birthDay = birthDay
        this.birthMonth = birthMonth
        this.birthYear = birthYear
        this.phoneNumber = phoneNumber
        this.weight = weight
        this.body = body
        this.lengthInMeters = lengthInMeters
        this.lengthInCms = lengthInCms
        this.extraMessage = extraMessage
        this.termsAggreed = termsAggreed
        this.city = city
        makeAutoObservable(this)
    }

    static from(json: any) {
        return Object.assign(new UserModel(), json);
    }
}